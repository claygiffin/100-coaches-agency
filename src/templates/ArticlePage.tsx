import { css } from '@emotion/react'
import { Link, graphql } from 'gatsby'

import ArrowButton from '../components/ArrowButton'
import Article from '../components/Article'
import Layout from '../components/Layout'
import { ArticleProps } from '../types/customTypes'

export const data = graphql`
  query ($id: String!) {
    article: datoCmsArticle(originalId: { eq: $id }) {
      ...ArticleFragment
    }
  }
`

type Props = {
  data: {
    article: ArticleProps
  }
}

const ArticlePage = ({ data }: Props) => {
  const styles = {
    main: css`
      padding: var(--gutter-lg) var(--margin-outer) var(--gutter-xlg);
    `,
  }
  return (
    <Layout mainCss={styles.main}>
      <ArrowButton
        as={Link}
        to="/articles/"
        text="Back to Articles"
        direction="LEFT"
      />
      <Article article={data.article} />
    </Layout>
  )
}

export default ArticlePage
