'use client'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import styles from './BookDescription.module.scss'

type PropTypes = {
  book: Queries.BookFragment | null | undefined
}

export const BookDescription = ({ book }: PropTypes) => {
  return (
    <section className={styles.section}>
      <MarkdownHeading
        className={styles.heading}
        as="h2"
      >
        {book?.descriptionHeading}
      </MarkdownHeading>
      <div className={styles.body}>
        <DatoStructuredText data={book?.descriptionBody} />
        {book?.descriptionCtaButton?.__typename !== 'PdfRecord' && (
          <DatoLink
            className={styles.button}
            data={book?.descriptionCtaButton}
            isButton
            borderVariant={'ROUNDED'}
          />
        )}
      </div>
    </section>
  )
}
