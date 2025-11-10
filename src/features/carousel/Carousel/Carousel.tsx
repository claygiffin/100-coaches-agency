'use client'

import throttle from 'lodash/throttle'
import {
  type ComponentProps,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import { createPortal } from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'

import { useElementWidth } from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './Carousel.module.scss'
import {
  CarouselNav,
  type NavVariantOptions,
} from './CarouselNav/CarouselNav'

interface Props extends ComponentProps<'div'> {
  children: ReactNode
  navContainer?: RefObject<HTMLElement | null>
  navClass?: string
  scrollAreaClass?: string
  contentClass?: string
  navVariant?: NavVariantOptions
  snap?: boolean
  navLink?: ReactNode
  slideCount: number | undefined
}

export const Carousel = ({
  children,
  navContainer,
  scrollAreaClass,
  contentClass,
  navClass,
  navVariant = 'OVERLAY',
  snap,
  navLink,
  slideCount,
  className,
  ...props
}: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderRef, setSliderRef] = useState<HTMLDivElement | null>(
    null
  )
  const scrollWidthRef = useRef<HTMLDivElement>(null)

  const containerWidth = useElementWidth(containerRef) || 0
  const contentWidth = useElementWidth(contentRef) || 0
  const scrollWidth = useElementWidth(scrollWidthRef) || 0
  const outerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    smoothscroll.polyfill()
    requestAnimationFrame(() =>
      outerRef.current?.setAttribute('data-loaded', 'true')
    )
  }, [])

  const getScrollSnapshot = () => {
    if (!contentRef.current || !sliderRef) return 0
    return (
      contentRef.current.getBoundingClientRect().x -
      sliderRef.getBoundingClientRect().x
    )
  }

  const subscribeScroll = (onChange: () => void) => {
    if (!sliderRef) return () => {}

    // throttle notifications; do NOT set state
    const notify = throttle(() => {
      // just notify React that snapshot may have changed
      onChange()
    }, 50)

    sliderRef.addEventListener('scroll', notify, { passive: true })
    // window resize/orientation can also affect layout
    window.addEventListener('resize', notify, { passive: true })
    window.addEventListener('orientationchange', notify, {
      passive: true,
    })

    return () => {
      sliderRef.removeEventListener('scroll', notify)
      window.removeEventListener('resize', notify)
      window.removeEventListener('orientationchange', notify)
      notify.cancel()
    }
  }

  const scrollPos = useSyncExternalStore(
    subscribeScroll,
    getScrollSnapshot,
    () => 0
  )

  const handleScrollBack = () => {
    sliderRef?.scrollBy({
      top: 0,
      left: -scrollWidth,
      behavior: 'smooth',
    })
  }
  const handleScrollForward = () => {
    sliderRef?.scrollBy({
      top: 0,
      left: scrollWidth,
      behavior: 'smooth',
    })
  }

  const [navPortalEl, setNavPortalEl] = useState<HTMLElement | null>(
    null
  )
  const navVisible = sliderRef && containerWidth < contentWidth - 20

  const navPortalTarget = navContainer?.current || navPortalEl

  return (
    <div
      className={classes(styles.outer, className)}
      data-visible={navVisible}
      data-variant={navVariant}
      ref={outerRef}
      {...props}
    >
      {!navContainer && (
        <div
          data-label="nav container"
          ref={setNavPortalEl}
        />
      )}
      {navVisible &&
        navPortalTarget &&
        createPortal(
          <CarouselNav
            navLink={navLink}
            className={navClass}
            onClickBack={handleScrollBack}
            backDisabled={scrollPos >= -10}
            onClickForward={handleScrollForward}
            forwardDisabled={
              containerWidth - scrollPos >= contentWidth - 10
            }
            navVariant={navVariant}
          />,
          navPortalTarget
        )}
      <div
        className={styles.scrollWidth}
        ref={scrollWidthRef}
      />
      <div
        className={styles.slider}
        data-snap={snap}
      >
        <div
          className={classes(styles.scrollArea, scrollAreaClass)}
          ref={node => {
            setSliderRef(node)
            containerRef.current = node
          }}
        >
          <div
            className={classes(styles.content, contentClass)}
            style={{ '--slide-count': slideCount }}
            ref={contentRef}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
