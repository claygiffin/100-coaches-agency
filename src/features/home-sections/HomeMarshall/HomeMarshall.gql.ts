import { gql } from 'graphql-tag'

import {
  CoachMenuLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const HomeMarshallFragment = gql`
  fragment HomeMarshall on HomePageRecord {
    marshallHeading
    marshallBody {
      value
    }
    marshallCta {
      ... on CoachMenuLinkRecord {
        ...CoachMenuLink
      }
      ... on FormLinkRecord {
        ...FormLink
      }
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    marshallQuote {
      quote {
        value
      }
      attribution
    }
    marshallImage {
      responsiveImage(imgixParams: { q: 75, sat: -100, auto: [format, compress] }) {
        ...ResponsiveImage
      }
    }
  }
  ${PageLinkFragment}
  ${FormLinkFragment}
  ${CoachMenuLinkFragment}
`
