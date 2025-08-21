'use client'

import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoLink } from '@/features/links'

import { Slider } from '../index'
import styles from './LeaderShipBooks.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipBooksFragment | null | undefined
  books: Queries.BookFragment[] | null | undefined
}

export const LeaderShipBooks = ({ data, books, ...props }: Props) => {
  const router = useRouter()

  const showingBooks = (() => {
    const primary = data?.bookItemsOverrides ?? []
    const fallback = books ?? []

    if (primary.length >= 5) return primary

    const slugs = new Set(primary.map(item => item?.slug))
    const needed = 5 - primary.length
    const additional = fallback
      .filter(item => item && !slugs.has(item.slug))
      .slice(0, needed)

    return [...primary, ...additional]
  })()

  const goToBookPage = (slug: string) => router.push(`/books/${slug}`)

  return (
    <section
      id="books"
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.booksHeading}</h2>
        <span className={styles.headerLine}></span>
        <DatoLink
          data={data?.booksArchiveButton}
          className={styles.archiveButton}
          searchParam={{ field: 'category', value: 'book' }}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      <div>
        <div className={styles.bodyFeatured}>
          {Array.isArray(showingBooks) &&
            showingBooks.slice(0, 2).map((book, index) => {
              return (
                <div
                  className={styles.featuredItem}
                  key={index}
                  onClick={() => goToBookPage(book?.slug)}
                >
                  <div className={styles.featuredItemImage}>
                    <DatoImageFocused
                      data={book?.thumbnail?.responsiveImage}
                      focalPoint={book?.thumbnail?.focalPoint}
                      className={styles.thumbnail}
                    />
                  </div>
                  <div className={styles.featuredItemBody}>
                    <h2 className={styles.bookTitle}>{book?.title}</h2>
                    <div className={styles.bookBio}>
                      {book?.subtitle}
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.authors}>
                      {Array.isArray(book?.authors) &&
                        book?.authors?.map((author, i) => {
                          return (
                            <div
                              className={styles.author}
                              key={i}
                            >
                              {author?.name}
                            </div>
                          )
                        })}
                    </div>
                  </div>
                  <div className={styles.featuredBackground}></div>
                </div>
              )
            })}
        </div>
        <div className={styles.slider}>
          <Slider>
            {Array.isArray(showingBooks) &&
              showingBooks.slice(2).map((book, index) => {
                return (
                  <div
                    className={styles.slide}
                    key={index}
                    onClick={() => goToBookPage(book?.slug)}
                  >
                    <div className={styles.slideImageWrapper}>
                      <DatoImageFocused
                        data={book?.thumbnail?.responsiveImage}
                        focalPoint={book?.thumbnail?.focalPoint}
                        className={styles.slideImage}
                      />
                    </div>
                    <div className={styles.slideBody}>
                      <h2 className={styles.bookTitle}>
                        {book?.title}
                      </h2>
                      <div className={styles.authors}>
                        {Array.isArray(book?.authors) &&
                          book?.authors?.map((author, i) => {
                            return (
                              <div
                                className={styles.author}
                                key={i}
                              >
                                {author?.name}
                              </div>
                            )
                          })}
                      </div>
                    </div>
                    <div className={styles.slideBackground}></div>
                  </div>
                )
              })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
