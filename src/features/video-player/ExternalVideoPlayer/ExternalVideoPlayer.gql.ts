import gql from 'graphql-tag'

export const ExternalVideoFileFragment = gql`
  fragment ExternalVideoFile on VideoField {
    __typename
    url
    thumbnailUrl
    title
    width
    height
  }
`
