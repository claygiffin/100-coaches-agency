import gql from 'graphql-tag'

import { ArticleFragment } from '@/features/articles'
import { PageLinkFragment } from '@/features/links'

export const LeadershipArticlesFragment = gql`
  fragment LeadershipArticles on ThoughtLeadershipPageRecord {
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
