import { gql } from 'graphql-tag'

import {
  CoachMenuLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const AboutServicesFragment = gql`
  fragment AboutServices on AboutPageRecord {
    servicesHeading
    services {
      title
      description {
        value
      }
      link {
        ... on PageLinkRecord {
          ...PageLink
        }
        ... on CoachMenuLinkRecord {
          ...CoachMenuLink
        }
      }
    }
  }
  ${PageLinkFragment}
  ${CoachMenuLinkFragment}
`
