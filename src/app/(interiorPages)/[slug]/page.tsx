import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  BioSection,
  BioSectionFragment,
  ContentSection,
  ContentSectionFragment,
  CtaBar,
  CtaBarFragment,
  MediaSection,
  MediaSectionFragment,
  PageHero,
  PageHeroFragment,
  SectionDivider,
  SectionDividerFragment,
  TestimonialSection,
  TestimonialSectionFragment,
} from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    slug: string
  }>
}

// export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const {
    data: { allInteriorPages },
  } = await datoRequest<Queries.AllInteriorPageQuery>({
    query: gql`
      query AllInteriorPage {
        allInteriorPages(first: 999) {
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
        ... on CtaBarRecord {
          ...CtaBar
        }
        ... on BioSectionRecord {
          ...BioSection
        }
        ... on SectionDividerRecord {
          ...SectionDivider
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
  ${CtaBarFragment}
  ${BioSectionFragment}
  ${SectionDividerFragment}
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
  if (!interiorPage) notFound()
  let altIndex = 0
  return (
    <main>
      <PageHero data={interiorPage.hero} />
      {interiorPage.content.map(section => {
        switch (section.__typename) {
          case 'ContentSectionRecord': {
            if (
              section.layout === 'TEXT_MEDIA' ||
              section.layout === 'TEXT_QUOTE'
            ) {
              altIndex += 1
            }
            return (
              <ContentSection
                data={section}
                key={section.id}
                data-flip={altIndex % 2 ? true : false}
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
          case 'CtaBarRecord': {
            return (
              <CtaBar
                data={section}
                key={section.id}
              />
            )
          }
          case 'BioSectionRecord': {
            altIndex += 1
            return (
              <BioSection
                data={section}
                key={section.id}
                data-flip={altIndex % 2 ? true : false}
              />
            )
          }
          case 'SectionDividerRecord': {
            return (
              <SectionDivider
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
