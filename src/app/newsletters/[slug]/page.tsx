import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { Article } from '@/features/articles'
import { NewsletterFragment } from '@/features/leadership'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './article.module.scss'

// export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allNewsletters },
  } = await datoRequest<Queries.AllNewslettersPageQuery>({
    query: gql`
      query AllNewslettersPage {
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
  query NewsletterPage($slug: String!) {
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
  } = await datoRequest<Queries.NewsletterPageQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(newsletter?._seoMetaTags || [], {
    canonicalSlug: `newsletters/${slug}`,
  })
}

const NewsletterPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { newsletter },
  } = await datoRequest<Queries.NewsletterPageQuery>({
    query,
    variables: { slug },
  })

  return (
    <main className={styles.main}>
      <Article
        article={newsletter}
        layout="PAGE"
      />
    </main>
  )
}

export default NewsletterPage
