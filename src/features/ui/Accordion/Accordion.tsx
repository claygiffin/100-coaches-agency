import { type ComponentProps } from 'react'

import { classes } from '@/utils'

import styles from './Accordion.module.scss'
import { AccordionItem } from './AccordionItem/AccordionItem'

type Props = ComponentProps<'ul'> & {
  data: Queries.AccordionFragment
  headingLevel?: 2 | 3
}

export const Accordion = ({
  data,
  headingLevel,
  className,
  ...props
}: Props) => {
  return (
    <ul
      className={classes(styles.accordion, className)}
      {...props}
    >
      {data.items.map(item => (
        <AccordionItem
          data={item}
          key={item.id}
          headingLevel={headingLevel}
        />
      ))}
    </ul>
  )
}
