'use client'

import { type ComponentProps, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImageFocused } from '@/features/dato-image'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { classes } from '@/utils/css'
import { focalPoint } from '@/utils/helpers'

import styles from './ArticlesHeroImage.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.ArticlesHeroImageFragment | null | undefined
}

export const ArticlesHeroImage = ({ data, ...props }: Props) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
    initialInView: true,
  })

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

  return (
    <div
      ref={inViewRef}
      {...props}
      className={classes(styles.container, props.className)}
    >
      <div
        className={classes(styles.imageWrap)}
        style={{
          transformOrigin: focalPoint(
            data?.focalPoint || { x: 0, y: 0 }
          ),
        }}
      >
        <DatoImageFocused
          className={styles.image}
          data={getImage(data).image}
          aspectRatio={getImage(data).ar}
          focalPoint={data?.focalPoint}
        />
      </div>
    </div>
  )
}
