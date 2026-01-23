import { gql } from 'graphql-tag'

import {
  CoachProfileFragment,
  TeamMemberFragment,
} from '@/features/coaches'
import { ButtonFragment } from '@/features/ui'

export const CoachesSectionFragment = gql`
  fragment CoachesSection on CoachesSectionRecord {
    __typename
    id
    layout
    colorScheme
    _heading: heading
    _body: body {
      value
      blocks {
        ... on ButtonRecord {
          ...Button
        }
      }
    }
    coaches {
      ... on CoachRecord {
        ...CoachProfile
      }
      ... on TeamMemberRecord {
        ...TeamMember
      }
    }
    hideProfileContactLink
  }
  ${CoachProfileFragment}
  ${TeamMemberFragment}
  ${ButtonFragment}
`
