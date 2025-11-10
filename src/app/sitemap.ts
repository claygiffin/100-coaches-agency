import { gql } from 'graphql-tag'
import type { MetadataRoute } from 'next'

import { datoRequest } from '@/lib/datocms-fetch'

const base = process.env.SITE_URL ?? 'https://www.100coaches.com'

export const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const now = new Date()

  const entry = (
    path: string,
    changeFrequency:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never' = 'weekly'
  ) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority: 0.6,
  })

  const staticSlugs = [
    '/',
    '/about',
    '/advisors',
    '/archive',
    '/coaches/all',
    '/articles',
    '/contact',
    '/how-we-work',
    '/thought-leadership',
  ]
  const {
    data: {
      allInteriorPages,
      allArticles,
      allBooks,
      allCoaches,
      allCoachCategories,
      allFormModals,
      allNewsletters,
      allTeamMembers,
      allVideos,
    },
  } = await datoRequest<Queries.SitemapQuery>({
    query: gql`
      query Sitemap {
        allInteriorPages {
          slug
        }
        allArticles {
          slug
        }
        allBooks {
          slug
        }
        allCoaches {
          slug
        }
        allCoachCategories {
          categorySlug
        }
        allFormModals {
          slug
        }
        allNewsletters {
          slug
        }
        allTeamMembers {
          slug
        }
        allVideos {
          slug
        }
      }
    `,
  })

  return [
    ...staticSlugs.map(slug => entry(slug)),
    ...allInteriorPages.map(({ slug }) => entry('/' + slug)),

    ...allArticles.map(({ slug }) => entry('/articles/' + slug)),
    ...allBooks.map(({ slug }) => entry('/books/' + slug)),
    ...allCoaches.map(({ slug }) => entry('/coaches/profiles/' + slug)),
    ...allCoachCategories.map(({ categorySlug }) =>
      entry('/coaches/' + categorySlug)
    ),
    ...allFormModals.map(({ slug }) => entry('/forms/' + slug)),
    ...allNewsletters.map(({ slug }) => entry('/newsletters/' + slug)),
    ...allTeamMembers.map(({ slug }) => entry('/team/' + slug)),
    ...allVideos.map(({ slug }) => entry('/videos/' + slug)),
  ]
}

export default sitemap
