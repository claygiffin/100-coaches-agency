import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const PageHeroFragment = gql`
  fragment PageHero on PageHeroRecord {
    __typename
    id
    heading
    backgroundImage {
      responsiveImage(
        imgixParams: { ar: "4:1", fit: crop, crop: [focalpoint] }
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
