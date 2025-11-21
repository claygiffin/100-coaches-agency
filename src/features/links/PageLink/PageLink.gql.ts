import { gql } from 'graphql-tag'

export const PageLinkFragment = gql`
  fragment PageLink on PageLinkRecord {
    __typename
    id
    linkText
    page {
      __typename
      ... on HowWeWorkPageRecord {
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
      ... on ArticlesPageRecord {
        slug
      }
      ... on ArchivePageRecord {
        slug
      }
      ... on AdvisorsPageRecord {
        slug
      }
      ... on InteriorPageRecord {
        slug
      }
    }
  }
`
