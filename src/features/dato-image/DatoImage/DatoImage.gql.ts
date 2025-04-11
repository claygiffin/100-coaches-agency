import { gql } from 'graphql-tag'

export const ResponsiveImageFragment = gql`
  fragment ResponsiveImage on ResponsiveImage {
    __typename
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`
