import { format } from 'date-fns'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

import { DatoImage } from '@/features/dato-image'
import variables from '@/theme/variables.module.scss'
import { classes } from '@/utils/css'

import styles from './ArticleThumbnail.module.scss'

type Props = {
  article:
    | Queries.ArticleFragment
    | Queries.NewsItemFragment
    | null
    | undefined
}

export const ArticleThumbnail = ({ article }: Props) => {
  const isArticle = article?.__typename === 'ArticleRecord'
  const formattedDate = format(
    new Date(article?.createdAt || ''),
    'MMMM d, yyyy'
  )
  return (
    <Link
      className={classes(
        styles.thumbnail,
        !isArticle && styles.newsLink
      )}
      data-is-article={isArticle}
      data-has-thumbnail={article?.hasOwnProperty('thumbnail')}
      href={
        isArticle ? `/articles/${article?.slug}` : article?.url || ''
      }
      target={!isArticle ? '_blank' : undefined}
      rel={!isArticle ? 'noreferrer' : undefined}
      scroll={!isArticle}
    >
      {isArticle && article?.thumbnail && (
        <div className={styles.image}>
          <DatoImage
            data={article?.thumbnail.responsiveImage}
            sizes={`(max-width: ${variables.breakpoint_s}px) 90vw, (max-width: ${variables.breakpoint_ms}px) 45vw, (max-width: ${variables.breakpoint_ml}px) 30vw, 20vw`}
          />
        </div>
      )}
      <h2 className={styles.title}>
        {article?.title}
        {!isArticle && (
          <HiOutlineExternalLink className={styles.external} />
        )}
      </h2>
      <span className={styles.date}>{formattedDate}</span>
    </Link>
  )
}
