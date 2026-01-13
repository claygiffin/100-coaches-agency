import { gql } from 'graphql-tag'

import {
  CoachProfileFragment,
  TeamMemberFragment,
} from '@/features/coaches'

export const CoachesSectionFragment = gql`
  fragment CoachesSection on CoachesSectionRecord {
    __typename
    id
    layout
    colorScheme
    _heading: heading
    coaches {
      ... on CoachRecord {
        ...CoachProfile
      }
      ... on TeamMemberRecord {
        ...TeamMember
      }
    }
  }
  ${CoachProfileFragment}
  ${TeamMemberFragment}
`
