import { gql } from 'graphql-tag'

export const MatchcraftStepFragment = gql`
  fragment MatchcraftStep on MatchcraftStepRecord {
    __typename
    id
    title
    description {
      value
    }
  }
`
