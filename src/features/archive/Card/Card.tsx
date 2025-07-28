'use client'

import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { Modal } from '@/features/modal'
import { getVideoEmbedUrl } from '@/lib/video-embed-link'

import styles from './Card.module.scss'

interface CardProps {
  type?: string
  description: string
  date: string
  slug: string
  thumbnail: any
  videoLink: string
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
          <Image
            className={styles.videoThumbnail}
            src={thumbnail}
            alt={`video-${slug}`}
            width={320}
            height={180}
          />
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
  videoLink,
}) => {
  const router = useRouter()
  const [selectedVideo, setSelectedVideo] = useState<string | null>(
    null
  )

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
        setSelectedVideo(videoLink)
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
        <p className={styles.date}>
          {format(new Date(date), 'MMMM d, yyyy')}
        </p>
      </div>

      {selectedVideo && (
        <Modal
          variant="VIDEOLIGHTBOX"
          onClose={() => setSelectedVideo(null)}
        >
          <div className={styles.videoPlayerContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                src={getVideoEmbedUrl(selectedVideo)}
                allowFullScreen
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
