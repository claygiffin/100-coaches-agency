import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  CoachCategoryThumbnail,
  CoachProfileFragment,
} from '@/features/coaches'
import {
  CategoryNav,
  CoachCategoryMenuFragment,
} from '@/features/layout'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './allCoachesPage.module.scss'

export const dynamic = 'force-static'

const query = gql`
  query AllCoachesPage {
    allCoaches {
      ...CoachProfile
    }
    allCoachCategories {
      ...CoachCategoryMenu
    }
  }
  ${CoachProfileFragment}
  ${CoachCategoryMenuFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'All Coaches',
    description:
      'Explore our global network of the world’s most experienced executive and leadership coaches and advisors.',
  }
}

const AllCoachesPage: NextPage = async () => {
  const {
    data: { allCoaches, allCoachCategories },
  } = await datoRequest<Queries.AllCoachesPageQuery>({
    query,
  })
  return (
    <main>
      <section className={styles.intro}>
        <CategoryNav
          categories={allCoachCategories}
          current={'All'}
          path="/coaches/"
          allLink
        />
      </section>
      <section className={styles.coaches}>
        {allCoaches?.map((coach, i: number) => (
          <CoachCategoryThumbnail
            coach={coach}
            key={i}
            index={i}
          />
        ))}
      </section>
    </main>
  )
}

export default AllCoachesPage
