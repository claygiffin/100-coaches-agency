import { gql } from 'graphql-tag'

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
`
