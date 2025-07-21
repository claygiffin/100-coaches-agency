import { ResponsiveImageFragment } from '@/features/dato-image'
import { PageLinkFragment } from '@/features/links'
import gql from 'graphql-tag'

export const NewsletterFragment = gql`
  fragment Newsletter on NewsletterRecord {
    title
    image {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    body {
      value
    }
    createdAt
  }
  ${ResponsiveImageFragment}
`

export const ArticlesNewslettersFragment = gql`
  fragment ArticlesNewsletters on ThoughtLeadershipPageRecord {
    newslettersLabel
    newslettersHeading
    newslettersArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }

  ${PageLinkFragment}
`
