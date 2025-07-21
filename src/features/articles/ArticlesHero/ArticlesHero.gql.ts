import gql from 'graphql-tag'

import { ArticlesHeroImageFragment } from './ArticlesHeroImage/ArticlesHeroImage.gql'
import { AnchorLinkFragment } from '@/features/links/AnchorLink/AnchorLink.gql'

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
