'use client'

import { type ComponentProps, useRef, useState } from 'react'

import { Carousel } from '@/features/carousel'
import { Testimonial } from '@/features/testimonials'
import { useElementWidth } from '@/hooks'
import { classes } from '@/utils/css'

import styles from './TestimonialCarousel.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.AboutPartnerFragment['testimonials'] | null | undefined
  variant?: 'V1' | 'V2'
}

export const TestimonialCarousel = ({
  data,
  className,
  variant,
  ...props
}: Props) => {
  const [carouselHeight, setCarouselHeight] = useState<number>()
  const containerRef = useRef<HTMLDivElement>(null)

  const containerWidth = useElementWidth(containerRef)
  return (
    <div
      className={classes(styles.container, className)}
      ref={containerRef}
    >
      <Carousel
        snap={true}
        slideCount={data?.length}
        className={styles.carousel}
        navClass={styles.carouselNav}
        contentClass={styles.carouselContent}
        scrollAreaClass={styles.scrollArea}
        navVariant={'OVERLAY'}
        data-is-single={data?.length === 1 || undefined}
        data-variant={variant}
        style={{
          '--height': carouselHeight
            ? carouselHeight + 'px'
            : undefined,
          '--container-width': containerWidth
            ? containerWidth + 'px'
            : undefined,
        }}
        {...props}
      >
        {data?.map(testimonial => (
          <Testimonial
            data={testimonial}
            key={testimonial.id}
            setCarouselHeight={setCarouselHeight}
            variant={variant}
          />
        ))}
      </Carousel>
    </div>
  )
}
