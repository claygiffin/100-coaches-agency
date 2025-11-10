'use client'

import {
  type ComponentProps,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react'

import { MarkdownHeading } from '@/features/ui'

import styles from './HomeIntro.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeIntroFragment | null | undefined
}

export const HomeIntro = ({ data }: Props) => {
  const [parallaxWrapRef, setParallaxWrapRef] =
    useState<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  const [offset, setOffset] = useState(0)
  const handleSetOffset = useCallback(() => {
    window.requestAnimationFrame(() => {
      const wrapPos = parallaxWrapRef?.getBoundingClientRect().y || 0
      const windowHeight = window.innerHeight
      const ratio = wrapPos / windowHeight
      setOffset(ratio)
    })
  }, [parallaxWrapRef])
  useLayoutEffect(handleSetOffset, [handleSetOffset])

  useLayoutEffect(() => {
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
    if (parallaxWrapRef) {
      observer?.observe(parallaxWrapRef)
    }
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', handleSetOffset)
    }
  }, [handleSetOffset, parallaxWrapRef])

  return (
    <section
      className={styles.section}
      data-in-view={inView}
    >
      <div
        className={styles.parallaxWrapper}
        ref={setParallaxWrapRef}
      >
        <div className={styles.parallaxInner}>
          <div
            className={styles.parallaxElement}
            style={{
              transform: `translate3d(0, calc(${offset * 200}px), 0)}`,
            }}
          >
            <MarkdownHeading
              className={styles.heading}
              as="h2"
              // style={
              //   inView ? { opacity: clamp(1.2 + offset * 2, 0, 1) } : {}
              // }
            >
              {data?.introHeading || ''}
            </MarkdownHeading>
          </div>
        </div>
      </div>
    </section>
  )
}
