import { css } from '@emotion/react'
import { StructuredText } from 'react-datocms'

import { colors } from '../theme/variables'
import { ArticleProps } from '../types/customTypes'
import CoachProfileLightbox from './CoachProfileLightbox'
import Seo from './Seo'

type PropTypes = {
  article: ArticleProps
  lightbox?: boolean
}

const Article = ({ article, lightbox }: PropTypes) => {
  const styles = {
    article: css`
      pointer-events: all;
      font-size: var(--fs-18);
      width: 100%;
      max-width: calc(72ch + 2 * var(--gutter-lg));
      box-sizing: border-box;
      ${lightbox &&
      css`
        background-color: #fff;
        padding: var(--gutter-md) var(--gutter-lg);
      `}
    `,
    date: css`
      font-size: var(--fs-14);
      font-weight: 600;
      color: #888;
      margin: 1em 0 0;
      display: block;
      text-transform: uppercase;
    `,
    title: css`
      position: relative;
      font-size: var(--fs-30);
      margin: 0.5em 0 0.25em;
      font-weight: 300;
      transition: color 300ms ease;
      color: #000;
      font-size: var(--fs-60);
    `,
    author: css`
      position: relative;
      margin: 0;
      padding: 0.25em 0;
      font-size: var(--fs-18);
      font-family: var(--sans-serif);
      font-weight: 500;
      width: fit-content;
      color: ${colors.goldShade1};
      transition: color 300ms ease;
      @media (hover: hover) {
        &:hover,
        &:focus-within {
          color: ${colors.goldShade2};
          text-decoration: underline;
        }
      }
    `,
    body: css`
      margin-top: 3em;
      margin-bottom: 3em;
      h2 {
        font-size: var(--fs-36);
        font-weight: 350;
        margin: 1em 0 0.5em;
      }
      h3 {
        font-size: var(--fs-21);
        font-weight: 500;
        margin: 1.5em 0 0.75em;
      }
    `,
  }
  return (
    <article css={styles.article}>
      <Seo title={article.title} />
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
      <span css={styles.date}>{article.meta.formattedDate}</span>
      <div css={styles.body}>
        <StructuredText data={article.body} />
      </div>
    </article>
  )
}

export default Article
