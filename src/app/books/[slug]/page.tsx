import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import {
  BookAuthors,
  BookHero,
  BookMiscellaneousInformation,
  BookTestimonials,
} from '@/features/books'
import { BookDescription } from '@/features/books'
import { BookFragment } from '@/features/leadership'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

// export const dynamic = 'force-static'

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
        allBooks(first: 10000) {
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
      <BookHero book={book} />
      <BookDescription book={book} />
      <BookTestimonials book={book} />
      <BookAuthors book={book} />
      <BookMiscellaneousInformation book={book} />
    </main>
  )
}

export default BookPage
