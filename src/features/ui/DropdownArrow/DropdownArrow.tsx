import type { ComponentPropsWithoutRef } from 'react'

import { classes } from '@/utils/css'

import styles from './DropdownArrow.module.scss'

interface Props extends ComponentPropsWithoutRef<'span'> {
  open?: boolean
}

export const DropdownArrow = ({ open, className, ...props }: Props) => {
  return (
    <span
      className={classes(styles.arrow, className)}
      data-open={open}
      {...props}
    />
  )
}
