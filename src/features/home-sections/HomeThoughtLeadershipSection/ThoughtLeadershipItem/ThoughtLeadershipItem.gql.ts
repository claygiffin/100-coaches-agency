import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import {
  ArticleLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const ThoughtLeadershipItemFragment = gql`
  fragment ThoughtLeadershipItem on ThoughtLeadershipItemRecord {
    __typename
    id
    heading
    body {
      value
    }
    link {
      ... on ArticleLinkRecord {
        ...ArticleLink
      }
      ... on DocumentLinkRecord {
        ...DocumentLink
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
    image {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
  }

  ${ArticleLinkFragment}
  ${DocumentLinkFragment}
  ${FormLinkFragment}
  ${PageLinkFragment}
  ${ExternalLinkFragment}
  ${ResponsiveImageFragment}
`
