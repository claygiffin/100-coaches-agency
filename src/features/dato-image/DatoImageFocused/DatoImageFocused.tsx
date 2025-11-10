'use client'

import { useMemo, useRef } from 'react'

import {
  DatoImage,
  type DatoImagePropTypes,
} from '@/features/dato-image'
import { useElementRect } from '@/hooks'
import { classes } from '@/utils'

import styles from './DatoImageFocused.module.scss'

type Props = DatoImagePropTypes & {
  aspectRatio?: number
  focalPoint: { x: number; y: number } | null | undefined
}

// clamp + round to avoid sub-pixel drift feeding the RO loop
const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n)
const round4 = (n: number) => Math.round(n * 10000) / 10000

export const DatoImageFocused = ({
  data,
  aspectRatio,
  focalPoint,
  className,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { width, height } = useElementRect(ref)

  const objectPosition = useMemo(() => {
    if (!data?.aspectRatio || !width || !height) return undefined

    const originalAR = data.aspectRatio
    const containerAR = width / height

    // Determine the focal point in the target aspect ratio
    let trueFP: { x: number; y: number } | undefined
    if (aspectRatio && focalPoint) {
      const fpRatioX = aspectRatio / originalAR
      const fpRatioY = originalAR / aspectRatio

      const remap = (ratio: number, fp: number) => {
        if (ratio < 1) {
          // When target AR is narrower than original, remap edge cases
          if (fp < ratio / 2 || 1 - fp < ratio / 2) {
            return fp / ratio
          }
          return 0.5
        }
        return fp
      }

      trueFP = {
        x: remap(fpRatioX, focalPoint.x),
        y: remap(fpRatioY, focalPoint.y),
      }
    } else {
      trueFP = focalPoint ?? undefined
    }

    if (!trueFP) return undefined

    // Compute object-position percentages
    const ar = aspectRatio ?? originalAR
    const ratioX = ar / containerAR
    const ratioY = containerAR / ar

    const position = (ratio: number, fp: number) => {
      if (ratio <= 1) return 0.5
      const pos = (fp - 0.5) * (ratio / (ratio - 1)) + 0.5
      // clamp + round to avoid micro-changes that retrigger RO
      return round4(clamp01(pos))
    }

    const x = position(ratioX, trueFP.x) * 100
    const y = position(ratioY, trueFP.y) * 100

    return `${x}% ${y}%`
  }, [aspectRatio, focalPoint, data?.aspectRatio, width, height])

  return (
    <DatoImage
      data={data}
      ref={ref}
      objectPosition={objectPosition}
      className={classes(styles.image, className)}
      {...props}
    />
  )
}
