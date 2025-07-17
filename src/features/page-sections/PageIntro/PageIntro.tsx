import type { StructuredText } from 'datocms-structured-text-utils'
import Image from 'next/image'

import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './PageIntro.module.scss'

type PropTypes = {
  logo?:
    | {
        url: Queries.FileField['url']
        title?: Queries.FileField['title']
        alt?: Queries.FileField['alt']
      }
    | null
    | undefined
  heading: string | null | undefined
  body: StructuredText | null | undefined
}

export const PageIntro = ({ heading, body, logo }: PropTypes) => {
  return (
    <section className={styles.section}>
      {logo && (
        <Image
          src={logo.url}
          alt={logo.alt || ''}
          title={logo.title || undefined}
          className={styles.logo}
        />
      )}
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.body}>
        <DatoStructuredText data={body} />
      </div>
    </section>
  )
}
