import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  AboutHow,
  AboutPartner,
  AdvisorsHowFragment,
  AdvisorsPartnerFragment,
  PageIntro,
} from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query AdvisorsPage {
    advisorsPage {
      logo {
        url
        alt
        title
      }
      aboutHeading
      aboutBody {
        value
      }
      ...AdvisorsHow
      ...AdvisorsPartner
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${AdvisorsHowFragment}
  ${AdvisorsPartnerFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { advisorsPage },
  } = await datoRequest<Queries.AdvisorsPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(advisorsPage?._seoMetaTags || [], {
    canonicalSlug: advisorsPage?.slug,
  })
}

const AdvisorsPage: NextPage = async () => {
  const {
    data: { advisorsPage },
  } = await datoRequest<Queries.AdvisorsPageQuery>({
    query,
  })
  return (
    <main>
      <PageIntro
        logo={advisorsPage?.logo}
        heading={advisorsPage?.aboutHeading}
        body={advisorsPage?.aboutBody}
      />
      <AboutHow data={advisorsPage} />
      <AboutPartner data={advisorsPage} />
    </main>
  )
}

export default AdvisorsPage
