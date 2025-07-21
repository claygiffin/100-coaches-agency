'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

import type { IconType } from '../LinkIcon/LinkIcon'

export type AnchorLinkProps = ComponentProps<'a'> & {
  data: Queries.AnchorLinkFragment | null | undefined
  iconType?: IconType
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
      {data?.linkText}
    </Link>
  )
}
