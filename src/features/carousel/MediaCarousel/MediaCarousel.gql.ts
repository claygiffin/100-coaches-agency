import { gql } from 'graphql-tag'

import {
  ExternalVideoFileFragment,
  InternalVideoFileFragment,
} from '@/features/video-player'

import { MediaCarouselImageFragment } from './MediaCarouselImage/MediaCarouselImage.gql'

export const MediaCarouselFragment = gql`
  fragment MediaCarousel on MediaCarouselRecord {
    __typename
    id
    media {
      ... on ExternalVideoRecord {
        id
        __typename
        video {
          ...ExternalVideoFile
        }
      }
      ... on InternalVideoRecord {
        id
        __typename
        video {
          ...InternalVideoFile
        }
      }
      ... on ImageBlockRecord {
        ...MediaCarouselImage
      }
    }
  }
  ${ExternalVideoFileFragment}
  ${InternalVideoFileFragment}
  ${MediaCarouselImageFragment}
`
