import { gql } from 'graphql-tag'

export const FormFragments = gql`
  fragment Form on FormRecord {
    __typename
    id
    formName
    heading
    intro {
      value
    }
    formFields {
      __typename
      ... on FormTextFieldRecord {
        ...FormTextField
      }
      ... on FormSelectFieldRecord {
        ...FormSelectField
      }
      ... on FormTextAreaRecord {
        ...FormTextArea
      }
    }
    submitButtonText
    successMessage {
      value
    }
    recipients
  }
  fragment EmbeddedForm on EmbeddedFormRecord {
    __typename
    id
    formName
    formFields {
      __typename
      ... on FormTextFieldRecord {
        ...FormTextField
      }
      ... on FormSelectFieldRecord {
        ...FormSelectField
      }
      ... on FormTextAreaRecord {
        ...FormTextArea
      }
    }
    submitButtonText
    successMessage {
      value
    }
    recipients
  }
  fragment FormSelectField on FormSelectFieldRecord {
    id
    label
    options {
      ... on FormSelectOptionRecord {
        ...FormSelectOption
      }
    }
    required
    width
  }
  fragment FormSelectOption on FormSelectOptionRecord {
    id
    value
  }
  fragment FormTextArea on FormTextAreaRecord {
    id
    label
    required
  }
  fragment FormTextField on FormTextFieldRecord {
    id
    label
    fieldType
    width
    required
  }
`
