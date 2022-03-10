import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import AboutHow from '../components/AboutHow'
import AboutServices from '../components/AboutServices'
import AboutTeam from '../components/AboutTeam'
import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'
import Seo from '../components/Seo'

const AboutPage = () => {
  const { page } = useStaticQuery(graphql`
    query {
      page: datoCmsAboutPage {
        aboutHeading
        aboutBodyNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  const styles = {
    main: css`
      background-color: #fff;
      color: #555;
    `,
  }
  return (
    <Layout mainCss={styles.main}>
      <Seo
        title={page.seo?.title || page.aboutHeading}
        description={page.seo?.description}
      />
      <PageIntro
        heading={page.aboutHeading}
        bodyNode={page.aboutBodyNode}
      />
      <AboutServices />
      <AboutHow />
      <AboutTeam />
    </Layout>
  )
}

export default AboutPage
