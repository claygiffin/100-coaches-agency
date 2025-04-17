import Image from 'next/image'
import { type ComponentProps } from 'react'

import { DatoImage } from '@/features/dato-image'

import styles from './Company.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.CompanyFragment | null | undefined
}

export const Company = ({ data, ...props }: Props) => {
  const { name, icon } = data || {}
  const renderIcon = () => {
    switch (icon?.format) {
      case 'svg': {
        return (
          <Image
            src={icon?.url}
            alt={icon?.alt || `${name}`}
            width={icon?.width || undefined}
            height={icon?.height || undefined}
          />
        )
      }
      default: {
        return (
          <DatoImage
            data={icon?.responsiveImage}
            sizes={`15rem`}
          />
        )
      }
    }
  }
  return (
    <div
      className={styles.company}
      style={{
        '--ar': (data?.icon.width || 0) / (data?.icon.height || 0),
      }}
      {...props}
    >
      {renderIcon()}
    </div>
  )
}
