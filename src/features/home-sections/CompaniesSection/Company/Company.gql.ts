import { gql } from 'graphql-tag'

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
`
