import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMemo, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import ArticleThumbnail from '../components/ArticleThumbnail'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { ArticleProps, NewsItemProps } from '../types/customTypes'

const ArticlesPage = () => {
  type QueryProps = {
    articles: { nodes: ArticleProps[] }
    newsItems: { nodes: NewsItemProps[] }
  }

  const { articles, newsItems } = useStaticQuery<QueryProps>(graphql`
    query {
      articles: allDatoCmsArticle {
        nodes {
          ...ArticleFragment
        }
      }
      newsItems: allDatoCmsNewsItem {
        nodes {
          ...NewsItemFragment
        }
      }
    }
  `)

  const filters = useMemo(
    () => ['Show All', 'Thought Leadership', 'News'],
    []
  )
  const [filter, setFilter] = useState(filters[0])

  const allArticlesNews = useMemo(() => {
    return [...articles.nodes, ...newsItems.nodes]
      .sort((a, b) => Date.parse(a.meta.date) - Date.parse(b.meta.date))
      .filter(item => {
        if (filter === filters[0]) {
          return true
        } else if (filter === filters[1]) {
          return item.__typename === 'DatoCmsArticle'
        } else if (filter === filters[2]) {
          return item.__typename === 'DatoCmsNewsItem'
        }
      })
  }, [articles, newsItems, filter, filters])

  const styles = {
    main: css`
      ${baseGrid}
      background-color: #fff;
      padding: var(--gutter-xlg) 0;
    `,
    heading: css`
      grid-column: 2 / -2;
      font-size: var(--fs-84);
      color: ${colors.goldShade1};
      margin: 0 0 0.5em;
    `,
    articles: css`
      grid-column: 2 / -2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: var(--gutter-md);
      grid-column-gap: var(--gutter-sm);
      margin: 0 calc(-1 * var(--gutter-sm)) var(--gutter-lg);
      align-items: flex-start;
      ${mq().ml} {
        grid-template-columns: repeat(3, 1fr);
      }
      ${mq().ms} {
        grid-template-columns: repeat(2, 1fr);
      }
      ${mq().s} {
        grid-template-columns: 1fr;
      }
    `,
    filter: css`
      grid-column: 2 / -2;
      margin-bottom: 2em;
      > div {
        display: inline-block;
        position: relative;
        transition: color 200ms ease;
        &:hover,
        &:focus-within {
          color: ${colors.goldShade1};
        }
        > span > svg {
          transform: translateY(0.2em);
        }
      }
      > span {
        color: #555;
        display: inline-block;
        margin-right: 0.5em;
      }
      select {
        ${absoluteFill}
        appearance: none;
        border: none;
        color: transparent;
        background: transparent;
        cursor: pointer;
      }
    `,
  }
  return (
    <Layout mainCss={styles.main}>
      <Seo title="Thought Leadership & News" />
      <h1 css={styles.heading}>Thought Leadership & News</h1>
      <div css={styles.filter}>
        <span>Filter: </span>
        <div>
          <span>
            {filter}
            <BiChevronDown />
          </span>
          <select
            onChange={e => setFilter(e.target.value)}
            defaultValue={filters[0]}
          >
            {filters.map(x => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div css={styles.articles}>
        {allArticlesNews.map((article, i) => (
          <ArticleThumbnail key={i} article={article} />
        ))}
      </div>
    </Layout>
  )
}

export default ArticlesPage
