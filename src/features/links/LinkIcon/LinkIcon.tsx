import type { ComponentPropsWithoutRef } from 'react'
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc'

import { classes } from '@/utils/css'

import styles from './LinkIcon.module.scss'

export type IconType = 'ARROW_RIGHT' | 'ARROW_LEFT' | 'DOWNLOAD'

interface Props extends ComponentPropsWithoutRef<'svg'> {
  iconType: IconType
}

const DatoLinkIcon = ({ iconType, ...props }: Props) => {
  switch (iconType) {
    case 'ARROW_RIGHT':
      return (
        <div
          className={styles.container}
          arrow-direction={'ARROW_RIGHT'}
        >
          <VscArrowRight {...props} />
        </div>
      )
    case 'ARROW_LEFT':
      return (
        <div
          className={styles.container}
          arrow-direction={'ARROW_LEFT'}
        >
          <VscArrowLeft {...props} />
        </div>
      )
    case 'DOWNLOAD':
      return (
        <svg
          viewBox="0 0 13 16"
          className={classes(styles.icon, styles.download)}
          {...props}
        >
          <path d="M10.5 11.5V13.5H2.5V11.5" />
          <g>
            <path d="M9 7L6.5 9.5L4 7" />
            <path d="M6.47485 8.5V1.96447" />
          </g>
        </svg>
      )
  }
}

export default DatoLinkIcon
