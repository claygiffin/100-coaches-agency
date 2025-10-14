import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import {
  ExternalLinkFragment,
  PageLinkFragment,
} from '@/features/links'
import {
  ExternalVideoFileFragment,
  InternalVideoFileFragment,
} from '@/features/video-player'

export const ExternalVideoFragment = gql`
  fragment ExternalVideo on ExternalVideoRecord {
    id
    __typename
    video {
      ...ExternalVideoFile
    }
    createdAt: _createdAt
  }
  ${ExternalVideoFileFragment}
`

export const InternalVideoFragment = gql`
  fragment InternalVideo on InternalVideoRecord {
    id
    __typename
    video {
      ...InternalVideoFile
    }
    createdAt: _createdAt
  }
  ${InternalVideoFileFragment}
`

export const HubspotFormFragment = gql`
  fragment HubspotForm on HubspotFormRecord {
    id
    __typename
    portalId
    formId
    region
    createdAt: _createdAt
  }
`

export const ArticleCarouselFragment = gql`
  fragment ArticleCarousel on ArticleCarouselRecord {
    id
    __typename
    images {
      ... on ImageBlockRecord {
        id
        __typename
        image {
          responsiveImage(
            imgixParams: { q: 60, auto: [format, compress] }
          ) {
            ...ResponsiveImage
          }
          alt
          title
        }
      }
    }
    description
  }
  ${ResponsiveImageFragment}
`

export const ArticleAccordionFragment = gql`
  fragment ArticleAccordion on ArticleAccordionRecord {
    id
    __typename
    title
    text {
      value
    }
  }
`

export const ArticleButtonFieldFragment = gql`
  fragment ArticleButtonField on ArticleButtonFieldRecord {
    id
    __typename
    buttons {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
  }
  ${PageLinkFragment}
  ${ExternalLinkFragment}
`

export const ArticlePullQuoteFragment = gql`
  fragment ArticlePullQuote on ArticlePullQuoteRecord {
    id
    __typename
    quote {
      value
    }
  }
`

export const ArticleTestimonialFragment = gql`
  fragment ArticleTestimonial on ArticleTestimonialRecord {
    id
    __typename
    testimonialBody {
      value
    }
    customerName
    customerPhoto {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
  }
  ${ResponsiveImageFragment}
`

export const ArticleFragment = gql`
  fragment Article on ArticleRecord {
    id
    __typename
    title
    subtitle
    body {
      value
      blocks {
        ... on ImageBlockRecord {
          id
          __typename
          image {
            responsiveImage(
              imgixParams: { q: 60, auto: [format, compress] }
            ) {
              ...ResponsiveImage
            }
            alt
            title
          }
        }
        ... on ExternalVideoRecord {
          ...ExternalVideo
        }
        ... on InternalVideoRecord {
          ...InternalVideo
        }
        ... on HubspotFormRecord {
          ...HubspotForm
        }
        ... on ArticleCarouselRecord {
          ...ArticleCarousel
        }
        ... on ArticleAccordionRecord {
          ...ArticleAccordion
        }
        ... on ArticleButtonFieldRecord {
          ...ArticleButtonField
        }
        ... on ArticlePullQuoteRecord {
          ...ArticlePullQuote
        }
        ... on ArticleTestimonialRecord {
          ...ArticleTestimonial
        }
      }
    }
    ctaText
    ctaButton {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          ar: "16:9"
          crop: focalpoint
          fit: crop
          q: 50
          auto: [format, compress]
        }
      ) {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    createdAt: _createdAt
    showInThoughtLeadership
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ResponsiveImageFragment}
  ${ExternalVideoFragment}
  ${InternalVideoFragment}
  ${HubspotFormFragment}
  ${ArticleCarouselFragment}
  ${ArticleAccordionFragment}
  ${ArticleButtonFieldFragment}
  ${ArticlePullQuoteFragment}
  ${ArticleTestimonialFragment}
  ${PageLinkFragment}
  ${ExternalLinkFragment}
`
