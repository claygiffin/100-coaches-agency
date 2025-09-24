import gql from 'graphql-tag'

import {
  ArticleAccordionFragment,
  ArticleButtonFieldFragment,
  ArticleCarouselFragment,
  ArticlePullQuoteFragment,
  ArticleTestimonialFragment,
  ExternalVideoFragment,
  HubspotFormFragment,
  InternalVideoFragment,
} from '@/features/articles'
import { ResponsiveImageFragment } from '@/features/dato-image'
import {
  ExternalLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const NewsletterFragment = gql`
  fragment Newsletter on NewsletterRecord {
    id
    __typename
    title
    subtitle
    body {
      value
      blocks {
        ... on ImageRecord {
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

export const LeaderShipNewslettersFragment = gql`
  fragment LeaderShipNewsletters on ThoughtLeadershipPageRecord {
    newslettersLabel
    newslettersHeading
    newslettersArchiveButton {
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    newslettersItem {
      ...Newsletter
    }
  }
  ${NewsletterFragment}
  ${PageLinkFragment}
`
