import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  ArticlesHeroFragment,
  ArticlesHero
} from '@/features/articles'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'
import { ArticlesFeaturedFragment } from '@/features/articles/ArticlesFeatured/ArticlesFeatured.gql'
import { ArticlesFeatured } from '@/features/articles/ArticlesFeatured/ArticlesFeatured'
import { ArticlesBooksFragment, BookFragment } from '@/features/articles/ArticlesBooks/ArticlesBooks.gql'
import { ArticlesBooks } from '@/features/articles/ArticlesBooks/ArticlesBooks'
import { ArticlesNewslettersFragment, NewsletterFragment } from '@/features/articles/ArticlesNewsletter/ArticlesNewsletter.gql'
import { ArticlesNewsletters } from '@/features/articles/ArticlesNewsletter/ArticlesNewsletter'
import { ArticlesVideosFragment, VideoFragment } from '@/features/articles/ArticlesVideos/ArticlesVideos.gql'
import { ArticlesVideos } from '@/features/articles/ArticlesVideos/ArticlesVideos'

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
    data: { thoughtLeadershipPage, allBooks, allNewsletters, allVideos },
  } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })

  return (
    <main data-articles>
      <ArticlesHero data={thoughtLeadershipPage} />
      <ArticlesFeatured data={thoughtLeadershipPage} />
      <ArticlesBooks data={thoughtLeadershipPage} books={allBooks} />
      <ArticlesNewsletters data={thoughtLeadershipPage} newsletter={allNewsletters} />
      <ArticlesVideos data={thoughtLeadershipPage} videos={allVideos} />
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
