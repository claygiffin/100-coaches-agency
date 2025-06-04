'use client'

import Link from 'next/link'
import { type ComponentProps, useId, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { ArrowButton } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './CoachCategoryCta.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.CoachCategoryCtaFragment | null | undefined
}

export const CoachCategoryCta = ({ data, ...props }: Props) => {
  const clipId = useId()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.conclusion}
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
              d={`M0,${0.03 * sectWidth} C${0.3 * sectWidth},${
                0.06 * sectWidth
              } ${0.5 * sectWidth},${-0.05 * sectWidth} ${sectWidth},${
                0.03 * sectWidth
              } L${sectWidth},${sectHeight} L0,${sectHeight}
          Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <h2
        className={classes(
          styles.coachesHeading,
          styles.conclusionHeading
        )}
      >
        {data?.ctaHeading}
      </h2>
      <div>
        <DatoStructuredText data={data?.ctaBody} />
      </div>
      <ArrowButton
        text={data?.ctaLinkText}
        styleVariant="OUTLINE"
        colorVariant="GOLD_DARK"
        className={styles.button}
        as={Link}
        href={'/contact'}
      />
    </section>
  )
}
