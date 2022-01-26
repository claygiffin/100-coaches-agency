import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'

import { absoluteFill } from '../theme/mixins'
import { focalPoint } from '../utils/helpers'

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
          focalPoint {
            x
            y
          }
        }
      }
    }
  `)
  const numberImages = home.heroImages.length
  const transitionDuration = 1000
  const slideDuration = 5000
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const delay = setTimeout(() => {
      if (activeIndex < numberImages - 1) {
        setActiveIndex(prev => prev + 1)
      } else {
        setActiveIndex(0)
      }
    }, slideDuration)
    return () => clearTimeout(delay)
  }, [activeIndex, numberImages])

  const styles = {
    container: css`
      ${absoluteFill}
      z-index: 0;
    `,
    imageWrap: css`
      ${absoluteFill}
      z-index: 0;
      opacity: 0;
      transform: scale3d(1, 1, 1);
      transition: opacity 0ms linear ${transitionDuration}ms,
        transform 0ms linear ${transitionDuration}ms;
    `,
    active: css`
      z-index: 1;
      opacity: 1;
      transition: opacity ${transitionDuration}ms ease,
        transform ${slideDuration + transitionDuration}ms ease-out;
      transform: scale3d(1.05, 1.05, 1);
    `,
    image: css`
      min-width: 100%;
      min-height: 100%;
    `,
  }
  return (
    <div css={styles.container}>
      {home.heroImages.map((image: any, i: number) => (
        <div
          css={[
            styles.imageWrap,
            activeIndex === i && styles.active,
            css`
              transform-origin: ${focalPoint(image.focalPoint)};
            `,
          ]}
          key={i}
        >
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
