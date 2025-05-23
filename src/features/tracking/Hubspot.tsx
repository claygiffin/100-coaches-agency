'use client'

import { useEffect } from 'react'

export const HubspotTracking = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    // Inject the external tracking script
    const script = document.createElement('script')
    const scriptSrc = 'https://js.hs-scripts.com/22194233.js'
    const scriptId = 'hs-script-loader'
    script.src = scriptSrc
    script.async = true
    script.defer = true
    script.id = scriptId
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      document.querySelector(`script[src="${scriptSrc}"]`)?.remove()
    }
  }, [])
  return null
}
