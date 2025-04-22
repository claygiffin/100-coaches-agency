import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import { FormLinkFragment, PageLinkFragment } from '@/features/links'

export const HomeCoachesSectionFragment = gql`
  fragment HomeCoachesSection on HomeCoachesSectionRecord {
    __typename
    id
    heading
    body {
      value
    }
    cta {
      ... on FormLinkRecord {
        ...FormLink
      }
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on CoachMenuLinkRecord {
        ...CoachMenuLink
      }
    }
    backgroundImages {
      horizontal: responsiveImage(
        imgixParams: {
          q: 75
          sat: -100
          ar: "16:10"
          fit: crop
          auto: format
        }
      ) {
        ...ResponsiveImage
      }
      vertical: responsiveImage(
        imgixParams: {
          q: 75
          sat: -100
          ar: "2:3"
          fit: crop
          auto: format
        }
      ) {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
  }
  ${FormLinkFragment}
  ${PageLinkFragment}
  ${ResponsiveImageFragment}
`
