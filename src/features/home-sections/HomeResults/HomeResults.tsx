'use client'

import { type ComponentProps, useId, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'
import { AnimateIn } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './HomeResults.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeResultsFragment | null | undefined
}

export const HomeResults = ({ data, ...props }: Props) => {
  const clipId = useId()

  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)

  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      ref={node => setSectionRef(node)}
      style={{ '--clip-id-url': `url(#${clipId})` }}
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
              d={`M${sectWidth},${0.105 * sectWidth} C${
                0.48 * sectWidth
              },${0.14 * sectWidth} ${0.48 * sectWidth},${
                -0.015 * sectWidth
              } 0,${
                0.003 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.105 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.content}>
        <AnimateIn className={styles.text}>
          <MarkdownHeading
            className={styles.heading}
            as="h2"
          >
            {data?.resultsHeading || ''}
          </MarkdownHeading>
          <div className={styles.body}>
            <DatoStructuredText data={data?.resultsBody} />
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
