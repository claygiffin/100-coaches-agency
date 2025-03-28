'use client'

import {
  type ComponentProps,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImageFocused } from '@/features/dato-image'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { classes } from '@/utils/css'
import { focalPoint } from '@/utils/helpers'

import styles from './HomeHeroImages.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.HomeHeroImagesFragment[] | null | undefined
}

export const HomeHeroImages = ({ data, ...props }: Props) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
    initialInView: true,
  })
  const numberImages = data?.length
  const transitionDuration = 1000
  const slideDuration = 5000
  const [activeIndex, setActiveIndex] = useState(-1)

  const windowDimensions = useWindowDimensions()

  const getImage = useCallback(
    (image: any) => {
      if (
        (windowDimensions?.width || 0) > (windowDimensions?.height || 0)
      ) {
        return { image: image.horizontal, ar: 16 / 10 }
      } else {
        return { image: image.vertical, ar: 2 / 3 }
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
    if (activeIndex < (numberImages || 0) - 1) {
      setActiveIndex(prev => prev + 1)
    } else {
      setActiveIndex(0)
    }
  }, [activeIndex, numberImages])

  useEffect(() => {
    const delay = setTimeout(handleSlideChange, slideDuration)
    return () => clearTimeout(delay)
  }, [handleSlideChange])

  return (
    <div
      className={styles.container}
      style={{
        '--slide-duration': slideDuration + 'ms',
        '--transition-duration': transitionDuration + 'ms',
      }}
      ref={inViewRef}
    >
      {data?.map((image: any, i: number) => (
        <div
          className={classes(
            styles.imageWrap,
            inView && activeIndex === i && styles.active
          )}
          style={{ transformOrigin: focalPoint(image.focalPoint) }}
          key={i}
        >
          <DatoImageFocused
            className={styles.image}
            data={getImage(image).image}
            aspectRatio={getImage(image).ar}
            focalPoint={image.focalPoint}
          />
        </div>
      ))}
    </div>
  )
}
