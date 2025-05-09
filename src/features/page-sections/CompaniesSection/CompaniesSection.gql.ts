import { gql } from 'graphql-tag'

import { CompanyFragment } from './Company/Company.gql'

export const CompaniesSectionFragment = gql`
  fragment CompaniesSection on CompaniesSectionRecord {
    __typename
    id
    heading
    companies {
      ...Company
    }
  }
  ${CompanyFragment}
`
