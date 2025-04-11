import { type ComponentPropsWithoutRef } from 'react'

import { classes } from '@/utils/css'

import styles from './LoadingSpinner.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  color?: string
  speed?: number
  count?: number
}

export const LoadingSpinner = ({
  color = '#000',
  speed = 1200,
  count = 12,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={classes(styles.spinner, className)}
      {...props}
    >
      {[...new Array(count)].map((_, i) => {
        const radians = ((360 / count) * i * Math.PI) / 180
        return (
          <div
            key={i}
            style={{
              animationDelay: `${Math.round((i / count - 1) * speed * 100) / 100}ms`,
              top: `${Math.round((Math.sin(radians) * 50 + 50) * 100) / 100}%`,
              left: `${Math.round((Math.cos(radians) * 50 + 50) * 100) / 100}%`,
              '--speed': speed + 'ms',
              '--count': count,
              '--color': color,
            }}
          />
        )
      })}
    </div>
  )
}
