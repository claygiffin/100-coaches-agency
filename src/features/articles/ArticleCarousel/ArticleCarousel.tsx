'use client'

import { useState } from 'react'

import { DatoImage } from '@/features/dato-image'
import { ArrowLeftIcon, ArrowRightIcon } from '@/features/leadership'

import styles from './ArticleCarousel.module.scss'

export const ArticleCarousel = ({
  items,
  description,
}: {
  items: any
  description: string
}) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % items?.length)
  }

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + items?.length) % items?.length)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselBody}>
        <div className={styles.slide}>
          <DatoImage
            className={styles.image}
            data={items[current]?.image?.responsiveImage}
          />
        </div>

        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prevSlide}
        >
          <ArrowLeftIcon className={styles.icon} />
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextSlide}
        >
          <ArrowRightIcon className={styles.icon} />
        </button>
      </div>
      <div className={styles.topBorder}></div>
      <div className={styles.bottomBorder}></div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
