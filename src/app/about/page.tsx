import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import { TeamMemberFragment } from '@/features/coaches'
import {
  AboutHow,
  AboutHowFragment,
  AboutPartner,
  AboutPartnerFragment,
  AboutServicesFragment,
  PageIntro,
} from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query AboutPage {
    aboutPage {
      aboutHeading
      aboutBody {
        value
      }
      ...AboutServices
      ...AboutHow
      ...AboutPartner
      teamHeading
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allTeamMembers {
      ...TeamMember
    }
  }
  ${AboutServicesFragment}
  ${AboutHowFragment}
  ${AboutPartnerFragment}
  ${TeamMemberFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { aboutPage },
  } = await datoRequest<Queries.AboutPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(aboutPage?._seoMetaTags || [], {
    canonicalSlug: aboutPage?.slug,
  })
}

const AboutPage: NextPage = async () => {
  const {
    data: { aboutPage },
  } = await datoRequest<Queries.AboutPageQuery>({
    query,
  })
  if (!aboutPage) notFound()
  return (
    <main>
      <PageIntro
        heading={aboutPage?.aboutHeading}
        body={aboutPage?.aboutBody}
      />
      {/* <AboutServices data={aboutPage} /> */}
      <AboutHow data={aboutPage} />
      <AboutPartner data={aboutPage} />
      {/* <AboutTeam
        team={allTeamMembers}
        heading={aboutPage?.teamHeading}
      /> */}
    </main>
  )
}

export default AboutPage
