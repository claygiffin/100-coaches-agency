import { gql } from 'graphql-tag'

import {
  ArticleLinkFragment,
  CoachMenuLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const NavFragment = gql`
  fragment Nav on NavRecord {
    __typename
    id
    links {
      ... on CoachMenuLinkRecord {
        ...CoachMenuLink
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
