import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SwIntro from '../components/SwIntro'
import SwTopics from '../components/SwTopics'
import { CoachProps, SeoProps } from '../types/customTypes'

export const data = graphql`
  query ($categoryName: String!) {
    allCategories: allDatoCmsSwCategory(
      sort: { fields: position, order: ASC }
    ) {
      nodes {
        categoryName
        categoryNameFull
      }
    }
    category: datoCmsSwCategory(categoryName: { eq: $categoryName }) {
      categoryName
      categoryNameFull
      description
      topics {
        title
        description
        coaches {
          ...CoachFragment
        }
      }
      seo {
        title
        description
      }
    }
  }
`

type PropTypes = {
  data: {
    allCategories: {
      nodes: {
        categoryName: string
        categoryFull?: string
      }[]
    }
    category: {
      categoryName: string
      categoryNameFull: string
      description: string
      topics: {
        title: string
        description: string
        coaches: CoachProps[]
      }[]
      seo: SeoProps
    }
  }
}

const SpeakersWorkshopsPage = ({ data }: PropTypes) => {
  const { allCategories, category } = data

  return (
    <Layout>
      <Seo
        title={
          (category.seo?.title ||
            category.categoryNameFull ||
            category.categoryName) + ' | Speakers & Workshops'
        }
        description={category.seo?.description}
      />
      <SwIntro allCategories={allCategories} category={category} />
      <SwTopics topics={category.topics} />
    </Layout>
  )
}

export default SpeakersWorkshopsPage
