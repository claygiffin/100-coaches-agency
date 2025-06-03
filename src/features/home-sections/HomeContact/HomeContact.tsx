'use client'

import { type ComponentProps, useId, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { Form } from '@/features/form'
import { DatoLink } from '@/features/links'
import { AnimateIn, MarkdownHeading } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './HomeContact.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeContactFragment | null | undefined
}

export const HomeContact = ({ data, ...props }: Props) => {
  const clipId = useId()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      ref={node => setSectionRef(node)}
      style={{ '--clip-id-url': `url(#${clipId})` }}
      id="work-with-us"
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
              d={`M${sectWidth},${0.008 * sectWidth} C${
                0.59 * sectWidth
              },${0.1375 * sectWidth} ${0.333 * sectWidth},${
                -0.112 * sectWidth
              } 0,${
                0.07 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.008 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.content}>
        <AnimateIn
          className={styles.heading}
          fromBack
        >
          <MarkdownHeading as="h2">
            {data?.contactHeading || ''}
          </MarkdownHeading>
        </AnimateIn>
        <AnimateIn
          className={styles.body}
          fromBack
        >
          <DatoStructuredText data={data?.contactBody} />
        </AnimateIn>
        <AnimateIn
          className={styles.cta}
          fromBack
        >
          <DatoLink
            isButton
            data={data?.contactLink}
            borderVariant={'ROUNDED'}
          />
        </AnimateIn>
        {/* <AnimateIn
          className={styles.form}
          fromBack
        >
          <Form data={data?.contactForm} />
        </AnimateIn> */}
      </div>
    </section>
  )
}
