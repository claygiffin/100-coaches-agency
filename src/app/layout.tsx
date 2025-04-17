import { GoogleTagManager } from '@next/third-parties/google'
import gql from 'graphql-tag'
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
import { ActiveCampaign } from '@/features/tracking'
import { datoRequest } from '@/lib/datocms-fetch'
import { bitter, brother1816 } from '@/theme/fonts/fontface'
import '@/theme/globals.scss'
import { classes } from '@/utils/css'

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
          <ActiveCampaign accountId={'69558792'} />
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
          <div id="lightbox-container">{modal}</div>
        </body>
      </html>
    </ContextWrapper>
  )
}

export default RootLayout
