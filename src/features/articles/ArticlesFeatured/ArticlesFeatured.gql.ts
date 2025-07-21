import gql from 'graphql-tag'

import { ThoughtLeadershipItemFragment } from '@/features/home-sections'


export const ArticlesFeaturedFragment = gql`
  fragment ArticlesFeatured on ThoughtLeadershipPageRecord {
    featuredHeading
    featuredBody {
        ...ThoughtLeadershipItem
    }
  }
  ${ThoughtLeadershipItemFragment}
`
