'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoLink } from '@/features/links'

import { Slider } from '../index'
import styles from './LeaderShipVideos.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipVideosFragment | null | undefined
  videos: Queries.VideoFragment[] | null | undefined
}

export const LeaderShipVideos = ({ data, videos, ...props }: Props) => {
  const router = useRouter()

  const showingVideos = (() => {
    const primary = data?.videoItemsOverrides ?? []
    const fallback = videos ?? []

    if (primary.length >= 5) return primary

    const urls = new Set(primary.map(item => item?.file?.url))
    const needed = 5 - primary.length
    const additional = fallback
      .filter(item => item && !urls.has(item.file?.url))
      .slice(0, needed)

    return [...primary, ...additional]
  })()

  const openVideo = (slug: string) =>
    router.push(`/videos/${slug}`, { scroll: false })

  return (
    <section
      id="videos"
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.videosHeading}</h2>
        <span className={styles.headerLine}></span>
        <DatoLink
          data={data?.videosArchiveButton}
          className={styles.archiveButton}
          searchParam={{ field: 'category', value: 'video' }}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      <div>
        <div className={styles.body}>
          {Array.isArray(showingVideos) &&
            showingVideos.slice(0, 2).map((video, index) => {
              return (
                <div key={index}>
                  <div
                    className={styles.videoWrapper}
                    onClick={() => openVideo(video?.slug)}
                  >
                    <Image
                      className={styles.videoThumbnail}
                      src={video?.file?.thumbnailUrl}
                      alt={`video-${index}`}
                      width={320}
                      height={180}
                    />
                    <div className={styles.innerTool}>
                      <div className={styles.playWrapper}>
                        <div className={styles.play}></div>
                      </div>
                      <h2>{video?.description}</h2>
                    </div>
                  </div>
                  <div className={styles.description}>
                    <h2>{video?.description}</h2>
                  </div>
                </div>
              )
            })}
        </div>
        <div className={styles.slider}>
          <Slider>
            {Array.isArray(showingVideos) &&
              showingVideos.slice(2).map((video, index) => {
                return (
                  <div
                    className={styles.slide}
                    key={index}
                  >
                    <div
                      className={styles.videoThumbnailWrapper}
                      onClick={() => openVideo(video?.slug)}
                    >
                      <Image
                        className={styles.videoThumbnail}
                        src={video?.file?.thumbnailUrl}
                        alt={`video-${index}`}
                        width={320}
                        height={180}
                      />
                      <div className={styles.innerTool}>
                        <div className={styles.toolWrapper}>
                          <div className={styles.playWrapper}>
                            <div className={styles.play}></div>
                          </div>
                          <h2>{video?.description}</h2>
                        </div>
                      </div>
                    </div>
                    <div className={styles.videoDescription}>
                      <h2>{video?.description}</h2>
                    </div>
                  </div>
                )
              })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
