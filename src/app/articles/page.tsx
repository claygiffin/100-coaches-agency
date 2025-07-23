import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  ArticleFragment,
  ArticlesGrid,
  NewsItemFragment,
} from '@/features/articles'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './articles.module.scss'

export const dynamic = 'force-static'

const query = gql`
  query ArticlesPage {
    articlesPage {
      pageHeading
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    articles: allArticles {
      ...Article
    }
    newsItems: allNewsItems {
      ...NewsItem
    }
  }
  ${ArticleFragment}
  ${NewsItemFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { articlesPage },
  } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(articlesPage?._seoMetaTags || [], {
    canonicalSlug: articlesPage?.slug,
  })
}

const ArticlesPage: NextPage = async () => {
  const {
    data: { articles, newsItems, articlesPage: page },
  } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })

  const filters = ['Show All', 'Thought Leadership', 'News']

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>{page?.pageHeading}</h1>
      <ArticlesGrid
        articles={articles}
        newsItems={newsItems}
        filters={filters}
      />
    </main>
  )
}

export default ArticlesPage
