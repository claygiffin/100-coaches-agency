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
  const containerStyle = css`
    ${absoluteFill}
    z-index: 0;
  `
  const imageWrap = css`
    ${absoluteFill}
  `
  const imageStyle = css`
    min-width: 100%;
    min-height: 100%;
  `
  return (
    <div css={containerStyle}>
      {home.heroImages.map((image: any, i: number) => (
        <div css={imageWrap} key={i}>
          <GatsbyImage
            css={imageStyle}
            image={image.gatsbyImageData}
            alt={image.alt || ''}
          />
        </div>
      ))}
    </div>
  )
}

export default HomeHeroImages
