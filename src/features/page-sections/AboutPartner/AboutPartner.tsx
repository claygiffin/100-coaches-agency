'use client'

import { type ComponentProps, useId, useRef } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './AboutPartner.module.scss'
import { TestimonialCarousel } from './TestimonialCarousel/TestimonialCarousel'

type Props = ComponentProps<'section'> & {
  data:
    | Queries.AboutPartnerFragment
    | Queries.AdvisorsPartnerFragment
    | null
    | undefined
}

export const AboutPartner = ({ data, ...props }: Props) => {
  const clipId = useId()
  const sectionRef = useRef<HTMLElement>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      style={{ '--clip-id-url': `url(#${clipId})` }}
      ref={sectionRef}
      className={styles.section}
      {...props}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0,${0.03 * sectWidth} C${0.5 * sectWidth},${
                0.05 * sectWidth
              } ${0.75 * sectWidth},${
                -0.045 * sectWidth
              } ${sectWidth},${
                0.03 * sectWidth
              } L${sectWidth},${sectHeight} L0,${sectHeight}
              Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <MarkdownHeading
        as="h2"
        className={styles.heading}
      >
        {data?.partnerHeading}
      </MarkdownHeading>
      <div className={styles.body}>
        <DatoStructuredText data={data?.partnerBody} />
      </div>
      <TestimonialCarousel data={data?.testimonials} />
    </section>
  )
}
