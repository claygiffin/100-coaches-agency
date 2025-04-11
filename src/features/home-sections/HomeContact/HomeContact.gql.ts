import gql from 'graphql-tag'

import { FormFragment } from '@/features/form'

export const HomeContactFragment = gql`
  fragment HomeContact on HomePageRecord {
    contactHeading
    contactBody {
      value
    }
    contactForm {
      ...Form
    }
  }
  ${FormFragment}
`
