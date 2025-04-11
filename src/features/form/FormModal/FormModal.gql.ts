import { gql } from 'graphql-tag'

import { FormFragment } from '../Form/Form.gql'

export const FormModalFragment = gql`
  fragment FormModal on FormModalRecord {
    __typename
    id
    heading
    intro {
      value
    }
    form {
      ...Form
    }
  }
  ${FormFragment}
`
