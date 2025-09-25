'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
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

interface CardThumbnailProps {
  type?: string
  slug: string
  thumbnail: any
  onClick: () => void
}

const CardThumbnail: React.FC<CardThumbnailProps> = ({
  type,
  slug,
  thumbnail,
  onClick,
}) => {
  const isVideo = type === 'Video'

  return (
    <div
      className={styles.imagePlaceholder}
      onClick={onClick}
    >
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
              alt={`video-${slug}`}
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
  )
}

export const Card: React.FC<CardProps> = ({
  type,
  description,
  date,
  slug,
  thumbnail,
}) => {
  const router = useRouter()

  const handleClick = () => {
    switch (type) {
      case 'Book':
        router.push(`/books/${slug}`)
        break
      case 'Newsletter':
        router.push(`/newsletters/${slug}`, { scroll: false })
        break
      case 'Article':
        router.push(`/articles/${slug}`, { scroll: false })
        break
      case 'Video':
        router.push(`/videos/${slug}`, { scroll: false })
        break
      default:
        break
    }
  }

  return (
    <div className={styles.card}>
      <CardThumbnail
        type={type}
        slug={slug}
        thumbnail={thumbnail}
        onClick={handleClick}
      />
      <div className={styles.content}>
        <div className={styles.type}>{type}</div>
        <div className={styles.descriptionWrapper}>
          <h3 className={styles.description}>{description}</h3>
        </div>
      </div>
    </div>
  )
}
