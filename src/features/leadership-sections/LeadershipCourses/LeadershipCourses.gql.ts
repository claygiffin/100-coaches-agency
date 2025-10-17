import gql from 'graphql-tag'

import {
  ExternalLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const CoursesCoachFragment = gql`
  fragment CoursesCoach on CoursesCoachRecord {
    image {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    name
    title
  }
`

export const LeadershipCoursesFragment = gql`
  fragment LeadershipCourses on ThoughtLeadershipPageRecord {
    coursesHeading
    coursesImage {
      responsiveImage {
        ...ResponsiveImage
      }
      url
      width
      height
      format
    }
    coursesDescription {
      value
    }
    coursesButton {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
    coursesCoaches {
      ...CoursesCoach
    }
  }
  ${CoursesCoachFragment}
  ${PageLinkFragment}
  ${ExternalLinkFragment}
`
