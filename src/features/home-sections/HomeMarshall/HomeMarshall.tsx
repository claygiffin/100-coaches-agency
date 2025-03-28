import { uniqueId } from 'lodash'
import Link from 'next/link'
import { type ComponentProps, useId, useMemo, useState } from 'react'

import { AnimateIn, ArrowButton } from '@/features/common'
import { DatoImage } from '@/features/dato-image'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './HomeMarshall.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeMarshallFragment | null | undefined
}

export const HomeMarshall = ({ data, ...props }: Props) => {
  const clipId = useId()

  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)

  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      ref={node => {
        setSectionRef(node)
      }}
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
              d={`M${sectWidth},${0.047 * sectWidth} C${
                0.68 * sectWidth
              },${0.14 * sectWidth} ${0.333 * sectWidth},${
                -0.105 * sectWidth
              } 0,${
                0.06 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.047 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.background}>
        <div className={styles.imageWrap}>
          <DatoImage
            className={styles.image}
            data={data?.marshallImage?.responsiveImage}
            objectPosition="100% 20%"
          />
        </div>
      </div>
      <div className={styles.content}>
        <AnimateIn
          fromBack
          className={styles.heading}
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: data?.marshallHeading || '',
            }}
          />
        </AnimateIn>
        <AnimateIn
          fromBack
          className={styles.body}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data?.marshallBody || '',
            }}
          />
          <ArrowButton
            as={Link}
            href="/about/"
            text="Learn more about us"
            style="OUTLINE"
            className={styles.button}
          />
        </AnimateIn>
      </div>
    </section>
  )
}
