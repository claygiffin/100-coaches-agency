import { gql } from 'graphql-tag'

export const AccordionItemFragment = gql`
  fragment AccordionItem on AccordionItemRecord {
    __typename
    id
    heading
    body {
      value
    }
  }
`
