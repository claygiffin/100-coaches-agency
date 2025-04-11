import { gql } from 'graphql-tag'

export const ExternalLinkFragment = gql`
  fragment ExternalLink on ExternalLinkRecord {
    __typename
    id
    url
    linkText
  }
`
