import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon, { type IconType } from '../LinkIcon/LinkIcon'

export type ArticleLinkProps = ComponentProps<'a'> & {
  data: Queries.ArticleLinkFragment | null | undefined
  iconType?: IconType
}

export const ArticleLink = ({
  data,
  iconType,
  ...props
}: ArticleLinkProps) => {
  return (
    <Link
      href={`/${data?.article.slug}`}
      scroll={false}
      {...props}
    >
      {iconType === 'ARROW_LEFT' && (
        <DatoLinkIcon iconType="ARROW_LEFT" />
      )}
      <span>{data?.linkText}</span>
      {iconType === 'ARROW_RIGHT' && (
        <DatoLinkIcon iconType="ARROW_RIGHT" />
      )}
    </Link>
  )
}
