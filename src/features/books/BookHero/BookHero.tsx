'use client'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import styles from './BookHero.module.scss'

type PropTypes = {
  book: Queries.BookFragment | null | undefined
}

export const BookHero = ({ book }: PropTypes) => {
  const authors = Array.isArray(book?.authors)
    ? `By ${
        book.authors.length === 1
          ? book.authors[0]?.name
          : book.authors.length === 2
            ? `${book.authors[0]?.name} and ${book.authors[1]?.name}`
            : `${book.authors
                .slice(0, -1)
                .map(a => a.name)
                .join(', ')}, and ${book.authors.at(-1)?.name}`
      }`
    : ''

  return (
    <section className={styles.section}>
      <div className={styles.mainWrapper}>
        <div className={styles.thumbnailWrapper}>
          <div className={styles.thumbnail}>
            <DatoImageFocused
              className={styles.bookThumbnail}
              data={book?.thumbnail?.responsiveImage}
              focalPoint={book?.thumbnail?.focalPoint}
            />
          </div>
        </div>
        <div className={styles.body}>
          <h2 className={styles.bookTitle}>{book?.title}</h2>
          <h2 className={styles.bookBio}>{book?.subtitle}</h2>
          <div className={styles.line}></div>
          <div className={styles.authors}>{authors}</div>
          <DatoLink
            className={styles.button}
            data={book?.purchaseLink}
            isButton
            borderVariant={'ROUNDED'}
          />
          <div className={styles.secondLine}></div>
          <div className={styles.description}>
            <MarkdownHeading
              className={styles.heading}
              as="h2"
            >
              {book?.descriptionHeading}
            </MarkdownHeading>
            <div className={styles.body}>
              <DatoStructuredText data={book?.descriptionBody} />
              <DatoLink
                className={styles.downloadButton}
                data={book?.descriptionCtaButton}
                isButton
                borderVariant={'ROUNDED'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.secondLine}></div>
        <div className={styles.description}>
          <MarkdownHeading
            className={styles.heading}
            as="h2"
          >
            {book?.descriptionHeading}
          </MarkdownHeading>
          <div className={styles.body}>
            <DatoStructuredText data={book?.descriptionBody} />
            <DatoLink
              className={styles.downloadButton}
              data={book?.descriptionCtaButton}
              isButton
              borderVariant={'ROUNDED'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
