import { css } from '@emotion/react'

import { colors } from '../theme/variables'
import { ArticleProps } from '../types/customTypes'
import ArticleLightbox from './ArticleLightbox'
import CoachProfileLightbox from './CoachProfileLightbox'

type Props = {
  article: ArticleProps
}

const ArticleThumbnail = ({ article }: Props) => {
  const styles = {
    thumbnail: css`
      position: relative;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
      transition: background-color 300ms ease;
      @media (hover: hover) {
        &:hover {
          background-color: #f5f5f5;
        }
      }
      &:before {
        content: '';
        position: relative;
        display: block;
        width: 100%;
        height: 1px;
        background: #333;
        margin-bottom: 1rem;
      }
    `,
    date: css`
      font-size: var(--fs-13);
      font-weight: 600;
      color: #888;
      margin: 0 0 0.5em;
      display: block;
      text-transform: uppercase;
    `,
    title: css`
      position: relative;
      font-size: var(--fs-30);
      margin: 0;
      padding: 0.125em 0 0.25em;
      font-weight: 325;
      transition: color 300ms ease;
      color: ${colors.goldShade1};
      div:hover > & {
        color: ${colors.goldShade2};
      }
    `,
    author: css`
      position: relative;
      margin: 0;
      padding: 0.25em 0;
      font-size: var(--fs-16);
      font-weight: 500;
      width: fit-content;
      color: #555;
      transition: color 300ms ease;
      @media (hover: hover) {
        &:hover {
          color: ${colors.goldShade2};
          text-decoration: underline;
        }
      }
    `,
  }
  return (
    <div css={styles.thumbnail}>
      <span css={styles.date}>{article.meta.publishedAt}</span>
      <h2 css={styles.title}>{article.title}</h2>
      <ArticleLightbox article={article} />
      <h3 css={styles.author}>
        {article.author.name}
        <CoachProfileLightbox
          coach={article.author}
          directory={
            article.author.__typename === 'DatoCmsTeamMember'
              ? 'team'
              : undefined
          }
        />
      </h3>
    </div>
  )
}

export default ArticleThumbnail
