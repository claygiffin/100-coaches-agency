import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import {
  ArticleLinkFragment,
  DocumentLinkFragment,
  ExternalLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const PdfFragment = gql`
  fragment Pdf on PdfRecord {
    __typename
    id
    pdf {
      url
    }
    createdAt
  }
`

export const ThoughtLeadershipFeaturedItemFragment = gql`
  fragment ThoughtLeadershipFeaturedItem on ThoughtLeadershipFeaturedItemRecord {
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
      ... on PdfRecord {
        ...Pdf
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
  ${PdfFragment}
`

export const LeaderShipFeaturedFragment = gql`
  fragment LeaderShipFeatured on ThoughtLeadershipPageRecord {
    featuredHeading
    featuredBody {
      ...ThoughtLeadershipFeaturedItem
    }
  }
  ${ThoughtLeadershipFeaturedItemFragment}
`
