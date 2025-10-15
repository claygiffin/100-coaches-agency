import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { Article, ArticleFragment } from '@/features/articles'
import { Modal } from '@/features/modal'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

// // export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allArticles },
  } = await datoRequest<Queries.AllArticleModalQuery>({
    query: gql`
      query AllArticleModal {
        allArticles(first: 10000) {
          slug
        }
      }
    `,
  })
  return allArticles.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query ArticleModal($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      ...Article
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${ArticleFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { article },
  } = await datoRequest<Queries.ArticleModalQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(article?._seoMetaTags || [], {
    canonicalSlug: slug,
  })
}

const ArticleModal: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { article },
  } = await datoRequest<Queries.ArticleModalQuery>({
    query,
    variables: { slug },
  })
  return (
    <Modal metadata={toNextMetadata(article?._seoMetaTags || [])}>
      <Article
        article={article}
        layout="MODAL"
      />
    </Modal>
  )
}

export default ArticleModal
