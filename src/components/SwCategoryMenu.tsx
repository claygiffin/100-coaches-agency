import { graphql, useStaticQuery } from 'gatsby'

import CategoryMenu from './CategoryMenu'

const SwCategoryMenu = ({ backArrow }: { backArrow?: boolean }) => {
  type QueryTypes = {
    categories: {
      nodes: Array<{
        categoryName: string
        categoryNameFull?: string
        description: string
      }>
    }
  }
  const { categories }: QueryTypes = useStaticQuery(graphql`
    query {
      categories: allDatoCmsSwCategory(sort: { fields: position }) {
        nodes {
          categoryName
          categoryNameFull
          description
        }
      }
    }
  `)

  return (
    <CategoryMenu
      path="/speakers-workshops/"
      categories={categories}
      heading="Keynote speakers and workshops delivered by world-class experts."
      backArrow={backArrow}
    />
  )
}

export default SwCategoryMenu
