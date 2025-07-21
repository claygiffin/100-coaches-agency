'use client'

import { type ComponentProps } from 'react'
import { MarkdownHeading } from '@/features/ui'

import styles from './ArticlesFeatured.module.scss'
import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'

type Props = ComponentProps<'section'> & {
  data: Queries.ArticlesFeaturedFragment | null | undefined
}

export const ArticlesFeatured = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.featuredHeading}</h2>
        <span className={styles.headerLine}></span>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyImage}>
            <DatoImageFocused
                data={data?.featuredBody?.image?.responsiveImage}
                focalPoint={data?.featuredBody?.image?.focalPoint}
            />
        </div>
        <div className={styles.bodyContainer}>
            <MarkdownHeading
                className={styles.bodyHeading}
                as="h2"
            >
                {data?.featuredBody?.heading || ''}
            </MarkdownHeading>
            <div className={styles.bodyText}>
                <DatoStructuredText data={data?.featuredBody?.body} />
            </div>
            <DatoLink
                className={styles.button}
                data={data?.featuredBody?.link}
                isButton
                borderVariant={'ROUNDED'}
            />
        </div>
      </div>
    </section>
  )
}
