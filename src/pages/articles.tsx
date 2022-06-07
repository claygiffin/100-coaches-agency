import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import ArticleThumbnail from '../components/ArticleThumbnail'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import { ArticleProps } from '../types/customTypes'

const ArticlesPage = () => {
  const { articles } = useStaticQuery(graphql`
    query {
      articles: allDatoCmsArticle {
        nodes {
          ...ArticleFragment
        }
      }
    }
  `)
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
      margin: 0 0 0.75em;
    `,
    articles: css`
      grid-column: 2 / -2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: var(--gutter-md);
    `,
  }
  return (
    <Layout mainCss={styles.main}>
      <Seo title="Thought Leadership & News" />
      <h1 css={styles.heading}>Thought Leadership & News</h1>
      <div css={styles.articles}>
        {articles.nodes.map((article: ArticleProps, i: number) => (
          <ArticleThumbnail key={i} article={article} />
        ))}
      </div>
    </Layout>
  )
}

export default ArticlesPage
