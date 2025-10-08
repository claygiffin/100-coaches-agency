import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const MediaCarouselImageFragment = gql`
  fragment MediaCarouselImage on ImageBlockRecord {
    __typename
    id
    image {
      responsiveImage {
        ...ResponsiveImage
      }
      width
      height
      focalPoint {
        x
        y
      }
    }
  }
  ${ResponsiveImageFragment}
`
