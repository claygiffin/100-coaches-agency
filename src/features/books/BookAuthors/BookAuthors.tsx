'use client'

import { useId, useState } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './BookAuthors.module.scss'

type PropTypes = {
  book: Queries.BookFragment | null | undefined
}

export const BookAuthors = ({ book }: PropTypes) => {
  const clipId = useId()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      ref={node => setSectionRef(node)}
      style={{ '--clip-id-url': `url(#${clipId})` }}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`
                M${sectWidth},${sectHeight - 0.06 * sectWidth}
                C${0.5 * sectWidth},${sectHeight - 0.1 * sectWidth}
                ${0.35 * sectWidth},${sectHeight + 0.03 * sectWidth}
                0,${sectHeight - 0.02 * sectWidth}
                L0,0
                L${sectWidth},0
                L${sectWidth},${sectHeight - 0.06 * sectWidth} Z
              `}
            />
          </clipPath>
        </defs>
      </svg>
      <MarkdownHeading
        className={styles.heading}
        as="h2"
      >
        {`Meet the <em>Authors</em>`}
      </MarkdownHeading>
      <div className={styles.headingLineWrapper}>
        <div className={styles.headingLine}></div>
      </div>
      <div className={styles.body}>
        {Array.isArray(book?.authors) &&
          book?.authors?.map((author, index) => {
            return (
              <div
                className={styles.author}
                key={index}
              >
                <div className={styles.photoWrapper}>
                  <DatoImageFocused
                    className={styles.photo}
                    data={author?.photo?.responsiveImage}
                    focalPoint={author?.photo?.focalPoint}
                  />
                  <div className={styles.info}>
                    <div className={styles.name}>{author?.name}</div>
                    <div className={styles.title}>{author?.title}</div>
                    <div className={styles.line}></div>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.name}>{author?.name}</div>
                  <div className={styles.title}>{author?.title}</div>
                  <div className={styles.line}></div>
                  <div className={styles.bio}>
                    <DatoStructuredText data={author?.bio} />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
