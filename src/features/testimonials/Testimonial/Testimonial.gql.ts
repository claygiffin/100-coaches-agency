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
  }
  ${ResponsiveImageFragment}
`
