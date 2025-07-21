import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  ArticlesBooks,
  ArticlesBooksFragment,
  ArticlesFeatured,
  ArticlesFeaturedFragment,
  ArticlesHero,
  ArticlesHeroFragment,
  ArticlesNewsletters,
  ArticlesNewslettersFragment,
  ArticlesVideos,
  ArticlesVideosFragment,
  BookFragment,
  NewsletterFragment,
  VideoFragment,
} from '@/features/articles'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query ArticlesPage {
    thoughtLeadershipPage {
      ...ArticlesHero
      ...ArticlesFeatured
      ...ArticlesBooks
      ...ArticlesNewsletters
      ...ArticlesVideos
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allBooks(first: 10) {
      ...Book
    }
    allNewsletters(first: 1) {
      ...Newsletter
    }
    allVideos(first: 10) {
      ...Video
    }
  }
  ${ArticlesHeroFragment}
  ${ArticlesFeaturedFragment}
  ${BookFragment}
  ${ArticlesBooksFragment}
  ${ArticlesNewslettersFragment}
  ${NewsletterFragment}
  ${ArticlesVideosFragment}
  ${VideoFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { thoughtLeadershipPage },
  } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(
    thoughtLeadershipPage?._seoMetaTags || [],
    { canonicalSlug: '' }
  )
}

const ArticlesPage: NextPage = async () => {
  const {
    data: {
      thoughtLeadershipPage,
      allBooks,
      allNewsletters,
      allVideos,
    },
  } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })

  return (
    <main data-articles>
      <ArticlesHero data={thoughtLeadershipPage} />
      <ArticlesFeatured data={thoughtLeadershipPage} />
      <ArticlesBooks
        data={thoughtLeadershipPage}
        books={allBooks}
      />
      <ArticlesNewsletters
        data={thoughtLeadershipPage}
        newsletter={allNewsletters}
      />
      <ArticlesVideos
        data={thoughtLeadershipPage}
        videos={allVideos}
      />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </main>
  )
}

export default ArticlesPage
