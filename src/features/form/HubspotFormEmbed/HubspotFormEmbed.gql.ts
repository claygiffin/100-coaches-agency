import { gql } from 'graphql-tag'

export const HubspotFormEmbedFragment = gql`
  fragment HubspotFormEmbed on HubspotFormEmbedRecord {
    __typename
    id
    portalId
    formId
    region
  }
`
