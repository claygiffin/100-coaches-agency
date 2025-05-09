import { gql } from 'graphql-tag'

export const PageLinkFragment = gql`
  fragment PageLink on PageLinkRecord {
    __typename
    id
    linkText
    page {
      __typename
      ... on AboutPageRecord {
        slug
      }
      ... on CoachCategoryRecord {
        slug: categorySlug
      }
      ... on ThoughtLeadershipPageRecord {
        slug
      }
      ... on ContactPageRecord {
        slug
      }
    }
  }
`
