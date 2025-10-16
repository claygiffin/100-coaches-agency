import gql from 'graphql-tag'

import { BookAuthorFragment } from '@/features/books'
import { ResponsiveImageFragment } from '@/features/dato-image'
import {
  ExternalLinkFragment,
  PageLinkFragment,
} from '@/features/links'
import { PdfFragment } from '@/features/links'

export const BookTestimonialFragment = gql`
  fragment BookTestimonial on BookTestimonialRecord {
    quote {
      value
    }
    attributionName
    attributionTitle {
      value
    }
  }
`

export const BookFragment = gql`
  fragment Book on BookRecord {
    __typename
    title
    thumbnail {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    subtitle
    authors {
      ...BookAuthor
    }
    purchaseLink {
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
    secondaryCta {
      value
    }
    descriptionHeading
    descriptionBody {
      value
    }
    descriptionCtaButton {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
      ... on PdfRecord {
        ...Pdf
      }
    }
    testimonialsHeading
    testimonials {
      ...BookTestimonial
    }
    miscellaneousInformationHeading
    miscellaneousInformationBody {
      value
    }
    createdAt: _firstPublishedAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ResponsiveImageFragment}
  ${ExternalLinkFragment}
  ${PageLinkFragment}
  ${PdfFragment}
  ${BookTestimonialFragment}
  ${BookAuthorFragment}
`

export const LeadershipBooksFragment = gql`
  fragment LeadershipBooks on ThoughtLeadershipPageRecord {
    booksHeading
    booksArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    bookItemsOverrides {
      ...Book
    }
  }

  ${PageLinkFragment}
  ${BookFragment}
`
