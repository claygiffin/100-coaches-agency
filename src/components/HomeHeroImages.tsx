import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { absoluteFill } from '../theme/mixins'

const HomeHeroImages = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        heroImages {
          gatsbyImageData(
            layout: FULL_WIDTH
            imgixParams: { q: 75, sat: -100, bri: -33, con: -75 }
          )
          alt
        }
      }
    }
  `)
  const styles = {
    container: css`
      ${absoluteFill}
      z-index: 0;
    `,
    imageWrap: css`
      ${absoluteFill}
    `,
    image: css`
      min-width: 100%;
      min-height: 100%;
    `,
  }
  return (
    <div css={styles.container}>
      {home.heroImages.map((image: any, i: number) => (
        <div css={styles.imageWrap} key={i}>
          <GatsbyImage
            css={styles.image}
            image={image.gatsbyImageData}
            alt={image.alt || ''}
          />
        </div>
      ))}
    </div>
  )
}

export default HomeHeroImages
