import gql from 'graphql-tag'

import { ThoughtLeadershipItemFragment } from '@/features/home-sections'

export const LeaderShipFeaturedFragment = gql`
  fragment LeaderShipFeatured on ThoughtLeadershipPageRecord {
    featuredHeading
    featuredBody {
      ...ThoughtLeadershipItem
    }
  }
  ${ThoughtLeadershipItemFragment}
`
