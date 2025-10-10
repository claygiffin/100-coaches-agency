import { type ComponentProps } from 'react'

import styles from './SectionDivider.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.SectionDividerFragment
}

export const SectionDivider = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <h2 className={styles.heading}>{data.heading}</h2>
    </section>
  )
}
