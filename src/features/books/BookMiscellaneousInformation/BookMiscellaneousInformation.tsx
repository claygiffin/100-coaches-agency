'use client'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'

import styles from './BookMiscellaneousInformation.module.scss'

type PropTypes = {
  book: Queries.BookFragment | null | undefined
}

export const BookMiscellaneousInformation = ({ book }: PropTypes) => {
  if (
    !book?.miscellaneousInformationBody ||
    !book.miscellaneousInformationHeading
  )
    return
  return (
    <section className={styles.section}>
      <div className={styles.body}>
        <MarkdownHeading
          className={styles.heading}
          as="h2"
        >
          {book?.miscellaneousInformationHeading}
        </MarkdownHeading>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.body}>
          <DatoStructuredText
            data={book?.miscellaneousInformationBody}
          />
        </div>
      </div>
    </section>
  )
}
