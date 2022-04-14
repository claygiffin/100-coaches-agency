import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'

const SpeakersWorkshopsPage = () => {
  const { page } = useStaticQuery(graphql`
    query {
      page: datoCmsSpeakersWorkshopsPage {
        pageHeading
        pageBodyNode {
          childMarkdownRemark {
            html
          }
        }
        topics {
          title
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
          coaches {
            ...CoachFragment
          }
        }
      }
    }
  `)
  const styles = {
    main: css`
      background: #fff;
    `,
  }
  return (
    <Layout mainCss={styles.main}>
      <PageIntro
        heading={page.pageHeading}
        bodyNode={page.pageBodyNode}
      />
    </Layout>
  )
}

export default SpeakersWorkshopsPage
