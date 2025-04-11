import type { StructuredText } from 'datocms-structured-text-utils'

import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './PageIntro.module.scss'

type PropTypes = {
  heading: string | null | undefined
  body: StructuredText | null | undefined
}

export const PageIntro = ({ heading, body }: PropTypes) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.body}>
        <DatoStructuredText data={body} />
      </div>
    </section>
  )
}
