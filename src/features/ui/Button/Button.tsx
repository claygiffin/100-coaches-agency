import { type ComponentProps } from 'react'

import { CoachMenuLink, DatoLink } from '@/features/links'

import styles from './Button.module.scss'

type Props = ComponentProps<any> & {
  data: Queries.ButtonFragment
}

export const Button = ({ data, ...props }: Props) => {
  switch (data.button.__typename) {
    case 'ArticleLinkRecord':
    case 'DocumentLinkRecord':
    case 'ExternalLinkRecord':
    case 'FormLinkRecord':
    case 'PageLinkRecord':
      return (
        <DatoLink
          data={data.button}
          className={styles.button}
          {...props}
        />
      )
    case 'CoachMenuLinkRecord':
      return (
        <CoachMenuLink
          data={data.button}
          className={styles.button}
          {...props}
        />
      )
  }
}
