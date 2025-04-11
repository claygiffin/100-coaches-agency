import { gql } from 'graphql-tag'

export const ArticleLinkFragment = gql`
  fragment ArticleLink on ArticleLinkRecord {
    __typename
    id
    linkText
    article {
      __typename
      ... on ArticleRecord {
        slug
      }
    }
  }
`
