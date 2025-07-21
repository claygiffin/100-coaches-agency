'use client'

import type { ComponentProps } from 'react'

import type { IconType } from '../LinkIcon/LinkIcon'
import Link from 'next/link'

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
    <Link href={data?.href || ''} {...props}>{data?.linkText}</Link>
  )
}
