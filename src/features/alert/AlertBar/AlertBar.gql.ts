import { gql } from 'graphql-tag'

import {
  ArticleLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const AlertBarFragment = gql`
  fragment AlertBar on AlertBarRecord {
    __typename
    id
    isActive
    alertText {
      value
    }
    link {
      ... on DocumentLinkRecord {
        ...DocumentLink
      }
      ... on ArticleLinkRecord {
        ...ArticleLink
      }
      ... on FormLinkRecord {
        ...FormLink
      }
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
  }
  ${DocumentLinkFragment}
  ${ArticleLinkFragment}
  ${FormLinkFragment}
  ${PageLinkFragment}
  ${ExternalLinkFragment}
`
