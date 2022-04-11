import { graphql, useStaticQuery } from 'gatsby'

import CategoryMenu from './CategoryMenu'

const CoachCategoryMenu = ({ backArrow }: { backArrow?: boolean }) => {
  type QueryTypes = {
    coachCategories: {
      nodes: Array<{
        categoryName: string
        categoryNameFull: string
        description: string
      }>
    }
  }
  const { coachCategories }: QueryTypes = useStaticQuery(graphql`
    query {
      coachCategories: allDatoCmsCoachCategory(
        sort: { fields: position }
      ) {
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
      path="/coaches/"
      categories={coachCategories}
      heading="<em>Coaches</em> dedicated to finding the right solutions to your business challenges."
      backArrow={backArrow}
    />
  )
}

export default CoachCategoryMenu
