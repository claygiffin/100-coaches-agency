import gql from 'graphql-tag'

import { AnchorLinkFragment } from '@/features/links'

import { LeadershipHeroImageFragment } from './LeadershipHeroImage/LeadershipHeroImage.gql'

export const LeadershipHeroFragment = gql`
  fragment LeadershipHero on ThoughtLeadershipPageRecord {
    heroHeadingLine
    heroImage {
      ...LeadershipHeroImage
    }
    heroText {
      value
    }
    heroLinksLabel
    heroLinks {
      ... on AnchorLinkRecord {
        ...AnchorLink
      }
    }
  }
  ${LeadershipHeroImageFragment}
  ${AnchorLinkFragment}
`
