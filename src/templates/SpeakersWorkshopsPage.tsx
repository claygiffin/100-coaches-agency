import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SwIntro from '../components/SwIntro'
import SwTopics from '../components/SwTopics'
import { CoachProps, SeoProps } from '../types/customTypes'

export const data = graphql`
  query ($categoryName: String!) {
    allCategories: allDatoCmsSwCategory(sort: { position: ASC }) {
      nodes {
        categoryName
        categoryNameFull
      }
    }
    category: datoCmsSwCategory(categoryName: { eq: $categoryName }) {
      categoryName
      categoryNameFull
      description
      heroImage {
        horizontal: gatsbyImageData(
          layout: FULL_WIDTH
          imgixParams: {
            q: 75
            sat: -100
            bri: -35
            con: -75
            ar: "16:10"
            fit: "crop"
          }
        )
        vertical: gatsbyImageData(
          layout: FULL_WIDTH
          imgixParams: {
            q: 75
            sat: -100
            bri: -35
            con: -75
            ar: "2:3"
            fit: "crop"
          }
        )
        alt
      }
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
      heroImage: {
        horizontal: IGatsbyImageData
        vertical: IGatsbyImageData
        alt?: string
      }
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
