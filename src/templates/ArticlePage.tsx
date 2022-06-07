import { graphql } from 'gatsby'

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
  return (
    <Layout>
      <Article article={data.article} />
    </Layout>
  )
}

export default ArticlePage
