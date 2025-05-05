import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const CoachProfileFragment = gql`
  fragment CoachProfile on CoachRecord {
    __typename
    id
    name
    photo {
      responsiveImage(
        imgixParams: {
          q: 50
          sat: -100
          ar: "1:1"
          fit: crop
          crop: focalpoint
          auto: [format, compress]
        }
      ) {
        ...ResponsiveImage
      }
    }
    jobTitle
    jobTitleExtended
    photoAlignment
    bio {
      value
    }
    bioSummary
    slug
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
  ${ResponsiveImageFragment}
`
export const TeamMemberFragment = gql`
  fragment TeamMember on TeamMemberRecord {
    __typename
    id
    name
    photo {
      responsiveImage(
        imgixParams: {
          q: 50
          sat: -100
          ar: "1:1"
          fit: crop
          crop: focalpoint
          auto: [format, compress]
        }
      ) {
        ...ResponsiveImage
      }
    }
    jobTitle
    jobTitleExtended
    photoAlignment
    bio {
      value
    }
    slug
    _seoMetaTags {
      attributes
      content
      tag
    }
  }

  ${ResponsiveImageFragment}
`
