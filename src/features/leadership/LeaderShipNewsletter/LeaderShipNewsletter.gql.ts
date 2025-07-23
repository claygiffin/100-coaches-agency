import gql from 'graphql-tag'

import { PageLinkFragment } from '@/features/links'

export const LeaderShipNewslettersFragment = gql`
  fragment LeaderShipNewsletters on ThoughtLeadershipPageRecord {
    newslettersLabel
    newslettersHeading
    newslettersArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }

  ${PageLinkFragment}
`
