import { type ComponentProps, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImageFocused } from '@/features/dato-image'
import { useElementRect } from '@/hooks'

import styles from './MediaCarouselImage.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.MediaCarouselImageFragment
  isSingle: boolean
  setCarouselHeight: (height: number | undefined) => void
  setCurrentSlideWidth: (width: number | undefined) => void
  setSlideWidth?: (width: number | undefined) => void
}

export const MediaCarouselImage = ({
  data,
  setCarouselHeight,
  setCurrentSlideWidth,
  setSlideWidth,
  isSingle,
  ...props
}: Props) => {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const { inView, ref: inViewRef } = useInView({
    rootMargin: '100% -50%',
    root: isSingle
      ? ref?.parentElement?.parentElement?.parentElement?.parentElement
          ?.parentElement?.parentElement
      : ref?.parentElement?.parentElement,
  })
  const { height, width } = useElementRect(ref)
  useEffect(() => {
    if (inView) {
      setCarouselHeight(height)
      setCurrentSlideWidth(width)
    }
    if (setSlideWidth) {
      setSlideWidth(width)
    }
  }, [
    height,
    width,
    inView,
    setCarouselHeight,
    setCurrentSlideWidth,
    setSlideWidth,
  ])
  const getImageOrientation = () => {
    const ar = data.image.responsiveImage.aspectRatio
    if (ar > 1) {
      return 'LANDSCAPE'
    } else {
      return 'PORTRAIT'
    }
  }
  return (
    <figure
      data-image-orientation={getImageOrientation()}
      data-in-view={inView}
      data-is-single={isSingle}
      className={styles.container}
      ref={node => {
        inViewRef(node)
        setRef(node)
      }}
      style={{ '--aspect-ratio': data.image.width / data.image.height }}
      {...props}
    >
      <DatoImageFocused
        className={styles.image}
        data={data.image.responsiveImage}
        focalPoint={data.image.focalPoint}
      />
      {data.image.responsiveImage.title && (
        <figcaption className={styles.caption}>
          {data.image.responsiveImage.title}
        </figcaption>
      )}
    </figure>
  )
}
