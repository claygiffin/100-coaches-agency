import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { Article } from '@/features/articles'
import { NewsletterFragment } from '@/features/leadership'
import { Modal } from '@/features/modal'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

// export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allNewsletters },
  } = await datoRequest<Queries.AllNewsletterModalQuery>({
    query: gql`
      query AllNewsletterModal {
        allNewsletters(first: 10000) {
          slug
        }
      }
    `,
  })

  return allNewsletters.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query NewsletterModal($slug: String!) {
    newsletter(filter: { slug: { eq: $slug } }) {
      ...Newsletter
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${NewsletterFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { newsletter },
  } = await datoRequest<Queries.NewsletterModalQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(newsletter?._seoMetaTags || [], {
    canonicalSlug: slug,
  })
}

const ArticleModal: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { newsletter },
  } = await datoRequest<Queries.NewsletterModalQuery>({
    query,
    variables: { slug },
  })

  return (
    <Modal metaData={toNextMetadata(newsletter?._seoMetaTags || [])}>
      <Article
        article={newsletter}
        layout="MODAL"
      />
    </Modal>
  )
}

export default ArticleModal
