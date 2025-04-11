import { gql } from 'graphql-tag'

export const CoachCategoryMenuFragment = gql`
  fragment CoachCategoryMenu on CoachCategoryRecord {
    __typename
    id
    categoryName
    categoryNameFull
    description
    categorySlug
  }
`
