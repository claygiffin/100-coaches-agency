'use client'

import { debounce } from 'lodash'
import { type RefObject, useRef, useSyncExternalStore } from 'react'

type Rect = { width: number | undefined; height: number | undefined }
type ElementRef = RefObject<HTMLElement | null>

const UNDEFINED_RECT: Readonly<Rect> = Object.freeze({
  width: undefined,
  height: undefined,
})

type Options = {
  /** milliseconds to debounce resize notifications (default 250) */
  debounceMs?: number
}

export const useElementRect = (
  targetRef: ElementRef,
  opts?: Options
): Rect => {
  const debounceMs = opts?.debounceMs ?? 250

  const isBrowser =
    typeof window !== 'undefined' &&
    typeof ResizeObserver !== 'undefined'

  // Keeps the last emitted Rect object (identity-stable for “no change” fast path)
  const lastRectRef = useRef<Rect>(UNDEFINED_RECT)

  // Track the currently-observed element and its observers
  const observedElementRef = useRef<HTMLElement | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const watchRafIdRef = useRef<number | null>(null)

  // ---- Key change: make a single debounced notifier that calls the LATEST onStoreChange via a ref
  const latestStoreChangeRef = useRef<() => void>(() => {})
  const debouncedNotifyRef = useRef<ReturnType<typeof debounce> | null>(
    null
  )
  if (!debouncedNotifyRef.current) {
    debouncedNotifyRef.current = debounce(
      () => latestStoreChangeRef.current(),
      debounceMs
    )
  }

  const attachObservers = (el: HTMLElement) => {
    if (!isBrowser) return

    // Notify via rAF -> debounced -> latest onStoreChange
    const debouncedNotify = debouncedNotifyRef.current!
    const notifyOnNextFrame = () =>
      window.requestAnimationFrame(() => debouncedNotify())

    // ResizeObserver to catch content/layout-driven size changes
    const ro = new ResizeObserver(() => notifyOnNextFrame())
    ro.observe(el)
    resizeObserverRef.current = ro
    observedElementRef.current = el

    // Orientation changes can affect layout
    const handleOrientation = () => notifyOnNextFrame()
    window.addEventListener('orientationchange', handleOrientation, {
      passive: true,
    })

    // Immediate first read so the first measured size renders without waiting for RO/debounce
    window.requestAnimationFrame(() => latestStoreChangeRef.current())

    // Disposer for non-RO listener
    return () => {
      window.removeEventListener('orientationchange', handleOrientation)
    }
  }

  const detachObservers = () => {
    resizeObserverRef.current?.disconnect()
    resizeObserverRef.current = null
    observedElementRef.current = null
  }

  const subscribe = (onStoreChange: () => void) => {
    if (!isBrowser) return () => {}

    // Always keep the freshest notifier available to the debounced wrapper
    latestStoreChangeRef.current = onStoreChange

    // Rewire observers if the underlying node behind the ref changes
    const rewireIfNeeded = () => {
      const el = targetRef.current
      if (el === observedElementRef.current) return
      detachObservers()
      if (el) {
        disposer = attachObservers(el) || null
      }
    }

    // Lightweight watcher to notice ref.current changes without component state
    let disposer: (() => void) | null = null
    const tick = () => {
      rewireIfNeeded()
      watchRafIdRef.current = window.requestAnimationFrame(tick)
    }
    watchRafIdRef.current = window.requestAnimationFrame(tick)

    // Unsubscribe
    return () => {
      // Stop the watcher loop
      if (watchRafIdRef.current != null) {
        window.cancelAnimationFrame(watchRafIdRef.current)
        watchRafIdRef.current = null
      }
      // Remove event listeners and RO
      disposer?.()
      detachObservers()
      // Cancel any pending debounced notifications tied to the old subscription
      debouncedNotifyRef.current?.cancel()
    }
  }

  const getSnapshot = (): Rect => {
    const el = targetRef.current
    if (!isBrowser || !el) {
      // Preserve identity for “undefined size” so React can bail out of rerenders
      return lastRectRef.current === UNDEFINED_RECT
        ? lastRectRef.current
        : (lastRectRef.current = UNDEFINED_RECT)
    }

    const { width, height } = el.getBoundingClientRect()
    const prev = lastRectRef.current
    if (prev.width === width && prev.height === height) {
      return prev // same object => no render
    }
    const next: Rect = { width, height }
    lastRectRef.current = next
    return next
  }

  const getServerSnapshot = (): Rect => lastRectRef.current

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export const useElementHeight = (el: ElementRef) =>
  useElementRect(el).height
export const useElementWidth = (el: ElementRef) =>
  useElementRect(el).width
