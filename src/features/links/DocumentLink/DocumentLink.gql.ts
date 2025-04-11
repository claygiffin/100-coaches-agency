import { gql } from 'graphql-tag'

export const DocumentLinkFragment = gql`
  fragment DocumentLink on DocumentLinkRecord {
    __typename
    id
    linkText
    document {
      filename
      id
      url
    }
  }
`
