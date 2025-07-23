'use client'

import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import styles from './LeaderShipNewsletter.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipNewslettersFragment | null | undefined
  newsletter: Queries.ArticleFragment[] | null | undefined
}

export const LeaderShipNewsletters = ({
  data,
  newsletter,
  ...props
}: Props) => {
  const router = useRouter()

  const openArticle = (slug: string) =>
    router.push(`/articles/${slug}`, { scroll: false })

  return (
    <section
      id="newsletter"
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.newslettersHeading}</h2>
        <span className={styles.headerLine}></span>
        <DatoLink
          data={data?.newslettersArchiveButton}
          className={styles.archiveButton}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      {Array.isArray(newsletter) && (
        <div
          className={styles.body}
          onClick={() => openArticle(newsletter[0]?.slug)}
        >
          <div className={styles.bodyImageWrapper}>
            <DatoImageFocused
              data={newsletter[0]?.thumbnail?.responsiveImage}
              focalPoint={newsletter[0]?.thumbnail?.focalPoint}
              className={styles.bodyImage}
            />
          </div>
          <div className={styles.bodyContainer}>
            <span className={styles.bodyLabel}>
              {data?.newslettersLabel}
            </span>
            <MarkdownHeading
              className={styles.bodyHeading}
              as="h2"
            >
              {newsletter[0]?.title || ''}
            </MarkdownHeading>
            <div className={styles.bodyText}>
              <DatoStructuredText data={newsletter[0]?.body} />
            </div>
            <div className={styles.date}>
              {format(
                new Date(newsletter[0]?.createdAt),
                'MMMM d, yyyy'
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
