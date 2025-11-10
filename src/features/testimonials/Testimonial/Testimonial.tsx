'use client'

import Image from 'next/image'
import {
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
  useLayoutEffect,
  useRef,
} from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImage } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { useElementHeight } from '@/hooks'

import styles from './Testimonial.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.TestimonialFragment
  setCarouselHeight?: Dispatch<SetStateAction<number | undefined>>
  variant?: 'V1' | 'V2'
}

export const Testimonial = ({
  data,
  variant,
  setCarouselHeight,
  ...props
}: Props) => {
  const { inView, ref } = useInView({ rootMargin: '100% -49%' })
  const heightRef = useRef<HTMLElement>(null)
  const height = useElementHeight(heightRef)
  useLayoutEffect(() => {
    if (setCarouselHeight && inView) {
      setCarouselHeight(height)
    }
  }, [height, setCarouselHeight, inView])
  const getLogo = () => {
    switch (data.logo?.format) {
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
      data-variant={variant}
      ref={node => {
        ref(node)
        heightRef.current = node
      }}
      {...props}
    >
      <div className={styles.images}>
        {data.headshot && (
          <div className={styles.headshot}>
            <DatoImage
              data={data.headshot.responsiveImage}
              className={styles.image}
            />
          </div>
        )}
        {getLogo() && (
          <div
            className={styles.logo}
            style={{ '--logo-bg-color': data.logoBackgroundColor?.hex }}
          >
            {getLogo()}
          </div>
        )}
      </div>
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
