import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const ArticleFragment = gql`
  fragment Article on ArticleRecord {
    id
    __typename
    title
    body {
      value
      blocks {
        id
        __typename
        image {
          responsiveImage(imgixParams: { q: 60, auto: [format, compress] }) {
            ...ResponsiveImage
          }
          alt
          title
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
    }
    createdAt: _createdAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ResponsiveImageFragment}
`
