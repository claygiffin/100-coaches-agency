import { GoogleTagManager } from '@next/third-parties/google'
import gql from 'graphql-tag'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { AlertBar, AlertBarFragment } from '@/features/alert'
import {
  CoachCategoryMenu,
  CoachCategoryMenuFragment,
  ContextWrapper,
  Footer,
  Nav,
  NavFragment,
} from '@/features/layout'
import { HubspotTracking } from '@/features/tracking'
import { datoRequest } from '@/lib/datocms-fetch'
import { bitter, brother1816 } from '@/theme/fonts/fontface'
import '@/theme/globals.scss'
import { classes } from '@/utils/css'

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

const query = gql`
  query RootLayout {
    alertBar {
      ...AlertBar
    }
    nav {
      ...Nav
    }
    allCoachCategories {
      ...CoachCategoryMenu
    }
  }
  ${AlertBarFragment}
  ${CoachCategoryMenuFragment}
  ${NavFragment}
`

const RootLayout = async ({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) => {
  const { data } = await datoRequest<Queries.RootLayoutQuery>({ query })

  return (
    <ContextWrapper>
      <html
        lang="en"
        className={classes(bitter.variable, brother1816.variable)}
      >
        <head>
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''}
          />
          <HubspotTracking />
        </head>
        <body>
          <AlertBar data={data.alertBar} />
          <Nav data={data.nav} />
          <CoachCategoryMenu
            coachCategories={data.allCoachCategories}
            backArrow={true}
          />
          {children}
          <Footer />
          <div
            id="lightbox-container"
            style={{ zIndex: 100 }}
          >
            {modal}
          </div>
        </body>
      </html>
    </ContextWrapper>
  )
}

export default RootLayout
