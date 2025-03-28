import { executeQueryWithAutoPagination } from '@datocms/cda-client'
import type { DocumentNode } from 'graphql'

export async function datoRequestNoCache<QueryResult>({
  query,
  variables = {},
}: {
  query: DocumentNode
  variables?: {
    [key: string]: string
  }
}) {
  const data = await executeQueryWithAutoPagination<QueryResult>(
    query,
    {
      token: process.env.DATOCMS_API_TOKEN!,
      environment: process.env.DATOCMS_ENVIRONMENT,
      excludeInvalid: true,
      includeDrafts:
        process.env.DATOCMS_DRAFT_MODE === 'true' ? true : false,
      variables,
    }
  )
  return { data } as { data: QueryResult }
}
