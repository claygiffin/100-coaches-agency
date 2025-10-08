import { gql } from 'graphql-tag'

import { TestimonialFragment } from '@/features/testimonials'

export const TestimonialSectionFragment = gql`
  fragment TestimonialSection on TestimonialSectionRecord {
    __typename
    id
    colorScheme
    testimonials {
      ...Testimonial
    }
  }
  ${TestimonialFragment}
`
