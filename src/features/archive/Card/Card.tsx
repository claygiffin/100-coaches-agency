'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { DatoImageFocused } from '@/features/dato-image'

import styles from './Card.module.scss'

interface CardProps {
  type?: string
  description: string
  date: string
  slug: string
  thumbnail: any
}

export const Card: React.FC<CardProps> = ({
  type,
  description,
  // date,
  slug,
  thumbnail,
}) => {
  const isVideo = type === 'Videos'

  const getSlug = () => {
    switch (type) {
      case 'Books':
        return `/books/${slug}`
      case 'Newsletters':
        return `/newsletters/${slug}`
      case 'Articles':
        return `/articles/${slug}`
      case 'Videos':
        return `/videos/${slug}`
      default:
        return `/`
    }
  }

  return (
    <Link
      className={styles.card}
      href={getSlug()}
      scroll={getSlug().includes('\/books\/')}
    >
      <div className={styles.imageContainer}>
        {isVideo ? (
          <div className={styles.videoThumbnailWrapper}>
            {thumbnail?.responsiveImage ? (
              <DatoImageFocused
                className={styles.videoThumbnail}
                data={thumbnail?.responsiveImage}
                focalPoint={thumbnail?.focalPoint}
              />
            ) : (
              <Image
                className={styles.videoThumbnail}
                src={thumbnail}
                alt={''}
                width={320}
                height={180}
              />
            )}
            <div className={styles.innerTool}>
              <div className={styles.toolWrapper}>
                <div className={styles.playWrapper}>
                  <div className={styles.play} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <DatoImageFocused
            className={styles.thumbnail}
            data={thumbnail?.responsiveImage}
            focalPoint={thumbnail?.focalPoint}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.type}>{type}</div>
        <div className={styles.descriptionWrapper}>
          <h3 className={styles.description}>{description}</h3>
        </div>
      </div>
    </Link>
  )
}
