import { gql } from 'graphql-tag'

import { TestimonialFragment } from '@/features/testimonials'

export const AboutPartnerFragment = gql`
  fragment AboutPartner on AboutPageRecord {
    __typename
    id
    partnerHeading
    partnerBody {
      value
    }
    testimonials {
      ...Testimonial
    }
  }
  ${TestimonialFragment}
`

export const AdvisorsPartnerFragment = gql`
  fragment AdvisorsPartner on AdvisorsPageRecord {
    __typename
    id
    partnerHeading
    partnerBody {
      value
    }
    testimonials {
      ...Testimonial
    }
  }
  ${TestimonialFragment}
`
