import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import { PageLinkFragment } from '@/features/links'

export const BookFragment = gql`
  fragment Book on BookRecord {
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
    bio
    authors {
      name
    }
  }
  ${ResponsiveImageFragment}
`

export const LeaderShipBooksFragment = gql`
  fragment LeaderShipBooks on ThoughtLeadershipPageRecord {
    booksHeading
    booksArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }

  ${PageLinkFragment}
`
