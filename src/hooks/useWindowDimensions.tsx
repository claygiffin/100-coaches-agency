'use client'

import { debounce } from 'lodash'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

export const useWindowDimensions = () => {
  const isBrowser = typeof window !== `undefined`

  const [windowDimensions, setWindowDimensions] = useState<{
    width: undefined | number
    height: undefined | number
  }>({
    width: undefined,
    height: undefined,
  })

  useLayoutEffect(() => {
    if (isBrowser) {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [isBrowser])

  const handleResize = useCallback(() => {
    if (isBrowser) {
      window.requestAnimationFrame(() => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      })
    }
  }, [isBrowser])

  const handleThrottledResize = useRef(
    debounce(handleResize, 500)
  ).current

  useEffect(() => {
    window.addEventListener('resize', handleThrottledResize, {
      passive: true,
    })
    return () => {
      handleThrottledResize.cancel()
      window.removeEventListener('resize', handleThrottledResize)
    }
  }, [handleThrottledResize])

  return windowDimensions
}

export const useWindowWidth = () => {
  const { width } = useWindowDimensions()
  return width
}

export const useWindowHeight = () => {
  const { height } = useWindowDimensions()
  return height
}
