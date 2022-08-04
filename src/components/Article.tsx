import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
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
      width: 100vw;
      max-width: calc(72ch + 2 * var(--gutter-lg));
      box-sizing: border-box;
      ${lightbox &&
      css`
        background-color: #fff;
        padding: var(--gutter-md) var(--gutter-lg);
      `}
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
      display: inline-block;
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
    date: css`
      font-size: var(--fs-15);
      font-weight: 500;
      color: #888;
      margin: 1em 0 0;
      display: inline-block;
      text-transform: uppercase;
    `,
    body: css`
      margin-top: 2em;
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
    fig: css`
      margin: 2em 0 3em;
      figcaption {
        font-size: var(--fs-15);
        max-width: 90ch;
        font-style: italic;
        margin: 0.75em 0 0;
        color: #666;
      }
    `,
    pipe: css`
      display: inline-block;
      font-weight: 300;
      color: #aaa;
      margin: 0 0.5em;
      transform: translateY(0.05em);
      &:before {
        content: '|';
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
      <span css={styles.pipe} />
      <span css={styles.date}>{article.meta.formattedDate}</span>
      <div css={styles.body}>
        <StructuredText
          renderBlock={({ record }) => {
            if (record.__typename === 'DatoCmsImage') {
              return (
                <figure css={styles.fig}>
                  <GatsbyImage
                    image={record.image.gatsbyImageData}
                    alt={record.image.alt || ''}
                  />
                  {record.image.title && (
                    <figcaption>{record.image.title}</figcaption>
                  )}
                </figure>
              )
            } else return null
          }}
          data={article.body}
        />
      </div>
    </article>
  )
}

export default Article
