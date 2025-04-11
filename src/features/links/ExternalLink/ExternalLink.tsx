import Link from 'next/link'
import { type ComponentProps } from 'react'

import DatoLinkIcon, { type IconType } from '../LinkIcon/LinkIcon'

type Props = ComponentProps<'a'> & {
  data: Queries.ExternalLinkFragment | null | undefined
  iconType?: IconType
}

export const ExternalLink = ({ data, iconType, ...props }: Props) => {
  return (
    <Link
      href={data?.url || ''}
      target={'_blank'}
      rel={'noreferrer'}
      {...props}
    >
      {iconType === 'ARROW_LEFT' && (
        <DatoLinkIcon iconType="ARROW_LEFT" />
      )}
      <span>{data?.linkText}</span>
      {iconType && iconType !== 'ARROW_LEFT' && (
        <DatoLinkIcon iconType={iconType} />
      )}
    </Link>
  )
}
