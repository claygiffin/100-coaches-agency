import gql from 'graphql-tag'

export const AnchorLinkFragment = gql`
  fragment AnchorLink on AnchorLinkRecord {
    __typename
    id
    linkText
    href
  }
`
