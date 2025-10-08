import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  ContentSection,
  ContentSectionFragment,
  MediaSection,
  MediaSectionFragment,
  PageHero,
  PageHeroFragment,
  TestimonialSection,
  TestimonialSectionFragment,
} from '@/features/page-sections'
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
      hero {
        ...PageHero
      }
      content {
        ... on ContentSectionRecord {
          ...ContentSection
        }
        ... on MediaSectionRecord {
          ...MediaSection
        }
        ... on TestimonialSectionRecord {
          ...TestimonialSection
        }
      }
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${PageHeroFragment}
  ${ContentSectionFragment}
  ${MediaSectionFragment}
  ${TestimonialSectionFragment}
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
    canonicalSlug: slug,
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
  return (
    <main>
      <PageHero data={interiorPage.hero} />
      {interiorPage.content.map(section => {
        switch (section.__typename) {
          case 'ContentSectionRecord': {
            return (
              <ContentSection
                data={section}
                key={section.id}
              />
            )
          }
          case 'MediaSectionRecord': {
            return (
              <MediaSection
                data={section}
                key={section.id}
              />
            )
          }
          case 'TestimonialSectionRecord': {
            return (
              <TestimonialSection
                data={section}
                key={section.id}
              />
            )
          }
        }
      })}
    </main>
  )
}

export default InteriorPage
