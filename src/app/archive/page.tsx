import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { ArchiveGrid } from '@/features/archive'
import { ArticleFragment } from '@/features/articles'
import {
  BookFragment,
  NewsletterFragment,
  VideoFragment,
} from '@/features/leadership-sections'
import { PageLinkFragment } from '@/features/links'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './archive.module.scss'

// GraphQL query
const query = gql`
  query ArchivePage {
    archivePage {
      archiveHeading
      archiveBackLink {
        ... on PageLinkRecord {
          ...PageLink
        }
      }
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allBooks {
      ...Book
    }
    allVideos {
      ...Video
    }
    allArticles {
      ...Article
    }
    allNewsletters {
      ...Newsletter
    }
  }
  ${PageLinkFragment}
  ${BookFragment}
  ${VideoFragment}
  ${ArticleFragment}
  ${NewsletterFragment}
`

type Props = {
  searchParams: Promise<{
    category: string | undefined
  }>
}

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { archivePage },
  } = await datoRequest<Queries.ArchivePageQuery>({
    query,
  })
  return generateDatoCmsMetadata(archivePage?._seoMetaTags || [], {
    canonicalSlug: '',
  })
}

const ArchivePage: NextPage<Props> = async ({ searchParams }) => {
  const { category } = await searchParams
  const { data } = await datoRequest<Queries.ArchivePageQuery>({
    query,
  })

  return (
    <main className={styles.main}>
      <ArchiveGrid
        category={category || 'all content'}
        pageData={data}
      />
    </main>
  )
}

export default ArchivePage
