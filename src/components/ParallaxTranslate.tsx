import { SerializedStyles, css } from '@emotion/react'
import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

type ParallaxTranslateProps = {
  children: React.ReactNode
  disable?: boolean
  animateOnce?: boolean
  fromBack?: boolean
  wrapperCss?: SerializedStyles
  parallaxElementCss?: SerializedStyles
  innerCss?: SerializedStyles
  as?: React.ElementType
}

const ParallaxTranslate = ({
  children,
  disable,
  animateOnce,
  fromBack,
  wrapperCss,
  parallaxElementCss,
  innerCss,
  as = 'div',
  ...props
}: ParallaxTranslateProps) => {
  const Element = as

  const parallaxWrapRef = useRef<HTMLElement | null>(null)
  const parallaxRef = useRef<HTMLDivElement | null>(null)

  const [offset, setOffset] = useState(0)

  const requestRunning = useRef(false)
  const handleSetOffset = useCallback(() => {
    if (!requestRunning.current && !disable) {
      window.requestAnimationFrame(() => {
        const wrapPos =
          parallaxWrapRef.current?.getBoundingClientRect().y || 0
        const windowHeight = window.innerHeight
        const distFromCenter = wrapPos - windowHeight / 3
        const linearCalc = distFromCenter / windowHeight
        setOffset(linearCalc)
        requestRunning.current = false
      })
      requestRunning.current = true
    }
  }, [disable])
  useLayoutEffect(handleSetOffset, [handleSetOffset])

  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setAnimatedIn(true)
                window.addEventListener('scroll', handleSetOffset, {
                  passive: true,
                })
              } else {
                !animateOnce && setAnimatedIn(false)
                window.removeEventListener('scroll', handleSetOffset)
              }
            })
          },
          {
            root: null,
            rootMargin: '0% 0%',
          }
        )
      : null

  useLayoutEffect(() => {
    if (!disable && parallaxRef.current && parallaxWrapRef.current) {
      observer?.observe(parallaxRef.current)
      observer?.observe(parallaxWrapRef.current)
    }
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', handleSetOffset)
    }
  })

  const [animatedIn, setAnimatedIn] = useState(false)

  const styles = {
    parallax: css`
      position: relative;
      overflow: visible;
      display: flex;
      --translate-factor: 100;
    `,
    parallaxElement: css`
      position: relative;
      transform: translate3d(0, 0, 0);
      will-change: transform;
      display: flex;
    `,
    animateIn: css`
      position: relative;
      transition-property: opacity, transform;
      transition-duration: 500ms;
      transition-timing-function: cubic-bezier(0.25, 0.75, 0.25, 1);
      opacity: 0;
      transform: ${fromBack
        ? `scale3d(0.75, 0.75, 1)`
        : `scale3d(1.2, 1.2, 1)`};
      ${animatedIn &&
      css`
        opacity: 1;
        transform: scale3d(1, 1, 1);
        transition-duration: 1000ms;
      `}
    `,
  }
  return (
    <Element
      ref={parallaxWrapRef}
      css={[styles.parallax, wrapperCss]}
      {...props}
    >
      <div
        css={[styles.parallaxElement, parallaxElementCss]}
        style={{
          transform: `translate3d(0, calc(${offset}px * var(--translate-factor, 100)), 0)`,
        }}
        ref={parallaxRef}
      >
        <div css={[styles.animateIn, innerCss]}>{children}</div>
      </div>
    </Element>
  )
}

export default ParallaxTranslate
