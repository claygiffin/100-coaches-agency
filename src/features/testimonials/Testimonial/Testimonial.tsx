'use client'

import Image from 'next/image'
import { type ComponentProps } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImage } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './Testimonial.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.TestimonialFragment
}

export const Testimonial = ({ data, ...props }: Props) => {
  const { inView, ref } = useInView({ threshold: 1, rootMargin: '100% 0%' })
  const getLogo = () => {
    switch (data.logo.format) {
      case 'svg': {
        return (
          <Image
            className={styles.image}
            src={data.logo.url}
            alt={data.logo.alt || ''}
            width={data.logo.width || undefined}
            height={data.logo.height || undefined}
          />
        )
      }
      case 'png': {
        return (
          <DatoImage
            className={styles.image}
            data={data.logo.responsiveImage}
          />
        )
      }
    }
  }
  return (
    <div
      className={styles.container}
      data-in-view={inView}
      ref={ref}
      {...props}
    >
      <div className={styles.logo}>{getLogo()}</div>
      <blockquote className={styles.blockquote}>
        <div className={styles.testimonial}>
          <DatoStructuredText data={data.testimonial} />
        </div>
        <footer className={styles.attribution}>
          —{data.attribution}
        </footer>
      </blockquote>
    </div>
  )
}
