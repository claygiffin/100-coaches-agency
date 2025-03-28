import type { ComponentPropsWithoutRef } from 'react'

import { classes } from '@/utils/css'

import styles from './LinkIcon.module.scss'

interface Props extends ComponentPropsWithoutRef<'svg'> {
  iconType: 'ARROW' | 'EXTERNAL' | 'LIGHTBOX' | 'DOWNLOAD' | 'VIDEO'
}

const DatoLinkIcon = ({ iconType, ...props }: Props) => {
  switch (iconType) {
    case 'ARROW':
    case 'LIGHTBOX':
    case 'EXTERNAL':
    case 'DOWNLOAD':
      return (
        <div className={styles.container}>
          <svg
            viewBox="0 0 7 16"
            className={classes(styles.icon, styles.arrow)}
            {...props}
          >
            <path d="M1 3L6 8L1 13" />
          </svg>
        </div>
      )
    case 'VIDEO': {
      return (
        <div className={styles.videoContainer}>
          <svg
            viewBox="0 0 42 24"
            className={classes(styles.icon, styles.video)}
          >
            <path d="M18 6.80385L27 12L18 17.1962L18 6.80385Z" />
            <rect
              x="1"
              y="1"
              width="40"
              height="22"
              rx="11"
            />
          </svg>
        </div>
      )
    }
    // case 'EXTERNAL':
    //   return (
    //     <svg
    //       viewBox="0 0 16 16"
    //       className={[styles.icon, styles.external]}
    //       {...props}
    //     >
    //       <path d="M10.5 10.5V13.5H2.5V5.5H5.5" />
    //       <g>
    //         <path d="M9.5 3L13 3L13 6.5" />
    //         <path d="M12 4L8 8" />
    //       </g>
    //     </svg>
    //   )
    // case 'DOWNLOAD':
    //   return (
    //     <svg
    //       viewBox="0 0 13 16"
    //       className={[styles.icon, styles.download]}
    //       {...props}
    //     >
    //       <path d="M10.5 11.5V13.5H2.5V11.5" />
    //       <g>
    //         <path d="M9 7L6.5 9.5L4 7" />
    //         <path d="M6.47485 8.5V1.96447" />
    //       </g>
    //     </svg>
    //   )
  }
}

export default DatoLinkIcon
