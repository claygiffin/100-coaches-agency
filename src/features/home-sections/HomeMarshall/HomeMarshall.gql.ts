import { gql } from 'graphql-tag'
export const HomeMarshallFragment = gql`
  fragment HomeMarshall on HomePageRecord {
    marshallHeading
    marshallBody(markdown: true)
    marshallImage {
      responsiveImage(imgixParams: {q: 75}) {
        ...ResponsiveImage
      }
    }
  }
`