'use client'

import { type ComponentProps, useId, useRef } from 'react'

import { DatoImage } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'
import { AnimateIn } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import { useVariables } from '@/hooks/useVariables'

import styles from './HomeMarshall.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeMarshallFragment | null | undefined
}

export const HomeMarshall = ({ data, ...props }: Props) => {
  const clipId = useId()

  const sectionRef = useRef<HTMLElement>(null)

  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0
  const { getBreakpoint } = useVariables()

  return (
    <section
      className={styles.section}
      ref={sectionRef}
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
            sizes={`(max-width: ${getBreakpoint('ms')}px) 90vw, 50vw`}
          />
        </div>
      </div>
      <div className={styles.content}>
        <AnimateIn
          fromBack
          className={styles.heading}
        >
          <MarkdownHeading as="h2">
            {data?.marshallHeading || ''}
          </MarkdownHeading>
        </AnimateIn>
        <AnimateIn
          fromBack
          className={styles.body}
        >
          <DatoStructuredText data={data?.marshallBody} />
          <DatoLink
            data={data?.marshallCta}
            isButton
            borderVariant={'ROUNDED'}
            className={styles.button}
          />
        </AnimateIn>
        {data?.marshallQuote && (
          <AnimateIn
            fromBack
            innerAs="figure"
            className={styles.quote}
          >
            <blockquote>
              <DatoStructuredText data={data.marshallQuote.quote} />
            </blockquote>
            <figcaption>{data.marshallQuote.attribution}</figcaption>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
