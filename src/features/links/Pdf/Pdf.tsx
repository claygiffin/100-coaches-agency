import Link from 'next/link'
import { type ComponentProps } from 'react'

import DatoLinkIcon, { type IconType } from '../LinkIcon/LinkIcon'

type Props = ComponentProps<'a'> & {
  data: Queries.PdfFragment | null | undefined
  iconType?: IconType
}

export const Pdf = ({ data, iconType, ...props }: Props) => {
  return (
    <Link
      href={data?.pdf?.url || ''}
      target={'_blank'}
      rel={'noreferrer'}
      {...props}
    >
      {iconType === 'ARROW_LEFT' && (
        <DatoLinkIcon iconType="ARROW_LEFT" />
      )}
      <span>{data?.pdfLink || data?.pdf?.title}</span>
      {iconType && iconType !== 'ARROW_LEFT' && (
        <DatoLinkIcon iconType={iconType} />
      )}
    </Link>
  )
}
