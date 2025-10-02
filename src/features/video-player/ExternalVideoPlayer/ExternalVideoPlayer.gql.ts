import gql from 'graphql-tag'

export const ExternalVideoFileFragment = gql`
  fragment ExternalVideoFile on VideoField {
    url
    thumbnailUrl
    title
    width
    height
  }
`
