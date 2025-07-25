import { format } from 'date-fns'
import { StructuredText } from 'react-datocms'

import { DatoImage } from '@/features/dato-image'

import styles from './Article.module.scss'

type PropTypes = {
  article:
    | Queries.ArticleFragment
    | Queries.NewsletterFragment
    | null
    | undefined
  layout: 'MODAL' | 'PAGE'
}

export const Article = ({ article, layout }: PropTypes) => {
  const formattedDate = format(
    new Date(article?.createdAt || ''),
    'MMMM d, yyyy'
  )
  return (
    <article
      className={styles.article}
      data-layout={layout}
    >
      <h1 className={styles.title}>{article?.title}</h1>
      {/* <span className={styles.pipe} /> */}
      <span className={styles.date}>{formattedDate}</span>
      <div className={styles.body}>
        <StructuredText
          renderBlock={({ record }) => {
            if (record.__typename === 'ImageRecord') {
              return (
                <figure className={styles.fig}>
                  <DatoImage data={record.image.responsiveImage} />
                  {record.image.title && (
                    <figcaption>{record.image.title}</figcaption>
                  )}
                </figure>
              )
            } else return null
          }}
          data={article?.body}
        />
      </div>
    </article>
  )
}
