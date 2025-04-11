import { gql } from 'graphql-tag'

export const NewsItemFragment = gql`
  fragment NewsItem on NewsItemRecord {
    id
    __typename
    title
    publication
    url
    createdAt: _createdAt
  }
`
