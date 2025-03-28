'use client'

import { debounce } from 'lodash'
import { useLayoutEffect, useRef, useState } from 'react'

export const useElementRect = (element: HTMLElement | null) => {
  const [rect, setRect] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: undefined,
    height: undefined,
  })

  const entryDebouncer = useRef(
    debounce((entries: ResizeObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.borderBoxSize?.length) {
          setRect({
            width: entry.borderBoxSize[0].inlineSize,
            height: entry.borderBoxSize[0].blockSize,
          })
        } else if (entry.contentRect) {
          setRect({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          })
        }
      })
    }, 500)
  ).current

  useLayoutEffect(() => {
    setRect({
      width: element?.getBoundingClientRect().width,
      height: element?.getBoundingClientRect().height,
    })
    const resizeObserver = new ResizeObserver(entries =>
      entryDebouncer(entries)
    )
    if (element) {
      resizeObserver.observe(element)
    }
    return () => {
      entryDebouncer.cancel()
      resizeObserver.disconnect()
    }
  }, [element, entryDebouncer])

  return rect
}

export const useElementHeight = (element: HTMLElement | null) => {
  const { height } = useElementRect(element)
  return height
}

export const useElementWidth = (element: HTMLElement | null) => {
  const { width } = useElementRect(element)
  return width
}
