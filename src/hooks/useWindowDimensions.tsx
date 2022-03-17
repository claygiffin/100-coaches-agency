import { throttle } from 'lodash'
import { useCallback, useLayoutEffect, useState } from 'react'

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  const handleResize = useCallback(() => {
    window.requestAnimationFrame(() => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    })
  }, [])
  useLayoutEffect(handleResize, [handleResize])
  const handleThrottledResize = throttle(handleResize, 500)

  useLayoutEffect(() => {
    window.addEventListener('resize', handleThrottledResize, {
      passive: true,
    })
    return () => {
      window.removeEventListener('resize', handleThrottledResize)
    }
  }, [handleThrottledResize, handleResize])

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
