import { type ComponentProps } from 'react'
import {
  Image as CSRImage,
  type ImagePropTypes,
  type ResponsiveImageType,
} from 'react-datocms'

import { classes } from '@/utils/css'

import styles from './DatoImage.module.scss'

export type DatoImagePropTypes = ComponentProps<'div'> &
  Omit<ImagePropTypes, 'data'> & {
    data: ResponsiveImageType | undefined | null
    breakpoints?: number[]
    alt?: string | null
  }

export const DatoImage = ({
  data,
  alt,
  className,
  breakpoints = [1440, 1260, 1080, 720, 540, 360, 180],
  ref,
  ...props
}: DatoImagePropTypes) => {
  if (data) {
    const srcSetCandidates = breakpoints.map(size => size / data.width)
    return (
      <CSRImage
        ref={ref}
        data={{ ...data, alt: alt || data.alt }}
        className={classes(styles.image, className)}
        layout="responsive"
        srcSetCandidates={srcSetCandidates}
        style={{
          position: 'var(--position, relative)' as any,
          width: '',
        }}
        {...props}
      />
    )
  }
}
