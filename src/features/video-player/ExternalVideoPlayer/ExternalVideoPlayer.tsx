'use client'

import type { ComponentProps } from 'react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'
import type { ReactPlayerProps } from 'react-player/dist/types'

import { classes } from '@/utils'

import { VideoPlayIcon } from '../VideoPlayIcon/VideoPlayIcon'
import styles from './ExternalVideoPlayer.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.ExternalVideoFileFragment | null | undefined
  playerProps?: ReactPlayerProps
  onPlay?: () => void
  onPause?: () => void
  inViewRoot?: HTMLElement
}

export const ExternalVideoPlayer = ({
  data,
  playerProps,
  className,
  inViewRoot,
  onPlay = () => {},
  onPause = () => {},
  ...props
}: Props) => {
  const { inView, ref } = useInView({
    threshold: inViewRoot ? 0.75 : 0,
    root: inViewRoot || undefined,
  })
  const [isPlaying, setPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  if (!data) return
  return (
    <div
      className={classes(styles.container, className)}
      style={{
        '--width': data.width,
        '--height': data.height,
      }}
      data-has-played={hasPlayed}
      data-is-playing={inView && isPlaying}
      ref={ref}
      {...props}
    >
      <ReactPlayer
        src={data.url || undefined}
        className={styles.player}
        width={'100%'}
        height={'100%'}
        light={data.thumbnailUrl}
        onClickPreview={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false)
          onPause()
        }}
        onPlay={() => {
          setPlaying(true)
          setHasPlayed(true)
          onPlay()
        }}
        playing={inView && isPlaying}
        controls={true}
        {...playerProps}
      />
      <VideoPlayIcon className={styles.playIcon} />
    </div>
  )
}
