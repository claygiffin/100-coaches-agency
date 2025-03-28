import { gql } from 'graphql-tag'
export const HomeIntroFragment = gql`
  fragment HomeIntro on HomePageRecord {
    introHeading
  }
`
