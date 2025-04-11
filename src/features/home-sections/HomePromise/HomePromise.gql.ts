import { gql } from 'graphql-tag'

import {
  CoachMenuLinkFragment,
  FormLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const HomePromiseFragment = gql`
  fragment HomePromise on HomePageRecord {
    promiseHeading
    promiseBody {
      value
    }
    promiseCta {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on FormLinkRecord {
        ...FormLink
      }
      ... on CoachMenuLinkRecord {
        ...CoachMenuLink
      }
    }
  }
  ${PageLinkFragment}
  ${FormLinkFragment}
  ${CoachMenuLinkFragment}
`
