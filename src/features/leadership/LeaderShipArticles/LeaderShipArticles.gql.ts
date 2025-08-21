import gql from 'graphql-tag'

import { ArticleFragment } from '@/features/articles'
import { PageLinkFragment } from '@/features/links'

export const LeaderShipArticlesFragment = gql`
  fragment LeaderShipArticles on ThoughtLeadershipPageRecord {
    articlesHeading
    articlesArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    articleItemsOverrides {
      ...Article
    }
  }
  ${ArticleFragment}
  ${PageLinkFragment}
`
