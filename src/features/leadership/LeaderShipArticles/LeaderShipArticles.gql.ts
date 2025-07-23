import gql from 'graphql-tag'

import { PageLinkFragment } from '@/features/links'

export const LeaderShipArticlesFragment = gql`
  fragment LeaderShipArticles on ThoughtLeadershipPageRecord {
    articlesHeading
    articlesArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }

  ${PageLinkFragment}
`
