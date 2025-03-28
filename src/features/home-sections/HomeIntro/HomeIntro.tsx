'use client'

import { clamp } from 'lodash'
import {
  type ComponentProps,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import styles from './HomeIntro.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeIntroFragment | null | undefined
}

export const HomeIntro = ({ data, ...props }: Props) => {
  const parallaxWrapRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  const [offset, setOffset] = useState(0)
  const handleSetOffset = useCallback(() => {
    window.requestAnimationFrame(() => {
      const wrapPos =
        parallaxWrapRef.current?.getBoundingClientRect().y || 0
      const windowHeight = window.innerHeight
      const ratio = wrapPos / windowHeight
      setOffset(ratio)
    })
  }, [])
  useLayoutEffect(handleSetOffset, [handleSetOffset])

  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setInView(true)
                window.addEventListener('scroll', handleSetOffset, {
                  passive: true,
                })
              } else {
                setInView(false)
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
    if (parallaxWrapRef.current) {
      observer?.observe(parallaxWrapRef.current)
    }
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', handleSetOffset)
    }
  })

  return (
    <section
      className={styles.section}
      data-in-view={inView}
    >
      <div
        className={styles.parallaxWrapper}
        ref={parallaxWrapRef}
      >
        <div className={styles.parallaxInner}>
          <div
            className={styles.parallaxElement}
            style={{
              transform: `translate3d(0, calc(${offset * 200}px), 0)}`,
            }}
          >
            <h2
              dangerouslySetInnerHTML={{
                __html: data?.introHeading || '',
              }}
              className={styles.heading}
              style={
                inView ? { opacity: clamp(1.2 + offset * 2, 0, 1) } : {}
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
