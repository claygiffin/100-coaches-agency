import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allInteriorPages },
  } = await datoRequest<Queries.AllInteriorPageQuery>({
    query: gql`
      query AllInteriorPage {
        allInteriorPages(first: 5000) {
          slug
        }
      }
    `,
  })
  return allInteriorPages.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query InteriorPage($slug: String!) {
    interiorPage(filter: { slug: { eq: $slug } }) {
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { interiorPage },
  } = await datoRequest<Queries.InteriorPageQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(interiorPage?._seoMetaTags || [], {
    canonicalSlug: undefined,
  })
}

const InteriorPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { interiorPage },
  } = await datoRequest<Queries.InteriorPageQuery>({
    query,
    variables: { slug },
  })
  if (!interiorPage) return
  return <main></main>
}

export default InteriorPage
