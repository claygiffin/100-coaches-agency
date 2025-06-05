'use client'

import throttle from 'lodash/throttle'
import {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useRef,
  useState,
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
  navContainer?: HTMLElement | null
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
  const [scrollPos, setScrollPos] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollWidthRef = useRef<HTMLDivElement>(null)

  const containerWidth = useElementWidth(sliderRef.current) || 0
  const contentWidth = useElementWidth(contentRef.current) || 0
  const scrollWidth = useElementWidth(scrollWidthRef.current) || 0

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    smoothscroll.polyfill()
    // Use loaded state so that carousel doesn't auto scroll to weird positions
    setLoaded(true)
    return () => {
      setLoaded(false)
    }
  }, [])

  useEffect(() => {
    const sliderRefCopy = sliderRef.current
    const scrollEffect = () => {
      if (contentRef.current && sliderRef.current) {
        setScrollPos(
          contentRef.current.getBoundingClientRect().x -
            sliderRef.current.getBoundingClientRect().x
        )
      }
    }
    const handleScroll = throttle(scrollEffect, 50)

    sliderRefCopy?.addEventListener('scroll', handleScroll)
    return () => {
      sliderRefCopy?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollBack = () => {
    sliderRef.current?.scrollBy({
      top: 0,
      left: -scrollWidth,
      behavior: 'smooth',
    })
  }
  const handleScrollForward = () => {
    sliderRef.current?.scrollBy({
      top: 0,
      left: scrollWidth,
      behavior: 'smooth',
    })
  }

  const navRef = useRef<HTMLDivElement | null>(null)
  const navVisible =
    sliderRef.current && containerWidth < contentWidth - 20

  const navPortalTarget = navContainer || navRef.current

  return (
    <div
      className={classes(styles.outer, className)}
      data-visible={navVisible}
      data-loaded={loaded}
      data-variant={navVariant}
      {...props}
    >
      {!navContainer && (
        <div
          data-label="nav container"
          ref={navRef}
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
          ref={sliderRef}
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
