'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import { Slider } from '../index'
import styles from './LeadershipArticles.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeadershipArticlesFragment | null | undefined
  articles: Queries.ArticleFragment[] | null | undefined
}

export const LeadershipArticles = ({
  data,
  articles,
  ...props
}: Props) => {
  const showingArticles = (() => {
    const primary = data?.articleItemsOverrides ?? []
    const fallback = articles ?? []

    if (primary.length >= 5) return primary

    const slugs = new Set(primary.map(item => item?.slug))
    const needed = 5 - primary.length
    const additional = fallback
      .filter(item => item && !slugs.has(item.slug))
      .slice(0, needed)

    return [...primary, ...additional]
  })()

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
          searchParam={{ field: 'category', value: 'article' }}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      {Array.isArray(showingArticles) && (
        <div className={styles.body}>
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
            <Link
              className={styles.button}
              href={`/articles/${showingArticles[0].slug}`}
            >
              Read More
            </Link>
          </div>
        </div>
      )}
      <div className={styles.slider}>
        <Slider>
          {Array.isArray(showingArticles) &&
            showingArticles.slice(1).map((article, index) => {
              return (
                <Link
                  href={`/articles/${article.slug}`}
                  scroll={false}
                  className={styles.slide}
                  key={index}
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
                  </div>
                </Link>
              )
            })}
        </Slider>
      </div>
    </section>
  )
}
