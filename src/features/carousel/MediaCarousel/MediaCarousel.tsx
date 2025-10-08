'use client'

import { type ComponentProps, useState } from 'react'

import { Carousel } from '@/features/carousel'
import { useElementWidth } from '@/hooks'
import { classes } from '@/utils'

import styles from './MediaCarousel.module.scss'
import { MediaCarouselImage } from './MediaCarouselImage/MediaCarouselImage'
import { MediaCarouselVideo } from './MediaCarouselVideo/MediaCarouselVideo'

type Props = ComponentProps<'div'> & {
  data: Queries.MediaCarouselFragment
  variant?: 'DEFAULT' | 'CONTENT_SECTION'
}

export const MediaCarousel = ({
  data,
  variant = 'DEFAULT',
  className,
  ...props
}: Props) => {
  const [carouselHeight, setCarouselHeight] = useState<number>()
  const [currentSlideWidth, setCurrentSlideWidth] = useState<number>()
  const [containerRef, setContainerRef] =
    useState<HTMLDivElement | null>(null)

  const containerWidth = useElementWidth(containerRef)
  const [firstSlideWidth, setFirstSlideWidth] = useState<number>()
  const [lastSlideWidth, setLastSlideWidth] = useState<number>()

  if (!data.media) return
  return (
    <div
      className={classes(styles.container, className)}
      ref={setContainerRef}
      data-is-single={data.media.length === 1 || undefined}
      {...props}
    >
      <Carousel
        className={styles.carousel}
        // data-is-ready={(carouselHeight && carouselHeight > 0) || false}
        data-is-ready="true"
        data-variant={variant}
        style={{
          '--height': carouselHeight
            ? carouselHeight + 'px'
            : undefined,
          '--container-width': containerWidth
            ? containerWidth + 'px'
            : undefined,
          '--current-slide-width': currentSlideWidth
            ? currentSlideWidth + 'px'
            : undefined,
          '--first-slide-width': firstSlideWidth
            ? firstSlideWidth + 'px'
            : undefined,
          '--last-slide-width': lastSlideWidth
            ? lastSlideWidth + 'px'
            : undefined,
        }}
        slideCount={data.media.length}
        navVariant={'OVERLAY'}
        navClass={styles.carouselNav}
        contentClass={styles.carouselContent}
        scrollAreaClass={styles.scrollArea}
        snap
      >
        {data.media.map((media, i, array) => {
          switch (media.__typename) {
            case 'ImageBlockRecord': {
              return (
                <MediaCarouselImage
                  isSingle={data.media.length === 1}
                  setCarouselHeight={setCarouselHeight}
                  setCurrentSlideWidth={setCurrentSlideWidth}
                  setSlideWidth={width => {
                    if (i === 0) {
                      setFirstSlideWidth(width)
                    }
                    if (i === array.length - 1) {
                      setLastSlideWidth(width)
                    }
                  }}
                  data={media}
                  key={media.id}
                />
              )
            }
            case 'InternalVideoRecord':
            case 'ExternalVideoRecord': {
              return (
                <MediaCarouselVideo
                  isSingle={data.media.length === 1}
                  setCarouselHeight={setCarouselHeight}
                  setCurrentSlideWidth={setCurrentSlideWidth}
                  setSlideWidth={width => {
                    if (i === 0) {
                      setFirstSlideWidth(width)
                    }
                    if (i === array.length - 1) {
                      setLastSlideWidth(width)
                    }
                  }}
                  data={media.video}
                  key={media.id}
                />
              )
            }
          }
        })}
      </Carousel>
    </div>
  )
}
