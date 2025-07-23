'use client'

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
          iconType={'ARROW_RIGHT'}
        />
      </div>
      <div>
        <div className={styles.bodyFeatured}>
          {Array.isArray(books) &&
            books.slice(0, 2).map((book, index) => {
              return (
                <div
                  className={styles.featuredItem}
                  key={index}
                >
                  <div className={styles.featuredItemImage}>
                    <DatoImageFocused
                      data={book?.image?.responsiveImage}
                      focalPoint={book?.image?.focalPoint}
                    />
                  </div>
                  <div className={styles.featuredItemBody}>
                    <h2 className={styles.bookTitle}>{book?.title}</h2>
                    <h2 className={styles.bookBio}>{book?.bio}</h2>
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
            {Array.isArray(books) &&
              books.slice(2).map((book, index) => {
                return (
                  <div
                    className={styles.slide}
                    key={index}
                  >
                    <div className={styles.slideImageWrapper}>
                      <DatoImageFocused
                        data={book?.image?.responsiveImage}
                        focalPoint={book?.image?.focalPoint}
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
