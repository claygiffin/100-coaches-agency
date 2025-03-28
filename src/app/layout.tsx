import { GoogleTagManager } from '@next/third-parties/google'
import gql from 'graphql-tag'
import type { ReactNode } from 'react'

import { datoRequest } from '@/lib/datocms-fetch'
import { bitter, brother1816 } from '@/theme/fonts/fontface'
import '@/theme/globals.scss'
import { classes } from '@/utils/css'

const query = gql`
  query RootLayout {
    homePage {
      heroHeading1
    }
  }
`

const RootLayout = async ({
  children,
}: {
  children: ReactNode
  modal: ReactNode
}) => {
  const { data } = await datoRequest<Queries.RootLayoutQuery>({ query })
  return (
    <html
      lang="en"
      className={classes(bitter.variable, brother1816.variable)}
    >
      <head>
        <GoogleTagManager gtmId="GTM-KMZW7CF7" />
      </head>
      <body>
        {children}
        <div id="lightbox-container"></div>
      </body>
    </html>
  )
}

export default RootLayout
