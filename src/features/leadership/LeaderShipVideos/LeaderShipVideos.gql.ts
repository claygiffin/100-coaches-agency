import gql from 'graphql-tag'

import { PageLinkFragment } from '@/features/links'

export const VideoFragment = gql`
  fragment Video on VideoRecord {
    description
    file {
      url
      thumbnailUrl
    }
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
  }

  ${PageLinkFragment}
`
