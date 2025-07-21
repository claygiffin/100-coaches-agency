import gql from 'graphql-tag'

import { AnchorLinkFragment } from '@/features/links/AnchorLink/AnchorLink.gql'

import { ArticlesHeroImageFragment } from './ArticlesHeroImage/ArticlesHeroImage.gql'

export const ArticlesHeroFragment = gql`
  fragment ArticlesHero on ThoughtLeadershipPageRecord {
    heroHeadingLine1
    heroHeadingLine2
    heroImage {
      ...ArticlesHeroImage
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
  ${ArticlesHeroImageFragment}
  ${AnchorLinkFragment}
`
