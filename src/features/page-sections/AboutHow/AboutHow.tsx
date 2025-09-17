'use client'

import { isEmptyDocument } from 'datocms-structured-text-utils'
import { useId, useState } from 'react'
import { StructuredText } from 'react-datocms/structured-text'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './AboutHow.module.scss'

type Props = {
  data:
    | Queries.AboutHowFragment
    | Queries.AdvisorsHowFragment
    | null
    | undefined
}

export const AboutHow = ({ data }: Props) => {
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
              d={`M0,${0.03 * sectWidth} C${0.5 * sectWidth},${
                -0.05 * sectWidth
              } ${0.7 * sectWidth},${0.06 * sectWidth} ${sectWidth},${
                0.03 * sectWidth
              } L${sectWidth},${sectHeight} L0,${sectHeight}
              Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.content}>
        <h2 className={styles.heading}>{data?.howHeading}</h2>
        <div
          className={styles.body}
          data-is-empty={isEmptyDocument(data?.howBody) || undefined}
        >
          <DatoStructuredText data={data?.howBody} />
        </div>

        {data?.howDetails.map((detail, i: number) => (
          <div key={i}>
            <h3 className={styles.title}>{detail.title}</h3>
            <div className={styles.description}>
              <DatoStructuredText data={detail.description} />
            </div>
          </div>
        ))}
        <DatoLink
          data={data?.howLink}
          iconType={'ARROW_RIGHT'}
          className={styles.button}
          isButton
          borderVariant={'ROUNDED'}
        />
      </div>
    </section>
  )
}
