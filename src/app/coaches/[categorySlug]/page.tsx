import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  CoachCategoryFeatured,
  CoachCategoryThumbnail,
  CoachProfileFragment,
} from '@/features/coaches'
import {
  CategoryNav,
  CoachCategoryMenuFragment,
} from '@/features/layout'
import {
  CoachCategoryCta,
  CoachCategoryCtaFragment,
} from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './coachCategoryPage.module.scss'

export const dynamic = 'force-static'


type Props = {
  params: Promise<{
    categorySlug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allCoachCategories },
  } = await datoRequest<Queries.AllCoachCategoryPageQuery>({
    query: gql`
      query AllCoachCategoryPage {
        allCoachCategories(first: 5000) {
          categorySlug
        }
      }
    `,
  })
  return allCoachCategories.map(({ categorySlug }) => ({
    categorySlug,
  }))
}

const query = gql`
  query CoachCategoryPage($categorySlug: String!) {
    coachCategory(filter: { categorySlug: { eq: $categorySlug } }) {
      __typename
      id
      categoryName
      categoryNameFull
      description
      categorySlug
      featuredCoach {
        ...CoachProfile
      }
      featuredCoaches {
        ...CoachProfile
      }
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allCoachCategories(orderBy: position_ASC) {
      ...CoachCategoryMenu
    }
    coachCategoryCta {
      ...CoachCategoryCta
    }
  }
  ${CoachProfileFragment}
  ${CoachCategoryMenuFragment}
  ${CoachCategoryCtaFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { categorySlug } = await params
  const {
    data: { coachCategory },
  } = await datoRequest<Queries.CoachCategoryPageQuery>({
    query,
    variables: { categorySlug },
  })
  return generateDatoCmsMetadata(coachCategory?._seoMetaTags || [], {
    canonicalSlug: `coaches/${categorySlug}`,
  })
}

const CoachCategoryPage: NextPage<Props> = async ({ params }) => {
  const { categorySlug } = await params
  const {
    data: { coachCategory, allCoachCategories, coachCategoryCta },
  } = await datoRequest<Queries.CoachCategoryPageQuery>({
    query,
    variables: { categorySlug },
  })

  return (
    <main>
      <section className={styles.intro}>
        <CategoryNav
          categories={allCoachCategories}
          current={coachCategory?.categoryName}
          path="/coaches/"
          allLink
        />
        <h1>
          {coachCategory?.categoryNameFull ||
            coachCategory?.categoryName}
        </h1>
        <p>{coachCategory?.description}</p>
      </section>
      <CoachCategoryFeatured
        featuredCoach={coachCategory?.featuredCoach}
      />
      <section className={styles.coaches}>
        <span className={styles.coachesHeading}>
          Featured{' '}
          {coachCategory?.categoryNameFull ||
            coachCategory?.categoryName}
        </span>
        {coachCategory?.featuredCoaches.map((coach, i: number) => (
          <CoachCategoryThumbnail
            coach={coach}
            key={i}
            index={i}
          />
        ))}
      </section>
      <CoachCategoryCta data={coachCategoryCta} />
    </main>
  )
}

export default CoachCategoryPage
