import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { absoluteFill } from '../theme/mixins'
import { focalPoint } from '../utils/helpers'

const HomeHeroImages = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        heroImages {
          horizontal: gatsbyImageData(
            layout: FULL_WIDTH
            imgixParams: {
              q: 75
              sat: -100
              bri: -33
              con: -75
              ar: "16:10"
              fit: "crop"
            }
          )
          vertical: gatsbyImageData(
            layout: FULL_WIDTH
            imgixParams: {
              q: 75
              sat: -100
              bri: -33
              con: -75
              ar: "2:3"
              fit: "crop"
            }
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

  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
    initialInView: true,
  })
  const numberImages = home.heroImages.length
  const transitionDuration = 1000
  const slideDuration = 5000
  const [activeIndex, setActiveIndex] = useState(-1)

  const windowDimensions = useWindowDimensions()

  const getImage = useCallback(
    image => {
      if (windowDimensions.width > windowDimensions.height) {
        return image.horizontal
      } else {
        return image.vertical
      }
    },
    [windowDimensions]
  )

  // Trigger animation effects on initial load
  useEffect(() => {
    const delay = setTimeout(() => {
      setActiveIndex(0)
    }, 10)
    return () => clearTimeout(delay)
  }, [])

  const handleSlideChange = useCallback(() => {
    if (activeIndex < numberImages - 1) {
      setActiveIndex(prev => prev + 1)
    } else {
      setActiveIndex(0)
    }
  }, [activeIndex, numberImages])

  useEffect(() => {
    const delay = setTimeout(handleSlideChange, slideDuration)
    return () => clearTimeout(delay)
  }, [handleSlideChange])

  const styles = {
    container: css`
      ${absoluteFill}
      overflow: hidden;
      z-index: 0;
    `,
    imageWrap: css`
      ${absoluteFill}
      z-index: 0;
      opacity: 0;
      transform: scale3d(1, 1, 1);
      backface-visibility: hidden;
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
    <div css={styles.container} ref={inViewRef}>
      {home.heroImages.map((image: any, i: number) => (
        <div
          css={[
            styles.imageWrap,
            inView && activeIndex === i && styles.active,
            css`
              transform-origin: ${focalPoint(image.focalPoint)};
            `,
          ]}
          key={i}
        >
          <GatsbyImage
            css={styles.image}
            // objectPosition={focalPoint(image.focalPoint)}
            image={getImage(image)}
            alt={image.alt || ''}
          />
        </div>
      ))}
    </div>
  )
}

export default HomeHeroImages
