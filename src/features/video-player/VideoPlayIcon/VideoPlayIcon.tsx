import type { ComponentProps } from 'react'

import { classes } from '@/utils'

import styles from './VideoPlayIcon.module.scss'

export const VideoPlayIcon = ({
  className,
  ...props
}: ComponentProps<'svg'>) => {
  return (
    <svg
      className={classes(styles.icon, className)}
      viewBox="0 0 120 120"
      {...props}
    >
      <circle
        cx="60"
        cy="60"
        r="58.5"
        strokeWidth="3"
      />
      <path d="M47 34L87 60L47 86V34Z" />
    </svg>
  )
}
