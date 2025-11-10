'use client'

import { debounce } from 'lodash'
import { useRef, useSyncExternalStore } from 'react'

type WinDims = { width: number | undefined; height: number | undefined }

export const useWindowDimensions = (): WinDims => {
  const isBrowser = typeof window !== 'undefined'

  // Cache the last snapshot so we can return the same object reference
  const lastSnapshotRef = useRef<WinDims>({
    width: undefined,
    height: undefined,
  })

  // Keep one debounced callback instance so subscribe/unsubscribe stays stable
  const debouncedRef = useRef<ReturnType<typeof debounce> | null>(null)

  const subscribe = (onStoreChange: () => void) => {
    if (!isBrowser) return () => {}

    if (!debouncedRef.current) {
      debouncedRef.current = debounce(onStoreChange, 500)
    }
    const notify = debouncedRef.current

    const handler = () => {
      // align to paint; then debounce
      window.requestAnimationFrame(() => notify())
    }

    window.addEventListener('resize', handler, { passive: true })
    window.addEventListener('orientationchange', handler, {
      passive: true,
    })

    return () => {
      window.removeEventListener('resize', handler)
      window.removeEventListener('orientationchange', handler)
      // keep the debounced fn instance; no cancel needed
    }
  }

  const getSnapshot = (): WinDims => {
    if (!isBrowser) return lastSnapshotRef.current

    const w = window.innerWidth
    const h = window.innerHeight
    const prev = lastSnapshotRef.current

    if (prev.width === w && prev.height === h) {
      // return SAME object reference when nothing changed
      return prev
    }

    const next = { width: w, height: h } as const
    lastSnapshotRef.current = next
    return next
  }

  // Must return a STABLE reference on the server
  const getServerSnapshot = (): WinDims => lastSnapshotRef.current

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export const useWindowWidth = () => useWindowDimensions().width
export const useWindowHeight = () => useWindowDimensions().height
