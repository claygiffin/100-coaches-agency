import { css } from '@emotion/react'
import { StructuredText } from 'react-datocms'

import { ArticleProps } from '../types/customTypes'
import CoachProfileLightbox from './CoachProfileLightbox'

type PropTypes = {
  article: ArticleProps
}

const Article = ({ article }: PropTypes) => {
  const styles = {
    article: css`
      pointer-events: all;
      background-color: #fff;
      max-width: 80ch;
      padding: var(--gutter-md);
    `,
    date: css``,
    title: css``,
    author: css`
      position: relative;
    `,
    body: css``,
  }
  return (
    <article css={styles.article}>
      <span css={styles.date}>{article.meta.publishedAt}</span>
      <h1 css={styles.title}>{article.title}</h1>
      <h2 css={styles.author}>
        {article.author.name}
        <CoachProfileLightbox
          coach={article.author}
          directory={
            article.author.__typename === 'DatoCmsTeamMember'
              ? 'team'
              : undefined
          }
        />
      </h2>
      <div css={styles.body}>
        <StructuredText data={article.body} />
      </div>
    </article>
  )
}

export default Article
