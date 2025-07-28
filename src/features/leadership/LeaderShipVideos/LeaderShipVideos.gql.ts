import gql from 'graphql-tag'

import { PageLinkFragment } from '@/features/links'

export const VideoFragment = gql`
  fragment Video on VideoRecord {
    __typename
    description
    file {
      url
      thumbnailUrl
    }
    createdAt: _createdAt
  }
`

export const LeaderShipVideosFragment = gql`
  fragment LeaderShipVideos on ThoughtLeadershipPageRecord {
    videosHeading
    videosArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    videosItems {
      ...Video
    }
  }

  ${PageLinkFragment}
  ${VideoFragment}
`
