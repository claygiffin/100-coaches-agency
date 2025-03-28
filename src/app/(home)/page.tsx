import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import {
  HomeHero,
  HomeHeroFragment,
  HomeIntro,
  HomeIntroFragment,
  HomeMarshall,
  HomePromise,
  HomePromiseFragment,
  HomeResults,
  HomeResultsFragment,
} from '@/features/home-sections'
import { CoachCategoryMenuFragment } from '@/features/nav'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query HomePage {
    homePage {
      ...HomeHero
      ...HomeIntro
      ...HomePromise
      ...HomeResults
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allCoachCategories {
      ...CoachCategoryMenu
    }
  }
  ${HomeHeroFragment}
  ${HomeIntroFragment}
  ${HomePromiseFragment}
  ${HomeResultsFragment}
  ${CoachCategoryMenuFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { homePage },
  } = await datoRequest<Queries.HomePageQuery>({
    query,
  })
  return toNextMetadata(homePage?._seoMetaTags || [])
}

const HomePage: NextPage = async () => {
  const {
    data: { homePage, allCoachCategories },
  } = await datoRequest<Queries.HomePageQuery>({
    query,
  })
  return (
    <main>
      <HomeHero data={homePage} />
      <HomeIntro data={homePage} />
      <HomePromise
        data={homePage}
        allCoachCategories={allCoachCategories}
      />
      <HomeMarshall data={homePage} />
      <HomeResults data={homePage} />
      <HomeContact />
    </main>
  )
}

export default HomePage
