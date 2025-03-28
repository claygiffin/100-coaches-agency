import dotenv from 'dotenv'
import * as fs from 'fs'
import { DownloaderHelper } from 'node-downloader-helper'
import path from 'path'

dotenv.config()

export const docsToPublic = async () => {
  const getData = async () => {
    try {
      const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
          ...(process.env.DATOCMS_ENVIRONMENT && {
            'X-Environment': `${process.env.DATOCMS_ENVIRONMENT}`,
          }),
          ...(process.env.DATOCMS_DRAFT_MODE === 'true'
            ? { 'X-Include-Drafts': 'true' }
            : {}),
        },
        body: JSON.stringify({
          query: `
            query DocsQuery {
              allUploads(
                filter: {type: {in: [pdfdocument, richtext, presentation, spreadsheet, archive]}, inUse: {eq: "true"}}
              ) {
                url
                filename
                id
              }
            }
          `,
        }),
      })
      const responseBody = await response.json()
      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`
        )
      }
      return responseBody
    } catch (error: any) {
      console.log(error.message)
    }
  }

  type Data = {
    data: {
      allUploads: { url: string; filename: string; id: string }[]
    }
  }

  const { data } = (await getData()) as Data

  if (data) {
    const documentsDir = path.join(process.cwd(), 'public', 'documents')

    const clearDirectory = (dirPath: string) => {
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true }) // Deletes all files & subfolders
        console.log(`Cleared folder: ${dirPath}`)
      }
      fs.mkdirSync(dirPath, { recursive: true }) // Recreate empty folder
    }
    clearDirectory(documentsDir)

    data.allUploads.forEach(document => {
      const dirPath = path.join(documentsDir, document.id)

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
      }

      const download = new DownloaderHelper(document.url, dirPath, {
        override: true,
        fileName: document.filename,
      })
      download.start().catch(err => console.error(err))
      download.on('error', err => console.log('Download Failed', err))
      download.on('end', () =>
        console.log(`Download Complete: ${document.filename}`)
      )
    })
  } else {
    console.log(`No documents downloaded: Data ${data}`)
  }
}

// ✅ **Call the function when the script runs**
docsToPublic().catch(console.error)
