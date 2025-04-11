import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { CoachProfile, CoachProfileFragment } from '@/features/coaches'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './coachProfilePage.module.scss'

// export const dynamic = 'force-static'

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
        allCoaches(first: 10000) {
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
  return toNextMetadata(coach?._seoMetaTags || [])
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
