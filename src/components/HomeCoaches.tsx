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
  const sectionStyle = css`
    display: grid;
    grid-template-rows: 105vh 140vh;
    grid-template-columns: 1fr;
    margin-bottom: 10vh;
  `
  const parallaxWrapperStyle = css`
    grid-row: 1 / 3;
    grid-column: 1 / -1;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    --translate-factor: 200;
  `
  const parallaxElementStyle = css`
    position: fixed;
    top: var(--gutter-lg);
    left: 0;
  `
  const parallaxInnerStyle = css`
    ${baseGrid}
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `
  const headingStyle = css`
    color: #555;
    font-size: var(--fs-60);
    grid-column: 2 / -2;
    max-width: 25ch;
    text-align: center;
    justify-self: center;
    em {
      font-style: normal;
      color: ${colors.goldShade1};
    }
  `
  return (
    <section css={sectionStyle}>
      <ParallaxTranslate
        wrapperCss={parallaxWrapperStyle}
        parallaxElementCss={parallaxElementStyle}
        innerCss={parallaxInnerStyle}
        fromBack
      >
        <h2
          dangerouslySetInnerHTML={{ __html: home.coachesHeading }}
          css={headingStyle}
        />
      </ParallaxTranslate>
      <HomeCoachesGrid />
    </section>
  )
}

export default HomeCoaches
