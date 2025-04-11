import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon, { type IconType } from '../LinkIcon/LinkIcon'

export type FormLinkProps = ComponentProps<'a'> & {
  data: Queries.FormLinkFragment | null | undefined
  iconType?: IconType
}

export const FormLink = ({
  data,
  iconType,
  ...props
}: FormLinkProps) => {
  return (
    <Link
      href={`/forms/${data?.form?.slug}`}
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
