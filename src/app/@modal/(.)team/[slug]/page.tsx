import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { CoachProfile, TeamMemberFragment } from '@/features/coaches'
import { Modal } from '@/features/modal'
import { datoRequest } from '@/lib/datocms-fetch'

// // export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
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
  return toNextMetadata(teamMember?._seoMetaTags || [])
}

const TeamMemberModal: NextPage<Props> = async ({
  params,
  searchParams,
}) => {
  const { slug } = await params
  const { nc } = await searchParams
  const {
    data: { teamMember },
  } = await datoRequest<Queries.TeamMemberModalQuery>({
    query,
    variables: { slug },
  })
  return (
    <Modal
      variant={'PROFILE'}
      metadata={toNextMetadata(teamMember?._seoMetaTags || [])}
    >
      <CoachProfile
        data={teamMember}
        hideContactButton={nc === '1'}
      />
    </Modal>
  )
}

export default TeamMemberModal
