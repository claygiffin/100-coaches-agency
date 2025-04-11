import { gql } from 'graphql-tag'

export const CoachCategoryCtaFragment = gql`
  fragment CoachCategoryCta on CoachCategoryCtaRecord {
    __typename
    id
    ctaHeading
    ctaBody {
      value
    }
    ctaLinkText
  }
`
