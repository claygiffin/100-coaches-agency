import { type ComponentProps } from 'react'

import { classes } from '@/utils'

import styles from './Flourish.module.scss'

type Props = ComponentProps<'div'> & {
  flip?: boolean
}

export const Flourish = ({ className, flip, ...props }: Props) => {
  return (
    <div
      className={classes(styles.flourish, className)}
      data-flip={flip || undefined}
      {...props}
    >
      <div />
    </div>
  )
}
