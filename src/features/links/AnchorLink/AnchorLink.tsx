'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon from '../LinkIcon/LinkIcon'

import type { IconType } from '../LinkIcon/LinkIcon'

export type AnchorLinkProps = ComponentProps<'a'> & {
  data: Queries.AnchorLinkFragment | null | undefined
  iconType?: IconType | null | undefined
}

export const AnchorLink = ({
  data,
  iconType,
  ...props
}: AnchorLinkProps) => {
  return (
    <Link
      href={data?.href || ''}
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
