import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import {
  BioSection,
  BioSectionFragment,
  CoachesSection,
  CoachesSectionFragment,
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
import { createThemeIndex } from '@/utils'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = 'force-static'

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
        ... on CoachesSectionRecord {
          ...CoachesSection
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
  ${CoachesSectionFragment}
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
  const themeIndex = createThemeIndex(0)
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
              themeIndex.dispatch({ type: 'INCREASE' })
            }
            return (
              <ContentSection
                data={section}
                key={section.id}
                data-flip={themeIndex.value % 2 ? true : false}
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
            themeIndex.dispatch({ type: 'INCREASE' })
            return (
              <BioSection
                data={section}
                key={section.id}
                data-flip={themeIndex.value % 2 ? true : false}
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
          case 'CoachesSectionRecord': {
            return (
              <CoachesSection
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
