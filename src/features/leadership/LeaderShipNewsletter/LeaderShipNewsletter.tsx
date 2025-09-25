'use client'

import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import styles from './LeaderShipNewsletter.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipNewslettersFragment | null | undefined
  newsletter: Queries.NewsletterFragment[] | null | undefined
}

export const LeaderShipNewsletters = ({
  data,
  newsletter,
  ...props
}: Props) => {
  const router = useRouter()
  const showingNewsletter =
    data?.newslettersItem ?? newsletter?.[0] ?? null

  const openNewsletter = (slug: string) =>
    router.push(`/newsletters/${slug}`, { scroll: false })

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
          searchParam={{ field: 'category', value: 'newsletter' }}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      {showingNewsletter && (
        <div
          className={styles.body}
          onClick={() => openNewsletter(showingNewsletter?.slug)}
        >
          <div className={styles.bodyImageWrapper}>
            <DatoImageFocused
              data={showingNewsletter?.thumbnail?.responsiveImage}
              focalPoint={showingNewsletter?.thumbnail?.focalPoint}
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
              {showingNewsletter?.title || ''}
            </MarkdownHeading>
            <div className={styles.bodyText}>
              <DatoStructuredText data={showingNewsletter?.body} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
