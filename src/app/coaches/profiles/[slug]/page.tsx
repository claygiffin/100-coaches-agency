import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { CoachProfile, CoachProfileFragment } from '@/features/coaches'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './coachProfilePage.module.scss'

// export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allCoaches },
  } = await datoRequest<Queries.AllCoachProfileModalQuery>({
    query: gql`
      query AllCoachProfileModal {
        allCoaches(first: 999) {
          slug
        }
      }
    `,
  })
  const profiles = [...new Set([...allCoaches])]
  return profiles.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query CoachProfileModal($slug: String!) {
    coach(filter: { slug: { eq: $slug } }) {
      ...CoachProfile
    }
  }
  ${CoachProfileFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { coach },
  } = await datoRequest<Queries.CoachProfileModalQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(coach?._seoMetaTags || [], {
    canonicalSlug: `coaches/profiles/${slug}`,
  })
}

const CoachProfileModal: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { coach },
  } = await datoRequest<Queries.CoachProfileModalQuery>({
    query,
    variables: { slug },
  })
  return (
    <main className={styles.layout}>
      <CoachProfile data={coach} />
    </main>
  )
}

export default CoachProfileModal
