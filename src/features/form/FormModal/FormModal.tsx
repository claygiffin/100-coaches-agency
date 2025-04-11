import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'

import { Form } from '../Form/Form'
import styles from './FormModal.module.scss'

type Props = ComponentProps<'article'> & {
  data: Queries.FormModalFragment | null | undefined
  variant: 'PAGE' | 'MODAL' | 'EMBED'
}

export const FormModal = ({ data, variant, ...props }: Props) => {
  return (
    <article
      data-variant={variant}
      className={styles.article}
      {...props}
    >
      <MarkdownHeading
        as="h1"
        className={styles.heading}
      >
        {data?.heading || ''}
      </MarkdownHeading>
      <div className={styles.intro}>
        <DatoStructuredText data={data?.intro} />
      </div>
      <Form data={data?.form} />
    </article>
  )
}
