import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import {
  BookAuthors,
  BookHero,
  BookMiscellaneousInformation,
  BookTestimonials,
} from '@/features/books'
// import { BookDescription } from '@/features/books'
import { BookFragment } from '@/features/leadership-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { Breadcrumb } from '@/features/ui'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './booksPage.module.scss'

// export const dynamic = 'force-static'
export const dynamicParams = false

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allBooks },
  } = await datoRequest<Queries.AllBookPageQuery>({
    query: gql`
      query AllBookPage {
        allBooks(first: 999) {
          slug
        }
      }
    `,
  })
  return allBooks.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query BookPage($slug: String!) {
    book(filter: { slug: { eq: $slug } }) {
      ...Book
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${BookFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { book },
  } = await datoRequest<Queries.BookPageQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(book?._seoMetaTags || [], {
    canonicalSlug: `books/${slug}`,
  })
}

const BookPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { book },
  } = await datoRequest<Queries.BookPageQuery>({
    query,
    variables: { slug },
  })

  if (!book) {
    notFound() // Redirect to Next.js 404 page
  }

  return (
    <main>
      <Breadcrumb
        trail={[
          { title: 'Thought Leadership', path: '/thought-leadership' },
          { title: 'Books', path: '/archive?category=Books' },
        ]}
        className={styles.breadcrumb}
      />
      <BookHero book={book} />
      {/* <BookDescription book={book} /> */}
      <BookTestimonials book={book} />
      <BookAuthors book={book} />
      <BookMiscellaneousInformation book={book} />
    </main>
  )
}

export default BookPage
