'use client'

import { type ComponentProps, useId, useState } from 'react'

import { AnimateIn } from '@/features/common'
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
      style={{ '--clip-id': `#${clipId}` }}
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
          <h2
            className={styles.heading}
            dangerouslySetInnerHTML={{
              __html: data?.resultsHeading || '',
            }}
          />
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: data?.resultsSubheading || '',
            }}
          />
        </AnimateIn>
      </div>
    </section>
  )
}
