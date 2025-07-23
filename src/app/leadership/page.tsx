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
  VideoFragment,
} from '@/features/leadership'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

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
    newsletterArticles: allArticles(
      first: 1
      filter: { category: { eq: "JlKSeOHiTjuvbDUmk_CVEg" } }
    ) {
      ...Article
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
      newsletterArticles,
    },
  } = await datoRequest<Queries.LeadershipPageQuery>({
    query,
  })

  return (
    <main data-articles>
      <LeaderShipHero data={thoughtLeadershipPage} />
      <LeaderShipFeatured data={thoughtLeadershipPage} />
      <LeaderShipBooks
        data={thoughtLeadershipPage}
        books={allBooks}
      />
      <LeaderShipNewsletters
        data={thoughtLeadershipPage}
        newsletter={newsletterArticles}
      />
      <LeaderShipVideos
        data={thoughtLeadershipPage}
        videos={allVideos}
      />
      <LeaderShipArticles
        data={thoughtLeadershipPage}
        articles={allArticles}
      />
      <LeaderShipCourses data={thoughtLeadershipPage} />
    </main>
  )
}

export default LeadershipPage
