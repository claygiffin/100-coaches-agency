'use client'

import { type ComponentProps, useEffect, useId } from 'react'

type Props = ComponentProps<'div'> & {
  data: Queries.HubspotFormEmbedFragment
}

export const HubspotFormEmbed = ({ data, ...props }: Props) => {
  const targetId = useId()
  useEffect(() => {
    const script = document.createElement('script')
    const scriptSrc = 'https://js.hsforms.net/forms/embed/v2.js'
    script.src = scriptSrc
    document.head.appendChild(script)
    script.onload = () => {
      window.hbspt.forms.create({
        portalId: data.portalId,
        formId: data.formId,
        region: data.region,
        target: `#${targetId}`,
      })
    }

    return () => {
      document.querySelector(`script[src="${scriptSrc}"]`)?.remove()
    }
  }, [data, targetId])
  return (
    <div
      id={targetId}
      {...props}
    />
  )
}
