import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import { PageLinkFragment } from '@/features/links'

export const NewsletterFragment = gql`
  fragment Newsletter on NewsletterRecord {
    id
    __typename
    title
    body {
      value
      blocks {
        id
        __typename
        image {
          responsiveImage(
            imgixParams: { q: 60, auto: [format, compress] }
          ) {
            ...ResponsiveImage
          }
          alt
          title
        }
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          ar: "16:9"
          crop: focalpoint
          fit: crop
          q: 50
          auto: [format, compress]
        }
      ) {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    createdAt: _createdAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ResponsiveImageFragment}
`

export const LeaderShipNewslettersFragment = gql`
  fragment LeaderShipNewsletters on ThoughtLeadershipPageRecord {
    newslettersLabel
    newslettersHeading
    newslettersArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    newslettersItem {
      ...Newsletter
    }
  }
  ${NewsletterFragment}
  ${PageLinkFragment}
`
