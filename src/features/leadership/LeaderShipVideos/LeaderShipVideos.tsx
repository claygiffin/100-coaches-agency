'use client'

import Image from 'next/image'
import { type ComponentProps, useState } from 'react'

import { DatoLink } from '@/features/links'
import { Modal } from '@/features/modal'
import { getVideoEmbedUrl } from '@/lib/video-embed-link'

import { Slider } from '../index'
import styles from './LeaderShipVideos.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipVideosFragment | null | undefined
  videos: Queries.VideoFragment[] | null | undefined
}

export const LeaderShipVideos = ({ data, videos, ...props }: Props) => {
  const [selectedVideo, setSelectedVideo] =
    useState<Queries.VideoFragment | null>(null)

  const showingVideos = data?.videosItems?.length
    ? data?.videosItems
    : videos

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
                  <div className={styles.videoWrapper}>
                    <Image
                      className={styles.videoThumbnail}
                      src={video?.file?.thumbnailUrl}
                      alt={`video-${index}`}
                      width={320}
                      height={180}
                    />
                    <div className={styles.innerTool}>
                      <div className={styles.playWrapper}>
                        <div
                          className={styles.play}
                          onClick={() => setSelectedVideo(video)}
                        ></div>
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
                    <div className={styles.videoThumbnailWrapper}>
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
                            <div
                              className={styles.play}
                              onClick={() => setSelectedVideo(video)}
                            ></div>
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
      {Array.isArray(videos) && !!selectedVideo && (
        <Modal
          variant={'VIDEOLIGHTBOX'}
          onClose={() => setSelectedVideo(null)}
        >
          <div className={styles.videoPlayerContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                src={getVideoEmbedUrl(selectedVideo?.file?.url)}
              ></iframe>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
