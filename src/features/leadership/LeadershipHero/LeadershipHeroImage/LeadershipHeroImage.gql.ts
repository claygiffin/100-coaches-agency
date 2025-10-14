import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const LeadershipHeroImageFragment = gql`
  fragment LeadershipHeroImage on FileField {
    horizontal: responsiveImage(
      imgixParams: { q: 100, ar: "16:10", fit: crop, auto: [format] }
    ) {
      ...ResponsiveImage
    }
    vertical: responsiveImage(
      imgixParams: { q: 100, ar: "8:7", fit: crop, auto: [format] }
    ) {
      ...ResponsiveImage
    }
    focalPoint {
      x
      y
    }
  }
  ${ResponsiveImageFragment}
`
