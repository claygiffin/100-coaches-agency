'use client'

import { useEffect } from 'react'

export const useEscKeyFunction = (fn: () => void) => {
  useEffect(() => {
    const escFunction = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault()
        fn()
      }
    }
    document.addEventListener('keydown', escFunction, false)
    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [fn])
}
