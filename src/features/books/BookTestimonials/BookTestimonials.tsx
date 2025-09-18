'use client'

import { useId, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'
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
        <MarkdownHeading
          className={styles.heading}
          as="h2"
        >
          {book?.testimonialsHeading}
        </MarkdownHeading>
        <div className={styles.line}></div>
        {Array.isArray(book?.testimonials) && (
          <div className={styles.testimonials}>
            {book?.testimonials?.map((testimonial, index) => {
              return (
                <div
                  className={styles.testimonial}
                  key={index}
                >
                  <DatoStructuredText data={testimonial?.quote} />
                  <div className={styles.attribution}>
                    <span className={styles.attributionName}>
                      -{testimonial?.attributionName}
                    </span>
                    <DatoStructuredText
                      data={testimonial?.attributionTitle}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
