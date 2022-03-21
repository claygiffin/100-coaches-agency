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
      heading="Lorem ipsum <em>Speakers & Workshops</em> ent dolor emet consec taur."
      backArrow={backArrow}
    />
  )
}

export default SwCategoryMenu
