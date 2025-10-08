import { gql } from 'graphql-tag'

import {
  ExternalVideoFragment,
  InternalVideoFragment,
} from '@/features/articles'
import { MediaCarouselFragment } from '@/features/carousel'
import {
  AccordionFragment,
  ButtonFragment,
  LinkListFragment,
} from '@/features/ui'

export const ContentSectionFragment = gql`
  fragment ContentSection on ContentSectionRecord {
    __typename
    id
    layout
    colorScheme
    heading
    subheading {
      value
    }
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
    pullQuote {
      value
    }
    media {
      ... on MediaCarouselRecord {
        ...MediaCarousel
      }
    }
  }
  ${AccordionFragment}
  ${ButtonFragment}
  ${LinkListFragment}
  ${MediaCarouselFragment}
`
