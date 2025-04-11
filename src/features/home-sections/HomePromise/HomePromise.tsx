'use client'

import type { ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { AnimateIn } from '@/features/ui'

import styles from './HomePromise.module.scss'
import { HomePromiseBackground } from './HomePromiseBackground/HomePromiseBackground'

type Props = ComponentProps<'section'> & {
  data: Queries.HomePromiseFragment | null | undefined
}

export const HomePromise = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <HomePromiseBackground />
      <div className={styles.content}>
        <AnimateIn className={styles.heading}>
          <h2>{data?.promiseHeading}</h2>
        </AnimateIn>
        <AnimateIn className={styles.body}>
          <DatoStructuredText data={data?.promiseBody} />
          <DatoLink
            data={data?.promiseCta}
            borderVariant="ROUNDED"
            className={styles.button}
            isButton
          />
        </AnimateIn>
      </div>
    </section>
  )
}
