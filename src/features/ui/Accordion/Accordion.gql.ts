import { gql } from 'graphql-tag'

import { AccordionItemFragment } from './AccordionItem/AccordionItem.gql'

export const AccordionFragment = gql`
  fragment Accordion on AccordionRecord {
    __typename
    id
    items {
      ...AccordionItem
    }
  }
  ${AccordionItemFragment}
`
