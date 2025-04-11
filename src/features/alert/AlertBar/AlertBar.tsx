import { type ComponentProps, Fragment } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import '@/features/links'
import { DatoLink } from '@/features/links'

import styles from './AlertBar.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.AlertBarFragment | null | undefined
}

export const AlertBar = ({ data, ...props }: Props) => {
  if (data?.isActive) {
    return (
      <section
        className={styles.container}
        data-alert
        {...props}
      >
        <div className={styles.text}>
          <DatoStructuredText data={data?.alertText} />
          {data?.link && (
            <Fragment>
              <span className={styles.divider} />
              <DatoLink
                data={data.link}
                className={styles.link}
                iconType={'ARROW_RIGHT'}
              />
            </Fragment>
          )}
        </div>
      </section>
    )
  }
}
