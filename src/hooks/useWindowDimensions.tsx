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
  const handleThrottledResize = throttle(handleResize, 300)

  useLayoutEffect(() => {
    // const keyboardTriggers = document.querySelectorAll(
    //   'input, select, textarea'
    // )
    window.addEventListener('resize', handleThrottledResize, {
      passive: true,
    })
    // keyboardTriggers.forEach(trigger => {
    //   trigger.addEventListener(
    //     'blur',
    //     () => setTimeout(handleResize, 100),
    //     {
    //       passive: true,
    //     }
    //   )
    // })
    return () => {
      window.removeEventListener('resize', handleThrottledResize)
      // keyboardTriggers.forEach(trigger => {
      //   trigger.removeEventListener('blur', () =>
      //     setTimeout(handleResize, 100)
      //   )
      // })
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
