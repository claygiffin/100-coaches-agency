'use client'

import Script from 'next/script'
import { useEffect } from 'react'

import styles from './HubspotForm.module.scss'

interface Props {
  portalId: string
  formId: string
  region: string
}

export const HubspotForm = ({ portalId, formId, region }: Props) => {
  useEffect(() => {
    if (window.hbspt && !!portalId && !!formId && !!region) {
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#hubspot-form-${formId}`,
      })
    }
  }, [portalId, formId, region])

  return (
    <div className={styles.hubspotFormContainer}>
      <Script
        src="//js-na2.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId,
              formId,
              region,
              target: `#hubspot-form-${formId}`,
            })
          }
        }}
      />
      <div id={`hubspot-form-${formId}`}></div>
    </div>
  )
}
