import { gql } from 'graphql-tag'

import { MediaCarouselFragment } from '@/features/carousel'
import {
  AccordionFragment,
  ButtonFragment,
  LinkListFragment,
} from '@/features/ui'

export const BioSectionFragment = gql`
  fragment BioSection on BioSectionRecord {
    __typename
    id
    layout
    colorScheme
    heading
    title
    body {
      value
      blocks {
        ... on AccordionRecord {
          ...Accordion
        }
        ... on ButtonRecord {
          ...Button
        }
        ... on LinkListRecord {
          ...LinkList
        }
      }
    }
    headshot {
      responsiveImage {
        ...ResponsiveImage
      }
    }
  }
  ${AccordionFragment}
  ${ButtonFragment}
  ${LinkListFragment}
  ${MediaCarouselFragment}
`
