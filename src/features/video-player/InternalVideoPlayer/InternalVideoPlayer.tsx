'use client'

import Image from 'next/image'
import {
  type ComponentProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
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
  inViewRoot,
  onPlay = () => {},
  onPause = () => {},
  ...props
}: Props) => {
  const { inView, ref } = useInView({
    threshold: 0,
    root: inViewRoot || undefined,
  })
  const [loaded, setLoaded] = useState(false)

  const [isPlaying, setPlaying] = useState(
    isBackgroundVideo ? true : false
  )

  // Force looping attribute, which is dropping off for some reason.
  const playerWrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!loaded || !playerProps?.loop) return
    const player =
      playerWrapperRef.current?.getElementsByTagName('mux-player')[0]
    player?.setAttribute('loop', 'true')
  }, [loaded, playerProps?.loop])

  // Props to enforce background behavior without any state updates in effects
  const backgroundVideoProps = isBackgroundVideo
    ? ({
        loop: true,
        muted: true,
        nohotkeys: true,
        autoPlay: 'muted',
      } as const)
    : ({} as const)

  // Determine paused behavior:
  // - Background video: driven by inView
  // - Regular video: driven by user play/pause events
  const isPaused = useMemo(() => {
    if (!inView) return true
    return isBackgroundVideo ? false : !isPlaying
  }, [isBackgroundVideo, inView, isPlaying])

  if (!data) return
  return (
    <div
      ref={ref}
      title={data.video.title || undefined}
      className={classes(styles.container, className)}
      data-loaded={loaded}
      data-in-view={inView}
      data-is-playing={!isPaused}
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
              if (!isBackgroundVideo) setPlaying(true)
              onPlay()
            }}
            onPause={() => {
              if (!isBackgroundVideo) setPlaying(false)
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
