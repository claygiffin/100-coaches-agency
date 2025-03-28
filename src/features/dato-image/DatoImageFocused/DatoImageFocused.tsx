'use client'

import { useLayoutEffect, useRef, useState } from 'react'

import {
  DatoImage,
  type DatoImagePropTypes,
} from '@/features/dato-image'
import { useElementRect } from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './DatoImageFocused.module.scss'

type Props = DatoImagePropTypes & {
  aspectRatio?: number
  focalPoint: { x: number; y: number } | undefined | null
}

export const DatoImageFocused = ({
  data,
  aspectRatio,
  focalPoint,
  className,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { width, height } = useElementRect(ref.current)

  const [objectPosition, setObjectPosition] = useState<
    { x: string; y: string } | undefined
  >()

  useLayoutEffect(() => {
    const originalAspectRatio = data?.aspectRatio || 0
    const containerAR = (width && height && width / height) || 0
    let trueFP = undefined as { x: number; y: number } | undefined
    if (aspectRatio) {
      const fpRatioX = aspectRatio / originalAspectRatio
      const fpRatioY = originalAspectRatio / aspectRatio
      const getFP = (ratio: number, fp: number) => {
        if (ratio < 1) {
          if (fp < ratio / 2 || 1 - fp < ratio / 2) {
            return fp / ratio
          } else {
            return 0.5
          }
        } else {
          return fp
        }
      }
      if (fpRatioX && focalPoint) {
        trueFP = {
          x: getFP(fpRatioX, focalPoint.x),
          y: getFP(fpRatioY, focalPoint.y),
        }
      }
    } else {
      trueFP = focalPoint || undefined
    }
    const ar = aspectRatio || originalAspectRatio
    const ratioX = ar / containerAR
    const ratioY = containerAR / ar
    const getPosition = (ratio: number, fp: number) => {
      const position = (fp - 0.5) * (ratio / (ratio - 1)) + 0.5
      return ratio > 1 ? Math.max(Math.min(position, 1), 0) : 0.5
    }
    if (ratioX && ratioY && trueFP) {
      setObjectPosition({
        x: getPosition(ratioX, trueFP?.x) * 100 + '%',
        y: getPosition(ratioY, trueFP?.y) * 100 + '%',
      })
    }
  }, [aspectRatio, focalPoint, data, width, height])

  return (
    <DatoImage
      data={data}
      ref={ref}
      objectPosition={
        objectPosition && `${objectPosition?.x} ${objectPosition?.y}`
      }
      className={classes(styles.image, className)}
      {...props}
    />
  )
}
