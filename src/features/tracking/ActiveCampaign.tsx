'use client'

import { useEffect } from 'react'

type VgoFunction = {
  (command: string, ...args: unknown[]): void
  q?: unknown[][]
  l?: number
}

declare global {
  interface Window {
    vgo: VgoFunction
    visitorGlobalObjectAlias: string
  }
}

type Props = {
  accountId: string
}

export const ActiveCampaign = ({ accountId }: Props) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    // Avoid loading multiple times
    if (typeof window.vgo !== 'undefined') return

    // Set up the vgo function stub
    window.visitorGlobalObjectAlias = 'vgo'
    window.vgo = (command: string, ...args: unknown[]) => {
      window.vgo.q = window.vgo.q || []
      window.vgo.q.push([command, ...args])
    }
    window.vgo.l = Date.now()

    // Inject the external tracking script
    const script = document.createElement('script')
    const scriptSrc =
      'https://diffuser-cdn.app-us1.com/diffuser/diffuser.js'
    script.src = scriptSrc
    script.async = true
    document.head.appendChild(script)

    // Run commands after the script loads
    script.onload = () => {
      window.vgo('setAccount', accountId)
      window.vgo('setTrackByDefault', true)
      window.vgo('process')
    }

    // Cleanup on unmount
    return () => {
      document.querySelector(`script[src="${scriptSrc}"]`)?.remove()
    }
  }, [accountId])
  return null
}
