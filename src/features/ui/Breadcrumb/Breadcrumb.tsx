import Link from 'next/link'
import { type ComponentProps, Fragment } from 'react'

import { classes } from '@/utils'

import styles from './Breadcrumb.module.scss'

type Props = ComponentProps<'div'> & {
  trail: Array<{ title: string; path: string }>
}

export const Breadcrumb = ({ trail, className, ...props }: Props) => {
  return (
    <div
      className={classes(styles.container, className)}
      {...props}
    >
      {trail.map((link, i, array) => (
        <Fragment key={i}>
          <Link
            className={styles.link}
            href={link.path}
          >
            {link.title}
          </Link>
          {i < array.length - 1 && <span className={styles.divider} />}
        </Fragment>
      ))}
    </div>
  )
}
