import { gql } from 'graphql-tag'

import {
  ArticleLinkFragment,
  CoachMenuLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const ButtonFragment = gql`
  fragment Button on ButtonRecord {
    __typename
    id
    button {
      ... on ArticleLinkRecord {
        ...ArticleLink
      }
      ... on CoachMenuLinkRecord {
        ...CoachMenuLink
      }
      ... on DocumentLinkRecord {
        ...DocumentLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
      ... on FormLinkRecord {
        ...FormLink
      }
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }
  ${ArticleLinkFragment}
  ${CoachMenuLinkFragment}
  ${DocumentLinkFragment}
  ${ExternalLinkFragment}
  ${FormLinkFragment}
  ${PageLinkFragment}
`
