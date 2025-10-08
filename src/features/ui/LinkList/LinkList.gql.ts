import { gql } from 'graphql-tag'

import {
  ArticleLinkFragment,
  CoachMenuLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const LinkListFragment = gql`
  fragment LinkList on LinkListRecord {
    __typename
    id
    heading
    links {
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
