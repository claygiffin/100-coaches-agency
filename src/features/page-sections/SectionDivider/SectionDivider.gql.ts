import { gql } from 'graphql-tag'

export const SectionDividerFragment = gql`
  fragment SectionDivider on SectionDividerRecord {
    __typename
    id
    heading
  }
`
