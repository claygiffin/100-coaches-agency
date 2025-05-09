import gql from 'graphql-tag'

export const FormFieldFragments = gql`
  fragment FormSelectField on FormSelectFieldRecord {
    id
    label
    options {
      id
      value
    }
    required
    width
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
    isInternational
    width
    required
  }
`
