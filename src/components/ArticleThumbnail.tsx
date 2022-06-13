import { css } from '@emotion/react'
import { HiOutlineExternalLink } from 'react-icons/hi'

import { absoluteFill } from '../theme/mixins'
import { colors } from '../theme/variables'
import { ArticleProps, NewsItemProps } from '../types/customTypes'
import ArticleLightbox from './ArticleLightbox'
import CoachProfileLightbox from './CoachProfileLightbox'

type Props = {
  article: ArticleProps | NewsItemProps
}

const ArticleThumbnail = ({ article }: Props) => {
  const isArticle = article.__typename === 'DatoCmsArticle'
  const styles = {
    thumbnail: css`
      position: relative;
      padding: 1rem var(--gutter-sm);
      transition: background-color 300ms ease;
      &:before {
        content: '';
        position: absolute;
        display: block;
        width: calc(100% - 2 * var(--gutter-sm));
        height: 1px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        transition: width 150ms ease;
      }
      @media (hover: hover) {
        &:hover,
        &:focus-within {
          background-color: #f5f5f5;
          &:before {
            width: 100%;
          }
        }
      }
    `,

    title: css`
      position: relative;
      font-size: var(--fs-30);
      margin: 0;
      padding: 0.125em 0 0.2em;
      font-weight: 325;
      transition: color 300ms ease;
      color: ${colors.goldShade1};
      display: flex;
      justify-content: space-between;
      div:hover > & {
        color: ${colors.goldShade2};
      }
    `,
    author: css`
      position: relative;
      margin: 0;
      padding: 0.25em 0 0.125em;
      font-size: var(--fs-15);
      font-weight: 500;
      width: fit-content;
      color: #555;
      transition: color 300ms ease;
      ${isArticle &&
      css`
        @media (hover: hover) {
          &:hover,
          &:focus-within {
            color: ${colors.goldShade2};
            text-decoration: underline;
          }
        }
      `}
    `,
    publication: css`
      font-style: italic;
    `,
    date: css`
      font-size: var(--fs-13);
      font-weight: 400;
      color: #888;
      text-transform: uppercase;
    `,
    newsLink: css`
      ${absoluteFill}
    `,
    external: css`
      font-size: var(--fs-16);
      margin-top: -0.1em;
      color: #666;
      flex: none;
    `,
  }
  return (
    <div css={styles.thumbnail}>
      <h2 css={styles.title}>
        {article.title}
        {!isArticle && <HiOutlineExternalLink css={styles.external} />}
      </h2>
      {isArticle ? (
        <ArticleLightbox article={article} />
      ) : (
        <a
          href={article.url}
          css={styles.newsLink}
          target="_blank"
          rel="noreferrer"
        >
          <span />
        </a>
      )}
      <h3 css={[styles.author, !isArticle && styles.publication]}>
        {isArticle ? article.author.name : article.publication}
        {isArticle && (
          <CoachProfileLightbox
            coach={article.author}
            directory={
              article.author.__typename === 'DatoCmsTeamMember'
                ? 'team'
                : undefined
            }
          />
        )}
      </h3>
      <span css={styles.date}>{article.meta.formattedDate}</span>
    </div>
  )
}

export default ArticleThumbnail
