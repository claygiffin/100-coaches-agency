import gql from 'graphql-tag'

import { FormFragment } from '@/features/form'
import { PageLinkFragment } from '@/features/links'

export const HomeContactFragment = gql`
  fragment HomeContact on HomePageRecord {
    contactHeading
    contactBody {
      value
    }
    contactLink {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    contactForm {
      ...Form
    }
  }
  ${FormFragment}
  ${PageLinkFragment}
`
