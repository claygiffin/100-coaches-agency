import { gql } from 'graphql-tag'

import { MatchcraftStepFragment } from './MatchcraftStep/MatchcraftStep.gql'

export const HowWeWorkFragment = gql`
  fragment HowWeWork on HowWeWorkPageRecord {
    __typename
    id
    heroDescription {
      value
    }
    intro {
      value
    }
    steps {
      ...MatchcraftStep
    }
    outroHeading
    outroBody {
      value
    }
  }
  ${MatchcraftStepFragment}
`
