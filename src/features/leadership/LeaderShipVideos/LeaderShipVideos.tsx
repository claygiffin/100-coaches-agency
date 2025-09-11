'use client'

import { useRouter } from 'next/navigation'
import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
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

    const slugs = new Set(primary.map(item => item?.slug))
    const needed = 5 - primary.length
    const additional = fallback
      .filter(item => item && !slugs.has(item.slug))
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
                    <DatoImageFocused
                      data={video?.thumbnail.responsiveImage}
                      focalPoint={video?.thumbnail.focalPoint}
                      className={styles.videoThumbnail}
                    />
                    <div className={styles.innerTool}>
                      <div className={styles.playWrapper}>
                        <div className={styles.play}></div>
                      </div>
                      <h2>{video?.title}</h2>
                    </div>
                  </div>
                  <div className={styles.description}>
                    <h2>{video?.title}</h2>
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
                      <DatoImageFocused
                        data={video?.thumbnail.responsiveImage}
                        focalPoint={video?.thumbnail.focalPoint}
                        className={styles.videoThumbnail}
                      />
                      <div className={styles.innerTool}>
                        <div className={styles.toolWrapper}>
                          <div className={styles.playWrapper}>
                            <div className={styles.play}></div>
                          </div>
                          <h2>{video?.title}</h2>
                        </div>
                      </div>
                    </div>
                    <div className={styles.videoDescription}>
                      <h2>{video?.title}</h2>
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
