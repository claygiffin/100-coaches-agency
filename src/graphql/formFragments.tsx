import { graphql } from 'gatsby'

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
      # ... on DatoCmsSelectField {
      #   ...SelectFieldFragment
      # }
      # ... on DatoCmsSelectStateField {
      #   ...SelectStateFieldFragment
      # }
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
// export const SelectFieldFragment = graphql`
//   fragment SelectFieldFragment on DatoCmsSelectField {
//     __typename
//     id: originalId
//     label
//     options {
//       id: originalId
//       label
//       value
//     }
//     required
//   }
// `
// export const SelectStateFieldFragment = graphql`
//   fragment SelectStateFieldFragment on DatoCmsSelectStateField {
//     __typename
//     id: originalId
//     label
//     required
//   }
// `
