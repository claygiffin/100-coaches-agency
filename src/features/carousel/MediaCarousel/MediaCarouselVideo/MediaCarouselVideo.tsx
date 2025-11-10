import { type ComponentProps, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import {
  ExternalVideoPlayer,
  InternalVideoPlayer,
} from '@/features/video-player'
import { useElementRect } from '@/hooks'
import { classes } from '@/utils'

import styles from './MediaCarouselVideo.module.scss'

type Props = Omit<ComponentProps<'div'>, 'children'> & {
  data:
    | Queries.InternalVideoFileFragment
    | Queries.ExternalVideoFileFragment
  isSingle: boolean
  setCarouselHeight: (height: number | undefined) => void
  setCurrentSlideWidth: (width: number | undefined) => void
  setSlideWidth?: (width: number | undefined) => void
}

export const MediaCarouselVideo = ({
  data,
  isSingle,
  setCarouselHeight,
  setCurrentSlideWidth,
  setSlideWidth,
  className,
  ...props
}: Props) => {
  const ref = useRef<HTMLElement>(null)
  const [rootRef, setRootRef] = useState<HTMLElement | null>(null)

  const { inView, ref: inViewRef } = useInView({
    rootMargin: '100% -50%',
    root: !isSingle ? rootRef?.parentElement?.parentElement : undefined,
  })
  const { height, width } = useElementRect(ref)

  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (inView) {
      setCarouselHeight(height)
      setCurrentSlideWidth(width)
    }
    if (setSlideWidth) {
      setSlideWidth(width)
    }
  }, [
    height,
    width,
    inView,
    setCarouselHeight,
    setCurrentSlideWidth,
    setSlideWidth,
  ])

  const getAspectRatio = () => {
    switch (data.__typename) {
      case 'VideoField': {
        return data.width / data.height
      }
      case 'VideoFileField': {
        return data.video.width / data.video.height
      }
      default:
        return 0
    }
  }

  const getOrientation = () => {
    if (getAspectRatio() > 1) {
      return 'LANDSCAPE'
    } else {
      return 'PORTRAIT'
    }
  }

  const getVideoComponent = () => {
    switch (data.__typename) {
      case 'VideoFileField':
        return (
          <InternalVideoPlayer
            data={data}
            className={classes(styles.video, styles.internal)}
            inViewRoot={
              !isSingle
                ? rootRef?.parentElement?.parentElement || undefined
                : undefined
            }
            onPlay={() => setHasPlayed(true)}
            style={{
              '--aspect-ratio': getAspectRatio(),
            }}
          />
        )
      case 'VideoField':
        return (
          <ExternalVideoPlayer
            className={classes(styles.video, styles.external)}
            data={data}
            onPlay={() => setHasPlayed(true)}
            inViewRoot={
              !isSingle
                ? rootRef?.parentElement?.parentElement || undefined
                : undefined
            }
            style={{
              '--aspect-ratio': getAspectRatio(),
            }}
          />
        )
      default:
        return null
    }
  }
  return (
    <figure
      className={classes(styles.container, className)}
      data-in-view={inView}
      data-has-played={hasPlayed}
      data-is-single={isSingle}
      data-orientation={getOrientation()}
      ref={node => {
        inViewRef(node)
        setRootRef(node)
        ref.current = node
      }}
      style={{ '--aspect-ratio': getAspectRatio() }}
      {...props}
    >
      {getVideoComponent()}
      {/* {title && (
        <figcaption className={styles.caption}>{title}</figcaption>
      )} */}
    </figure>
  )
}
