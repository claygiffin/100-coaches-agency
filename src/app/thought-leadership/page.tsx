import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { ArticleFragment } from '@/features/articles'
import {
  BookFragment,
  LeadershipArticles,
  LeadershipArticlesFragment,
  LeadershipBooks,
  LeadershipBooksFragment,
  LeadershipCourses,
  LeadershipCoursesFragment,
  LeadershipFeatured,
  LeadershipFeaturedFragment,
  LeadershipHero,
  LeadershipHeroFragment,
  LeadershipNewsletters,
  LeadershipNewslettersFragment,
  LeadershipVideos,
  LeadershipVideosFragment,
  NewsletterFragment,
  VideoFragment,
} from '@/features/leadership-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

const query = gql`
  query LeadershipPage {
    thoughtLeadershipPage {
      ...LeadershipHero
      ...LeadershipFeatured
      ...LeadershipBooks
      ...LeadershipNewsletters
      ...LeadershipVideos
      ...LeadershipArticles
      ...LeadershipCourses
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
    allBooks(first: 10, orderBy: [_firstPublishedAt_DESC]) {
      ...Book
    }
    allVideos(first: 10, orderBy: [_firstPublishedAt_DESC]) {
      ...Video
    }
    allArticles(first: 10, orderBy: [_firstPublishedAt_DESC]) {
      ...Article
    }
    allNewsletters(first: 1, orderBy: [_firstPublishedAt_DESC]) {
      ...Newsletter
    }
  }
  ${LeadershipHeroFragment}
  ${LeadershipFeaturedFragment}
  ${BookFragment}
  ${LeadershipBooksFragment}
  ${LeadershipNewslettersFragment}
  ${LeadershipVideosFragment}
  ${VideoFragment}
  ${ArticleFragment}
  ${NewsletterFragment}
  ${LeadershipArticlesFragment}
  ${LeadershipCoursesFragment}
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
      <LeadershipHero data={thoughtLeadershipPage} />
      {thoughtLeadershipPage?.featuredVisible && (
        <LeadershipFeatured data={thoughtLeadershipPage} />
      )}
      {thoughtLeadershipPage?.booksVisible && (
        <LeadershipBooks
          data={thoughtLeadershipPage}
          books={allBooks}
        />
      )}
      {thoughtLeadershipPage?.newslettersVisible && (
        <LeadershipNewsletters
          data={thoughtLeadershipPage}
          newsletter={allNewsletters}
        />
      )}
      {thoughtLeadershipPage?.videosVisible && (
        <LeadershipVideos
          data={thoughtLeadershipPage}
          videos={allVideos}
        />
      )}
      {thoughtLeadershipPage?.articlesVisible && (
        <LeadershipArticles
          data={thoughtLeadershipPage}
          articles={allArticles}
        />
      )}
      {thoughtLeadershipPage?.coursesVisible && (
        <LeadershipCourses data={thoughtLeadershipPage} />
      )}
    </main>
  )
}

export default LeadershipPage
