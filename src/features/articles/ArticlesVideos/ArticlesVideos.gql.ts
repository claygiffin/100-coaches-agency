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

export const ArticlesVideosFragment = gql`
  fragment ArticlesVideos on ThoughtLeadershipPageRecord {
    videosHeading
    videosArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }

  ${PageLinkFragment}
`
