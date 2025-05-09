import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  HomeCoachesSection,
  HomeCoachesSectionFragment,
  HomeContact,
  HomeContactFragment,
  HomeHero,
  HomeHeroFragment,
  HomeIntro,
  HomeIntroFragment,
  HomeMarshall,
  HomeMarshallFragment,
  HomePromise,
  HomePromiseFragment,
  HomeResults,
  HomeResultsFragment,
  HomeThoughtLeadershipSection,
  ThoughtLeadershipItemFragment,
} from '@/features/home-sections'
import {
  CompaniesSection,
  CompaniesSectionFragment,
} from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query HomePage {
    homePage {
      ...HomeHero
      ...HomeIntro
      companiesSection {
        ...CompaniesSection
      }
      coachesSection {
        ...HomeCoachesSection
      }
      thoughtLeadershipItems {
        ...ThoughtLeadershipItem
      }
      ...HomePromise
      ...HomeMarshall
      ...HomeResults
      ...HomeContact
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${HomeHeroFragment}
  ${HomeIntroFragment}
  ${CompaniesSectionFragment}
  ${HomeCoachesSectionFragment}
  ${HomePromiseFragment}
  ${ThoughtLeadershipItemFragment}
  ${HomeMarshallFragment}
  ${HomeResultsFragment}
  ${HomeContactFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { homePage },
  } = await datoRequest<Queries.HomePageQuery>({
    query,
  })
  return generateDatoCmsMetadata(homePage?._seoMetaTags || [], {
    canonicalSlug: '',
  })
}

const HomePage: NextPage = async () => {
  const {
    data: { homePage },
  } = await datoRequest<Queries.HomePageQuery>({
    query,
  })
  return (
    <main data-home>
      <HomeHero data={homePage} />
      <HomeIntro data={homePage} />
      <CompaniesSection data={homePage?.companiesSection} />
      <HomeCoachesSection data={homePage?.coachesSection} />
      <HomePromise data={homePage} />
      <HomeThoughtLeadershipSection
        data={homePage?.thoughtLeadershipItems}
      />
      <HomeMarshall data={homePage} />
      <HomeResults data={homePage} />
      <HomeContact data={homePage} />
    </main>
  )
}

export default HomePage
