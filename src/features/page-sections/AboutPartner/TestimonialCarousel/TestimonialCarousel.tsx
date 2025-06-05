'use client'

import { type ComponentProps, useRef } from 'react'

import { Carousel } from '@/features/carousel'
import { Testimonial } from '@/features/testimonials'
import { classes } from '@/utils/css'

import styles from './TestimonialCarousel.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.AboutPartnerFragment['testimonials'] | null | undefined
}

export const TestimonialCarousel = ({
  data,
  className,
  ...props
}: Props) => {
  const navContainerRef = useRef<HTMLDivElement>(null)
  return (
    <Carousel
      snap={true}
      slideCount={data?.length}
      className={classes(styles.carousel, className)}
      navContainer={navContainerRef.current}
      navVariant={'OVERLAY'}
      {...props}
    >
      {data?.map(testimonial => (
        <Testimonial
          data={testimonial}
          key={testimonial.id}
        />
      ))}
    </Carousel>
  )
}
