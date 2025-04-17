'use client'

import {
  type ComponentProps,
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import '@/features/links'
import { DatoLink } from '@/features/links'
import { useElementHeight } from '@/hooks/useElementRect'

import styles from './AlertBar.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.AlertBarFragment | null | undefined
}

export const AlertBar = ({ data, ...props }: Props) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const height = useElementHeight(ref)

  const [scrolledUp, setScrolledUp] = useState(data?.isActive)
  const prevPos = useRef(0)
  const handleScroll = useCallback(() => {
    window.requestAnimationFrame(() => {
      const currentScroll = window.scrollY
      const scrollDiff = currentScroll - prevPos.current

      const thresholdTop = 100
      const thresholdScroll = 100
      if (currentScroll < thresholdTop) {
        setScrolledUp(true)
      } else if (scrollDiff < -thresholdScroll) {
        setScrolledUp(true)
        prevPos.current = currentScroll
      } else if (scrollDiff > thresholdScroll) {
        setScrolledUp(false)
        prevPos.current = currentScroll
      }
    })
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--alert-height',
      `${height}px`
    )
    return () => {
      document.documentElement.style.removeProperty('--alert-height')
    }
  }, [height])

  if (data?.isActive) {
    return (
      <section
        className={styles.container}
        style={{ '--height': height + 'px' }}
        data-alert
        data-ready={height !== undefined}
        data-scrolled-up={scrolledUp}
        {...props}
      >
        <div
          className={styles.inner}
          ref={node => setRef(node)}
        >
          <div className={styles.text}>
            <DatoStructuredText data={data?.alertText} />
            {data?.link && (
              <Fragment>
                <span className={styles.divider} />
                <DatoLink
                  data={data.link}
                  className={styles.link}
                  iconType={'ARROW_RIGHT'}
                />
              </Fragment>
            )}
          </div>
        </div>
      </section>
    )
  }
}
