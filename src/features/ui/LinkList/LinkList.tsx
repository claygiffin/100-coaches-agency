import { type ComponentProps } from 'react'

import { DatoLink } from '@/features/links'
import { classes } from '@/utils'

import styles from './LinkList.module.scss'

type Props = ComponentProps<'ul'> & {
  data: Queries.LinkListFragment
}

export const LinkList = ({ data, className, ...props }: Props) => {
  return (
    <ul
      aria-label={data.heading || undefined}
      className={classes(styles.list, className)}
      {...props}
    >
      {data.links.map(link => (
        <li key={link.id}>
          <DatoLink data={link} />
        </li>
      ))}
    </ul>
  )
}
