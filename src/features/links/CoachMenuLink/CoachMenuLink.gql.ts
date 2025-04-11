import gql from 'graphql-tag'

export const CoachMenuLinkFragment = gql`
  fragment CoachMenuLink on CoachMenuLinkRecord {
    __typename
    id
    linkText
  }
`
