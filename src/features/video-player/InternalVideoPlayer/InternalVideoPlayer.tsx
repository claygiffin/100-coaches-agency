'use client'

import Image from 'next/image'
import { type ComponentProps, useEffect, useRef, useState } from 'react'
import {
  VideoPlayer as DatoVideoPlayer,
  type VideoPlayerProps,
} from 'react-datocms'
import { useInView } from 'react-intersection-observer'

import { classes } from '@/utils'

import styles from './InternalVideoPlayer.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.InternalVideoFileFragment | null | undefined
  playerProps?: VideoPlayerProps
  positionerClass?: string
  isBackgroundVideo?: boolean
  variant?: 'CONTENT_BLOCK' | 'TOUR'
  inViewRoot?: HTMLElement
  onPlay?: () => void
  onPause?: () => void
}

export const InternalVideoPlayer = ({
  data,
  playerProps,
  className,
  positionerClass,
  isBackgroundVideo,
  variant,
  inViewRoot,
  onPlay = () => {},
  onPause = () => {},
  ...props
}: Props) => {
  const getThreshold = () => {
    switch (variant) {
      case 'CONTENT_BLOCK':
        return 0.75
      case 'TOUR':
        return 0.25
      default:
        return 0
    }
  }
  const { inView, ref } = useInView({
    threshold: getThreshold(),
    root: inViewRoot || undefined,
  })
  const [loaded, setLoaded] = useState(false)

  const [isPlaying, setPlaying] = useState(
    isBackgroundVideo ? true : false
  )

  const timeout = useRef<NodeJS.Timeout | undefined>(undefined)

  // Force looping attribute, which is dropping off for some reason.
  const playerWrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (loaded && !!playerProps?.loop) {
      const player =
        playerWrapperRef.current?.getElementsByTagName('mux-player')[0]
      player?.setAttribute('loop', 'true')
    }
  }, [loaded, playerProps])

  useEffect(() => {
    if (!inView) {
      timeout.current = setTimeout(() => setPlaying(false), 300)
    } else {
      clearTimeout(timeout.current)
      if (isBackgroundVideo) setPlaying(true)
    }
    return () => {
      clearTimeout(timeout.current)
    }
  }, [inView, isBackgroundVideo])

  const backgroundVideoProps = isBackgroundVideo
    ? {
        loop: true,
        muted: true,
        nohotkeys: true,
        autoPlay: 'muted',
      }
    : {}

  if (!data) return
  return (
    <div
      ref={ref}
      title={data.video.title || undefined}
      className={classes(styles.container, className)}
      data-loaded={loaded}
      data-in-view={inView}
      data-is-playing={isPlaying}
      data-variant={variant}
      data-background-video={isBackgroundVideo}
      {...props}
    >
      <div className={classes(styles.positioner, positionerClass)}>
        {data.video.thumbnailUrl && (
          <div className={styles.posterWrapper}>
            <Image
              className={styles.poster}
              src={data.video.thumbnailUrl + '?time=0'}
              width={data.video.width}
              height={data.video.height}
              alt=""
              sizes="5vw"
              quality={10}
              loading="eager"
              aria-hidden
              style={{ filter: 'blur(20px)' }}
              priority
            />
          </div>
        )}
        <div
          className={styles.playerWrapper}
          ref={playerWrapperRef}
        >
          <DatoVideoPlayer
            className={styles.player}
            data={data.video || undefined}
            paused={!isPlaying}
            preload
            onPlay={() => {
              setPlaying(true)
              onPlay()
            }}
            onPause={() => {
              setPlaying(false)
              onPause()
            }}
            onLoadedData={() => {
              setLoaded(true)
            }}
            thumbnailTime={0}
            {...backgroundVideoProps}
            {...playerProps}
          />
        </div>
      </div>
    </div>
  )
}
