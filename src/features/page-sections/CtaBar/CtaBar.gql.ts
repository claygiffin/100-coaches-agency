import { gql } from 'graphql-tag'

import {
  ArticleLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const CtaBarFragment = gql`
  fragment CtaBar on CtaBarRecord {
    __typename
    id
    text {
      value
    }
    cta {
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
