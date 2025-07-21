import { ResponsiveImageFragment } from '@/features/dato-image'
import { PageLinkFragment } from '@/features/links'
import gql from 'graphql-tag'

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

export const ArticlesBooksFragment = gql`
  fragment ArticlesBooks on ThoughtLeadershipPageRecord {
    booksHeading
    booksArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }

  ${PageLinkFragment}
`
