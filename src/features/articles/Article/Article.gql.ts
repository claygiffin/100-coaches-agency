import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const ExternalVideoFragment = gql`
  fragment ExternalVideo on ExternalVideoRecord {
    id
    __typename
    file {
      url
      thumbnailUrl
    }
    createdAt: _createdAt
  }
`

export const InternalVideoFragment = gql`
  fragment InternalVideo on InternalVideoRecord {
    id
    __typename
    file {
      url
      video {
        thumbnailUrl
      }
    }
    createdAt: _createdAt
  }
`

export const ArticleFragment = gql`
  fragment Article on ArticleRecord {
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
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          ar: "16:9"
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
`
