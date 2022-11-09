import { css } from '@emotion/react'
import { graphql } from 'gatsby'

import CategoryNav from '../components/CategoryNav'
import CoachCategoryThumbnail from '../components/CoachCategoryThumbnail'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps } from '../types/customTypes'

export const data = graphql`
  query {
    categories: allDatoCmsCoachCategory(sort: { position: ASC }) {
      nodes {
        categoryName
      }
    }
    coaches: allDatoCmsCoach(sort: { position: ASC }) {
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
    coaches: {
      nodes: CoachProps[]
    }
  }
}

const CoachCategoryPage = ({ data }: PropTypes) => {
  const { categories, coaches } = data

  const styles = {
    intro: css`
      ${baseGrid}
      background: #fff;
      padding: var(--gutter-xlg) 0 0;
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
      <Seo title={'All Coaches'} />
      <section css={styles.intro}>
        <CategoryNav
          categories={categories}
          current={'All'}
          path="/coaches/"
          allLink
        />
        {/* <h1>All Coaches</h1> */}
      </section>
      <section css={styles.coaches}>
        {coaches.nodes.map((coach, i: number) => (
          <CoachCategoryThumbnail coach={coach} key={i} index={i} />
        ))}
      </section>
    </Layout>
  )
}

export default CoachCategoryPage
