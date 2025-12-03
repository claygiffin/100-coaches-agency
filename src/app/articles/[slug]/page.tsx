import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import { Article, ArticleFragment } from '@/features/articles'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './article.module.scss'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allArticles },
  } = await datoRequest<Queries.AllArticlePageQuery>({
    query: gql`
      query AllArticlePage {
        allArticles(first: 999) {
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
  query ArticlePage($slug: String!) {
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
  } = await datoRequest<Queries.ArticlePageQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(article?._seoMetaTags || [], {
    canonicalSlug: `articles/${slug}`,
  })
}

const ArticlePage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { article },
  } = await datoRequest<Queries.ArticlePageQuery>({
    query,
    variables: { slug },
  })
  if (!article) notFound()
  return (
    <main className={styles.main}>
      <Article
        article={article}
        layout="PAGE"
      />
    </main>
  )
}

export default ArticlePage
