'use client'

import { type ComponentProps } from 'react'

import styles from './ArticlesVideos.module.scss'
import { DatoLink } from '@/features/links'
import { DatoStructuredText } from '@/features/dato-structured-text'

type Props = ComponentProps<'section'> & {
  data: Queries.ArticlesVideosFragment | null | undefined,
  videos: Queries.VideoFragment[] | null | undefined
}

export const ArticlesVideos = ({ data, videos, ...props }: Props) => {
  return (
    <section
      id='videos'
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.videosHeading}</h2>
        <span className={styles.headerLine}></span>
        <DatoLink
          data={data?.videosArchiveButton}
          className={styles.archiveButton}
          iconType={'ARROW_RIGHT'}
        />
      </div>
      <div>
        <div className={styles.body}>
          {
            Array.isArray(videos) && videos.slice(0, 2).map((video, index) => {
              return (
                <div>
                  <div className={styles.videoWrapper} key={index}>
                    <img 
                      className={styles.videoThumbnail}
                      src={video?.file?.thumbnailUrl} 
                      alt={`video-${index}`} 
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
            })
          }
        </div>
      </div>
    </section>
  )
}
