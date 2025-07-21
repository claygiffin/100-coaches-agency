import gql from 'graphql-tag'

import { FormLinkFragment, PageLinkFragment } from '@/features/links'

export const AboutHowFragment = gql`
  fragment AboutHow on AboutPageRecord {
    __typename
    id
    howHeading
    howBody {
      value
    }
    howDetails {
      title
      description {
        value
      }
    }
    howLink {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on FormLinkRecord {
        ...FormLink
      }
    }
  }
  ${PageLinkFragment}
  ${FormLinkFragment}
`
export const AdvisorsHowFragment = gql`
  fragment AdvisorsHow on AdvisorsPageRecord {
    __typename
    id
    howHeading
    howBody {
      value
    }
    howDetails {
      title
      description {
        value
      }
    }
    howLink {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on FormLinkRecord {
        ...FormLink
      }
    }
  }
  ${PageLinkFragment}
  ${FormLinkFragment}
`
