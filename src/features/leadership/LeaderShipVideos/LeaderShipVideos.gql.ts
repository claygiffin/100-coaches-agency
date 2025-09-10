import gql from 'graphql-tag'

import {
  ExternalVideoFragment,
  HubspotFormFragment,
  InternalVideoFragment,
} from '@/features/articles'
import { ResponsiveImageFragment } from '@/features/dato-image'
import { PageLinkFragment } from '@/features/links'

export const VideoFragment = gql`
  fragment Video on VideoRecord {
    id
    __typename
    title
    body {
      value
      blocks {
        ... on ImageRecord {
          id
          __typename
          image {
            responsiveImage(
              imgixParams: { q: 60, auto: [format, compress] }
            ) {
              ...ResponsiveImage
            }
            alt
            title
          }
        }
        ... on ExternalVideoRecord {
          ...ExternalVideo
        }
        ... on InternalVideoRecord {
          ...InternalVideo
        }
        ... on HubspotFormRecord {
          ...HubspotForm
        }
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          w: 320
          h: 180
          crop: focalpoint
          fit: crop
          q: 50
          auto: [format, compress]
        }
      ) {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    createdAt: _createdAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ResponsiveImageFragment}
  ${ExternalVideoFragment}
  ${InternalVideoFragment}
  ${HubspotFormFragment}
`

export const LeaderShipVideosFragment = gql`
  fragment LeaderShipVideos on ThoughtLeadershipPageRecord {
    videosHeading
    videosArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    videoItemsOverrides {
      ...Video
    }
  }

  ${PageLinkFragment}
  ${VideoFragment}
`
