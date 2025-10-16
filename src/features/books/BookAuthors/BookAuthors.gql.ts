import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const BookAuthorFragment = gql`
  fragment BookAuthor on AuthorRecord {
    __typename
    id
    name
    title
    bio {
      value
    }
    photo {
      responsiveImage(
        imgixParams: {
          q: 50
          # sat: -100
          ar: "1:1"
          fit: crop
          crop: [focalpoint]
        }
      ) {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
  }
  ${ResponsiveImageFragment}
`
