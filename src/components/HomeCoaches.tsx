import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import HomeCoachesGrid from './HomeCoachesGrid'
import ParallaxTranslate from './ParallaxTranslate'

const HomeCoaches = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        coachesHeading
      }
    }
  `)
  const styles = {
    section: css`
      display: grid;
      background-color: #fff;
      grid-template-rows: 110vh 40vmax;
      grid-template-columns: 1fr;
      margin-top: -15vw;
      padding-top: 15vw;
    `,
    parallaxWrapper: css`
      grid-row: 1 / 3;
      grid-column: 1 / -1;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      --translate-factor: 200;
    `,
    parallaxElement: css`
      position: fixed;
      top: var(--gutter-lg);
      left: 0;
    `,
    parallaxInner: css`
      ${baseGrid}
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    `,
    heading: css`
      color: #555;
      font-size: var(--fs-60);
      grid-column: 2 / -2;
      max-width: 25ch;
      text-align: center;
      justify-self: center;
      em {
        display: inline-block;
        font-style: normal;
        color: ${colors.goldShade1};
      }
    `,
  }

  return (
    <section css={styles.section}>
      <ParallaxTranslate
        wrapperCss={styles.parallaxWrapper}
        parallaxElementCss={styles.parallaxElement}
        innerCss={styles.parallaxInner}
        fromBack
      >
        <h2
          dangerouslySetInnerHTML={{ __html: home.coachesHeading }}
          css={styles.heading}
        />
      </ParallaxTranslate>
      <HomeCoachesGrid />
    </section>
  )
}

export default HomeCoaches
