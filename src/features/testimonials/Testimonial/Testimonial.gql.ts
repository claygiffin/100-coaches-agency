import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const TestimonialFragment = gql`
  fragment Testimonial on TestimonialRecord {
    __typename
    id
    testimonial {
      value
    }
    attribution
    headshot {
      responsiveImage(
        imgixParams: { ar: "1:1", fit: crop, crop: [focalpoint] }
      ) {
        ...ResponsiveImage
      }
    }
    logo {
      format
      url
      alt
      width
      height
      responsiveImage {
        ...ResponsiveImage
      }
    }
    logoBackgroundColor {
      hex
    }
  }
  ${ResponsiveImageFragment}
`
