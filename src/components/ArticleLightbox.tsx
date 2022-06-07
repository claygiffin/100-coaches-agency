import { ArticleProps } from '../types/customTypes'
import { toSlug } from '../utils/helpers'
import Article from './Article'
import Lightbox from './Lightbox'

type PropTypes = {
  article: ArticleProps
}

const ArticleLightbox = ({ article }: PropTypes) => {
  return (
    <Lightbox slug={`articles/${toSlug(article.title)}-${article.id}`}>
      <Article article={article} />
    </Lightbox>
  )
}

export default ArticleLightbox
