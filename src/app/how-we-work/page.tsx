import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import { HowWeWork, HowWeWorkFragment } from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query HowWeWorkPage {
    howWeWorkPage {
      ...HowWeWork
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${HowWeWorkFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { howWeWorkPage },
  } = await datoRequest<Queries.HowWeWorkPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(howWeWorkPage?._seoMetaTags || [], {
    canonicalSlug: undefined,
  })
}

const HowWeWorkPage: NextPage = async () => {
  const {
    data: { howWeWorkPage },
  } = await datoRequest<Queries.HowWeWorkPageQuery>({
    query,
  })
  if (!howWeWorkPage) notFound()
  return (
    <main>
      <HowWeWork data={howWeWorkPage} />
    </main>
  )
}

export default HowWeWorkPage
