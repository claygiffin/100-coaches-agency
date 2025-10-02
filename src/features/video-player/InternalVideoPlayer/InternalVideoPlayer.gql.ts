import gql from 'graphql-tag'

export const InternalVideoFileFragment = gql`
  fragment InternalVideoFile on VideoFileField {
    id
    __typename
    video {
      muxPlaybackId
      title
      width
      height
      thumbnailUrl
    }
  }
`
