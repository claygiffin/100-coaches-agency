import { css } from '@emotion/react'
import { graphql } from 'gatsby'

import CoachProfile from '../components/CoachProfile'
import Layout from '../components/Layout'
import { CoachProps } from '../types/customTypes'

export const data = graphql`
  query ($id: String!) {
    coach: datoCmsCoach(id: { eq: $id }) {
      ...CoachFragment
    }
  }
`

type PropTypes = {
  data: {
    coach: CoachProps
  }
}

const CoachProfilePage = ({ data }: PropTypes) => {
  const styles = {
    layout: css`
      background: linear-gradient(to top right, #ddd, #fff);
      display: flex;
      justify-content: center;
      padding: calc(var(--gutter-md) + 1.4vw) 0
        calc(var(--gutter-lg) + 5vw);
    `,
  }
  return (
    <Layout mainCss={styles.layout}>
      <CoachProfile coach={data.coach} />
    </Layout>
  )
}

export default CoachProfilePage
