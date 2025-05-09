import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const CompanyFragment = gql`
  fragment Company on CompanyRecord {
    __typename
    id
    name
    icon {
      format
      url
      responsiveImage(imgixParams: { maxH: 240 }) {
        ...ResponsiveImage
      }
      width
      height
      alt
    }
  }
  ${ResponsiveImageFragment}
`
