import { gql } from 'graphql-tag'

import { FormFieldFragments } from '../FormFields/FormFields.gql'

export const FormFragment = gql`
  fragment Form on FormRecord {
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
    onSubmit {
      __typename
      ... on SendEmailActionRecord {
        recipients
      }
      ... on CreateActiveCampaignContactActionRecord {
        updateIfExists
      }
      ... on OpenDocumentActionRecord {
        document {
          filename
          id
          url
        }
      }
    }
  }
  ${FormFieldFragments}
`
