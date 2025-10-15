import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { CoachProfile, TeamMemberFragment } from '@/features/coaches'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './teamMemberPage.module.scss'

// export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allTeamMembers },
  } = await datoRequest<Queries.AllTeamMemberModalQuery>({
    query: gql`
      query AllTeamMemberModal {
        allTeamMembers(first: 999) {
          slug
        }
      }
    `,
  })
  const profiles = [...new Set([...allTeamMembers])]
  return profiles.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query TeamMemberModal($slug: String!) {
    teamMember(filter: { slug: { eq: $slug } }) {
      ...TeamMember
    }
  }
  ${TeamMemberFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { teamMember },
  } = await datoRequest<Queries.TeamMemberModalQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(teamMember?._seoMetaTags || [], {
    canonicalSlug: `team/${slug}`,
  })
}

const TeamMemberModal: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { teamMember },
  } = await datoRequest<Queries.TeamMemberModalQuery>({
    query,
    variables: { slug },
  })
  return (
    <main className={styles.layout}>
      <CoachProfile data={teamMember} />
    </main>
  )
}

export default TeamMemberModal
