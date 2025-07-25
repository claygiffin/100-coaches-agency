import gql from 'graphql-tag'

import { AnchorLinkFragment } from '@/features/links'

import { LeaderShipHeroImageFragment } from './LeaderShipHeroImage/LeaderShipHeroImage.gql'

export const LeaderShipHeroFragment = gql`
  fragment LeaderShipHero on ThoughtLeadershipPageRecord {
    heroHeadingLine
    heroImage {
      ...LeaderShipHeroImage
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
  ${LeaderShipHeroImageFragment}
  ${AnchorLinkFragment}
`
