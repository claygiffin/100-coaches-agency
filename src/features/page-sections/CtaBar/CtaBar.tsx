import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'

import styles from './CtaBar.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.CtaBarFragment
}

export const CtaBar = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.text}>
        <DatoStructuredText data={data.text} />
      </div>
      <div className={styles.linkArea}>
        <DatoLink
          className={styles.link}
          data={data.cta}
        />
      </div>
    </section>
  )
}
