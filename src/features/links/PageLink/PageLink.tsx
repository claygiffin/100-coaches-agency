import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon, { type IconType } from '../LinkIcon/LinkIcon'

export type PageLinkProps = ComponentProps<'a'> & {
  data: Queries.PageLinkFragment | null | undefined
  iconType?: IconType
  searchParam?: {
    field: string
    value: string
  }
}

export const PageLink = ({
  data,
  iconType,
  searchParam,
  ...props
}: PageLinkProps) => {
  const getSlug = () => {
    switch (data?.page?.__typename) {
      case 'HomePageRecord':
        return '/'
      case 'CoachCategoryRecord':
        return `/coaches/${data.page.slug}/`
      default:
        return !!searchParam
          ? `/${data?.page?.slug + '?' + searchParam?.field + '=' + searchParam?.value}`
          : `/${data?.page?.slug}/`
    }
  }
  return (
    <Link
      href={getSlug()}
      scroll={true}
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
