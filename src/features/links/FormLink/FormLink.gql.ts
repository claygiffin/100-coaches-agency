import { gql } from 'graphql-tag'

export const FormLinkFragment = gql`
  fragment FormLink on FormLinkRecord {
    __typename
    id
    linkText
    form {
      __typename
      ... on FormModalRecord {
        slug
      }
    }
  }
`
