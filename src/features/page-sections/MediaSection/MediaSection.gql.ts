import { gql } from 'graphql-tag'

import { MediaCarouselFragment } from '@/features/carousel'

export const MediaSectionFragment = gql`
  fragment MediaSection on MediaSectionRecord {
    __typename
    id
    colorScheme
    mediaCarousel {
      ...MediaCarousel
    }
  }
  ${MediaCarouselFragment}
`
