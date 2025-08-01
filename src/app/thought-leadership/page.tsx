import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { ArticleFragment } from '@/features/articles'
import {
  BookFragment,
  LeaderShipArticles,
  LeaderShipArticlesFragment,
  LeaderShipBooks,
  LeaderShipBooksFragment,
  LeaderShipCourses,
  LeaderShipCoursesFragment,
  LeaderShipFeatured,
  LeaderShipFeaturedFragment,
  LeaderShipHero,
  LeaderShipHeroFragment,
  LeaderShipNewsletters,
  LeaderShipNewslettersFragment,
  LeaderShipVideos,
  LeaderShipVideosFragment,
  NewsletterFragment,
  VideoFragment,
} from '@/features/leadership'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

const query = gql`
  query LeadershipPage {
    thoughtLeadershipPage {
      ...LeaderShipHero
      ...LeaderShipFeatured
      ...LeaderShipBooks
      ...LeaderShipNewsletters
      ...LeaderShipVideos
      ...LeaderShipArticles
      ...LeaderShipCourses
      _seoMetaTags {
        attributes
        content
        tag
      }
      featuredVisible
      booksVisible
      newslettersVisible
      videosVisible
      articlesVisible
      coursesVisible
    }
    allBooks(first: 10) {
      ...Book
    }
    allVideos(first: 10) {
      ...Video
    }
    allArticles(first: 10) {
      ...Article
    }
    allNewsletters(first: 1) {
      ...Newsletter
    }
  }
  ${LeaderShipHeroFragment}
  ${LeaderShipFeaturedFragment}
  ${BookFragment}
  ${LeaderShipBooksFragment}
  ${LeaderShipNewslettersFragment}
  ${LeaderShipVideosFragment}
  ${VideoFragment}
  ${ArticleFragment}
  ${NewsletterFragment}
  ${LeaderShipArticlesFragment}
  ${LeaderShipCoursesFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { thoughtLeadershipPage },
  } = await datoRequest<Queries.LeadershipPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(
    thoughtLeadershipPage?._seoMetaTags || [],
    { canonicalSlug: '' }
  )
}

const LeadershipPage: NextPage = async () => {
  const {
    data: {
      thoughtLeadershipPage,
      allBooks,
      allVideos,
      allArticles,
      allNewsletters,
    },
  } = await datoRequest<Queries.LeadershipPageQuery>({
    query,
  })

  return (
    <main>
      <LeaderShipHero data={thoughtLeadershipPage} />
      {thoughtLeadershipPage?.featuredVisible && (
        <LeaderShipFeatured data={thoughtLeadershipPage} />
      )}
      {thoughtLeadershipPage?.booksVisible && (
        <LeaderShipBooks
          data={thoughtLeadershipPage}
          books={allBooks}
        />
      )}
      {thoughtLeadershipPage?.newslettersVisible && (
        <LeaderShipNewsletters
          data={thoughtLeadershipPage}
          newsletter={allNewsletters}
        />
      )}
      {thoughtLeadershipPage?.videosVisible && (
        <LeaderShipVideos
          data={thoughtLeadershipPage}
          videos={allVideos}
        />
      )}
      {thoughtLeadershipPage?.articlesVisible && (
        <LeaderShipArticles
          data={thoughtLeadershipPage}
          articles={allArticles}
        />
      )}
      {thoughtLeadershipPage?.coursesVisible && (
        <LeaderShipCourses data={thoughtLeadershipPage} />
      )}
    </main>
  )
}

export default LeadershipPage
