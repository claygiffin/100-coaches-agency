'use client'

import { useId, useState } from 'react'
import { DatoStructuredText } from '@/features/dato-structured-text'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './BookTestimonials.module.scss'

type PropTypes = {
  book: Queries.BookFragment | null | undefined
}

export const BookTestimonials = ({ book }: PropTypes) => {
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
              d={`M${sectWidth},${0.06 * sectWidth} 
                  C${0.5 * sectWidth},${0.1 * sectWidth} 
                  ${0.35 * sectWidth},${-0.03 * sectWidth} 
                  0,${0.02 * sectWidth} 
                  L0,${sectHeight} 
                  L${sectWidth},${sectHeight} 
                  L${sectWidth},${0.006 * sectWidth} Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.body}>
        {Array.isArray(book?.testimonials) && (
          <div className={styles.testimonials}>
            <DatoStructuredText data={book?.testimonials[0]?.quote} />
            <div className={styles.attribution}>
              <span className={styles.attributionName}>
                -{book?.testimonials[0]?.attributionName}
              </span>
              <DatoStructuredText
                data={book?.testimonials[0]?.attributionTitle}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
