'use client'

import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import { Slider } from '../index'
import styles from './LeaderShipArticles.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipArticlesFragment | null | undefined
  articles: Queries.ArticleFragment[] | null | undefined
}

export const LeaderShipArticles = ({
  data,
  articles,
  ...props
}: Props) => {
  const router = useRouter()
  const showingArticles = data?.articlesItems?.length
    ? data?.articlesItems
    : articles

  const openArticle = (slug: string) =>
    router.push(`/articles/${slug}`, { scroll: false })

  return (
    <section
      id="articles"
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.articlesHeading}</h2>
        <span className={styles.headerLine}></span>
        <DatoLink
          data={data?.articlesArchiveButton}
          className={styles.archiveButton}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      {Array.isArray(showingArticles) && (
        <div
          className={styles.body}
          onClick={() => openArticle(showingArticles[0]?.slug)}
        >
          <div className={styles.bodyImageWrapper}>
            <DatoImageFocused
              data={showingArticles[0]?.thumbnail?.responsiveImage}
              focalPoint={showingArticles[0]?.thumbnail?.focalPoint}
              className={styles.bodyImage}
            />
          </div>
          <div className={styles.bodyContainer}>
            <MarkdownHeading
              className={styles.bodyHeading}
              as="h2"
            >
              {showingArticles[0]?.title || ''}
            </MarkdownHeading>
            <div className={styles.bodyText}>
              <DatoStructuredText data={showingArticles[0]?.body} />
            </div>
            <div className={styles.date}>
              {format(
                new Date(showingArticles[0]?.createdAt),
                'MMMM d, yyyy'
              )}
            </div>
          </div>
        </div>
      )}
      <div className={styles.slider}>
        <Slider>
          {Array.isArray(showingArticles) &&
            showingArticles.slice(1).map((article, index) => {
              return (
                <div
                  className={styles.slide}
                  key={index}
                  onClick={() => openArticle(article?.slug)}
                >
                  <div className={styles.slideImageWrapper}>
                    <DatoImageFocused
                      data={article?.thumbnail?.responsiveImage}
                      focalPoint={article?.thumbnail?.focalPoint}
                      className={styles.slideImage}
                    />
                  </div>
                  <div className={styles.slideBody}>
                    <h2 className={styles.bookTitle}>
                      {article?.title}
                    </h2>
                    <span className={styles.date}>
                      {format(
                        new Date(article?.createdAt),
                        'MMMM d, yyyy'
                      )}
                    </span>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    </section>
  )
}
