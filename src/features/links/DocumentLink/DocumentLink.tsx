import Link from 'next/link'
import { type ComponentProps } from 'react'

import DatoLinkIcon, { type IconType } from '../LinkIcon/LinkIcon'

type Props = ComponentProps<'a'> & {
  data: Queries.DocumentLinkFragment | null | undefined
  iconType?: IconType
}

export const DocumentLink = ({ data, iconType, ...props }: Props) => {
  return (
    <Link
      href={`/api/doc/${data?.document?.id}/${data?.document?.filename}`}
      target={'_blank'}
      rel={'noopener'}
      {...props}
    >
      <span>{data?.linkText}</span>
      {iconType && <DatoLinkIcon iconType={iconType} />}
    </Link>
  )
}
