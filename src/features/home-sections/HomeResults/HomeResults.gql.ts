import gql from "graphql-tag";

export const HomeResultsFragment = gql`
  fragment HomeResults on HomePageRecord {
    resultsHeading
    resultsSubheading(markdown: true)
  }
`