'use client'

import { type ComponentProps, useRef } from 'react'

import { Carousel } from '@/features/carousel'
import { Testimonial } from '@/features/testimonials'

import styles from './TestimonialCarousel.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.AboutPartnerFragment['testimonials'] | null | undefined
}

export const TestimonialCarousel = ({ data, ...props }: Props) => {
  const navContainerRef = useRef<HTMLDivElement>(null)
  return (
    // <div>
    //   <div
    //     className={styles.nav}
    //     ref={navContainerRef}
    //   />
    <Carousel
      snap={true}
      slideCount={data?.length}
      className={styles.carousel}
      navContainer={navContainerRef.current}
      navVariant={'OVERLAY'}
    >
      {data?.map(testimonial => (
        <Testimonial
          data={testimonial}
          key={testimonial.id}
        />
      ))}
    </Carousel>
    // </div>
  )
}
