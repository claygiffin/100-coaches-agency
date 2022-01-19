import { throttle } from 'lodash'
import { useEffect, useState } from 'react'

const isBrowser = typeof window !== `undefined`

const getWindowDimensions = () => {
  return isBrowser
    ? {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : { width: 0, height: 0 }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      window.requestAnimationFrame(() => {
        setWindowDimensions(getWindowDimensions())
      })
    }

    const keyboardTriggers = document.querySelectorAll(
      'input, select, textarea'
    )

    const handleThrottledResize = throttle(handleResize, 300)

    if (isBrowser) {
      window.addEventListener('resize', handleThrottledResize, {
        passive: true,
      })
      window.addEventListener('load', handleResize, { passive: true })
      keyboardTriggers.forEach(trigger => {
        trigger.addEventListener(
          'blur',
          () => setTimeout(handleResize, 100),
          {
            passive: true,
          }
        )
      })
    }
    return () => {
      window.removeEventListener('resize', handleThrottledResize)
      window.removeEventListener('load', handleResize)
      keyboardTriggers.forEach(trigger => {
        trigger.removeEventListener('blur', () =>
          setTimeout(handleResize, 100)
        )
      })
    }
  }, [])

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
