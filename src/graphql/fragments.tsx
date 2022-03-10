import { graphql } from 'gatsby'

export const CoachFragment = graphql`
  fragment CoachFragment on DatoCmsCoach {
    __typename
    id: originalId
    name
    photo {
      thumbnail: gatsbyImageData(
        width: 360
        aspectRatio: 1
        imgixParams: { q: 65, fit: "facearea", facepad: 3.5, sat: -100 }
      )
      large: gatsbyImageData(
        width: 720
        imgixParams: { q: 75, sat: -100 }
      )
      small: gatsbyImageData(
        width: 400
        imgixParams: { q: 65, sat: -100 }
      )
      thumbnailUrl: url(
        imgixParams: {
          q: 65
          w: "800"
          h: "800"
          fit: "facearea"
          facepad: 3.5
          sat: -100
          bg: "FFFFFF"
        }
      )
      alt
    }
    jobTitle
    jobTitleExtended
    photoAlignment
    bio {
      value
    }
    bioSummary
    seo {
      ...SeoFragment
    }
  }
`
export const TeamMemberFragment = graphql`
  fragment TeamMemberFragment on DatoCmsTeamMember {
    __typename
    id: originalId
    name
    photo {
      thumbnail: gatsbyImageData(
        width: 360
        aspectRatio: 1
        imgixParams: { q: 65, fit: "facearea", facepad: 3.5, sat: -100 }
      )
      large: gatsbyImageData(
        width: 720
        imgixParams: { q: 75, sat: -100 }
      )
      small: gatsbyImageData(
        width: 400
        imgixParams: { q: 65, sat: -100 }
      )
      thumbnailUrl: url(
        imgixParams: {
          q: 65
          w: "800"
          h: "800"
          fit: "facearea"
          facepad: 3.5
          sat: -100
          bg: "FFFFFF"
        }
      )
      alt
    }
    jobTitle
    jobTitleExtended
    photoAlignment
    bio {
      value
    }
    seo {
      ...SeoFragment
    }
  }
`
export const FormFragment = graphql`
  fragment FormFragment on DatoCmsForm {
    __typename
    id: originalId
    formName
    submitButtonText
    successMessageNode {
      childMarkdownRemark {
        html
      }
    }
    formFields {
      ... on DatoCmsTextField {
        ...TextFieldFragment
      }
      ... on DatoCmsMultilineTextField {
        ...MultilineTextFieldFragment
      }
    }
  }
`
export const TextFieldFragment = graphql`
  fragment TextFieldFragment on DatoCmsTextField {
    __typename
    id: originalId
    label
    fieldType
    required
  }
`
export const MultilineTextFieldFragment = graphql`
  fragment MultilineTextFieldFragment on DatoCmsMultilineTextField {
    __typename
    id: originalId
    label
    required
  }
`
export const SeoFragment = graphql`
  fragment SeoFragment on DatoCmsSeoField {
    title
    description
    image {
      url(imgixParams: { maxW: 800, maxH: 800, fit: "crop" })
    }
  }
`
export const TitleDescriptionFragment = graphql`
  fragment TitleDescriptionFragment on DatoCmsTitleDescription {
    title
    descriptionNode {
      childMarkdownRemark {
        html
      }
    }
  }
`
