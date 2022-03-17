import { css } from '@emotion/react'
import { graphql } from 'gatsby'

import CategoryNav from '../components/CategoryNav'
import CoachCategoryFeatured from '../components/CoachCategoryFeatured'
import CoachCategoryThumbnail from '../components/CoachCategoryThumbnail'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps, SeoProps } from '../types/customTypes'

export const data = graphql`
  query ($categoryName: String!, $featuredCoachId: String!) {
    categories: allDatoCmsCoachCategory(
      sort: { fields: position, order: ASC }
    ) {
      nodes {
        categoryName
      }
    }
    category: datoCmsCoachCategory(
      categoryName: { eq: $categoryName }
    ) {
      categoryName
      categoryNameFull
      description
      featuredCoach {
        ...CoachFragment
        photo {
          large: gatsbyImageData(
            width: 720
            imgixParams: { q: 75, sat: -100 }
          )
        }
      }
      seo {
        title
        description
      }
    }
    coaches: allDatoCmsCoach(
      filter: {
        coachingCategories: {
          elemMatch: { categoryName: { eq: $categoryName } }
        }
        id: { ne: $featuredCoachId }
      }
    ) {
      nodes {
        ...CoachFragment
      }
    }
  }
`

type PropTypes = {
  data: {
    categories: {
      nodes: {
        categoryName: string
      }[]
    }
    category: {
      categoryName: string
      categoryNameFull: string
      description: string
      featuredCoach: CoachProps
      seo: SeoProps
    }
    coaches: {
      nodes: CoachProps[]
    }
  }
}

const CoachCategoryPage = ({ data }: PropTypes) => {
  const { categories, category, coaches } = data

  const styles = {
    intro: css`
      ${baseGrid}
      background: #fff;
      padding: var(--gutter-xlg) 0;
      h1 {
        grid-column: 2 / -2;
        font-size: var(--fs-84);
        color: ${colors.goldShade1};
        margin: 0;
      }
      p {
        grid-column: 2 / -2;
        max-width: 72ch;
        color: #555;
        font-size: var(--fs-21);
      }
    `,
    coaches: css`
      background: white;
      display: grid;
      position: relative;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: var(--gutter-sm);
      padding: var(--gutter-md) var(--gutter-md)
        calc(var(--gutter-xlg) + 5vw);
      ${mq().ml} {
        grid-template-columns: repeat(3, 1fr);
      }
      ${mq().ms} {
        grid-template-columns: repeat(2, 1fr);
      }
    `,
  }
  return (
    <Layout>
      <Seo
        title={
          category.seo?.title ||
          category.categoryNameFull ||
          category.categoryName
        }
        description={category.seo?.description}
      />
      <section css={styles.intro}>
        <CategoryNav
          categories={categories}
          current={category.categoryName}
          path="/coaches/"
        />
        <h1>{category.categoryNameFull || category.categoryName}</h1>
        <p>{category.description}</p>
      </section>
      <CoachCategoryFeatured featuredCoach={category.featuredCoach} />
      <section css={styles.coaches}>
        {coaches.nodes.map((coach, i: number) => (
          <CoachCategoryThumbnail coach={coach} key={i} index={i} />
        ))}
      </section>
    </Layout>
  )
}

export default CoachCategoryPage
