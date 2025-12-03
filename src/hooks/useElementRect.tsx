'use client'

import { debounce } from 'lodash'
import { type RefObject, useRef, useSyncExternalStore } from 'react'

type Rect = { width: number | undefined; height: number | undefined }
type ElementRef = RefObject<HTMLElement | null>

// A stable object for "no size yet"
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

  const debouncedRef = useRef<ReturnType<typeof debounce> | null>(null)
  const lastRectRef = useRef<Rect>(UNDEFINED_RECT)

  // Keeps track of the element we’re observing so we can rewire when ref.current changes
  const observedElRef = useRef<HTMLElement | null>(null)
  const roRef = useRef<ResizeObserver | null>(null)
  const stopWatchRef = useRef<number | null>(null)

  const attachObservers = (
    el: HTMLElement,
    onStoreChange: () => void
  ) => {
    if (!isBrowser) return
    // Lazily build the debounced notifier once
    if (!debouncedRef.current) {
      debouncedRef.current = debounce(() => onStoreChange(), debounceMs)
    }
    const debouncedNotify = debouncedRef.current
    const rafNotify = () =>
      window.requestAnimationFrame(() => debouncedNotify())

    // ResizeObserver
    const ro = new ResizeObserver(() => rafNotify())
    ro.observe(el)
    roRef.current = ro
    observedElRef.current = el

    // Orientation changes can affect layout
    const orientationHandler = () => rafNotify()
    window.addEventListener('orientationchange', orientationHandler, {
      passive: true,
    })

    // Immediate first read (not debounced) so the first measured size renders
    window.requestAnimationFrame(onStoreChange)

    // Return a small disposer for the non-RO listener
    return () => {
      window.removeEventListener(
        'orientationchange',
        orientationHandler
      )
    }
  }

  const detachObservers = () => {
    roRef.current?.disconnect()
    roRef.current = null
    observedElRef.current = null
  }

  const subscribe = (onStoreChange: () => void) => {
    if (!isBrowser) return () => {}

    // Function to (re)wire observers when the node behind the ref changes
    const rewire = () => {
      const el = targetRef.current
      if (el === observedElRef.current) return
      // Element changed: detach old, attach new (if any)
      detachObservers()
      if (el) {
        // attach returns a disposer for orientation listener
        disposer = attachObservers(el, onStoreChange) || null
      }
    }

    // Keep an eye on ref.current changes using a light rAF watcher.
    // This avoids needing state in the component while still catching late mounts or swaps.
    let disposer: (() => void) | null = null
    const watch = () => {
      rewire()
      stopWatchRef.current = window.requestAnimationFrame(watch)
    }
    stopWatchRef.current = window.requestAnimationFrame(watch)

    // Unsubscribe
    return () => {
      if (stopWatchRef.current != null) {
        window.cancelAnimationFrame(stopWatchRef.current)
        stopWatchRef.current = null
      }
      disposer?.()
      detachObservers()
    }
  }

  const getSnapshot = (): Rect => {
    const el = targetRef.current
    if (!isBrowser || !el) {
      // Keep identity stable before we have a node
      return lastRectRef.current === UNDEFINED_RECT
        ? lastRectRef.current
        : (lastRectRef.current = UNDEFINED_RECT)
    }

    const { width, height } = el.getBoundingClientRect()
    const prev = lastRectRef.current
    if (prev.width === width && prev.height === height) {
      return prev // same reference -> no re-render
    }
    const next: Rect = { width, height }
    lastRectRef.current = next
    return next
  }

  const getServerSnapshot = (): Rect => lastRectRef.current

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

// Convenience helpers: now ONLY accept object refs
export const useElementHeight = (el: ElementRef) =>
  useElementRect(el).height
export const useElementWidth = (el: ElementRef) =>
  useElementRect(el).width
