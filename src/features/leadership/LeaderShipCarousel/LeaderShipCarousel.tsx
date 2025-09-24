'use client'

import React, {
  Children,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import styles from './LeaderShipCarousel.module.scss'

// Responsive counts config
export interface ShowNumbersConfig {
  desktop?: number // >=900px
  tablet?: number // 540px–899px
  mobile?: number // <540px
}

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  /** Slides to render. Usually <Image />, <div>, etc. */
  children: ReactNode
  /** Start position. */
  initialIndex?: number
  /** Called whenever the active slide changes. */
  onIndexChange?: (index: number) => void
  /** Accessible label for the slider region. */
  ariaLabel?: string
  /** Hide built‑in nav buttons & render your own. */
  hideNavButtons?: boolean
  /** Number of fully visible items in the viewport ("showNumbers"). Default 1 (classic carousel). */
  showNumbers?: number | ShowNumbersConfig
  /** Width of the peeked next item as % of container width. Default 10. */
  peekPercent?: number
}

export function Slider({
  children,
  initialIndex = 0,
  onIndexChange,
  ariaLabel = 'Content slider',
  hideNavButtons = false,
  showNumbers = { desktop: 3, tablet: 2, mobile: 1 },
  peekPercent = 7,
  className,
  ...rest
}: SliderProps) {
  const slidesArray = useMemo(
    () => Children.toArray(children),
    [children]
  )
  const slideCount = slidesArray.length

  // Ensure sensible values
  const getVisibleFromWidth = useCallback(
    (w: number): number => {
      const cfg: ShowNumbersConfig =
        typeof showNumbers === 'number'
          ? {
              desktop: showNumbers,
              tablet: showNumbers,
              mobile: showNumbers,
            }
          : showNumbers || {}
      const d = cfg.desktop ?? cfg.tablet ?? cfg.mobile ?? 1
      const t = cfg.tablet ?? d
      const m = cfg.mobile ?? t
      if (w < 540) return Math.max(1, Math.floor(m))
      if (w >= 900) return Math.max(1, Math.floor(d))
      return Math.max(1, Math.floor(t))
    },
    [showNumbers]
  )

  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const update = () =>
      setVisibleCount(getVisibleFromWidth(window.innerWidth))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [getVisibleFromWidth])

  const peek = Math.max(0, Math.min(40, peekPercent)) // cap at 40% for sanity

  // Each *full* item width as % of container.
  const fullItemPct = (100 - peek - 3 * visibleCount) / visibleCount

  // Max starting index so we never scroll beyond last full item group.
  // If fewer slides than visibleCount, clamp to 0.
  const maxIndex = Math.max(0, slideCount - visibleCount)

  const clamp = useCallback(
    (n: number) => Math.max(0, Math.min(n, maxIndex)),
    [maxIndex]
  )

  const [index, setIndex] = useState(() => clamp(initialIndex))

  const goTo = useCallback(
    (next: number) => {
      const clamped = clamp(next)
      setIndex(clamped)
      onIndexChange?.(clamped)
    },
    [clamp, onIndexChange]
  )

  const prev = useCallback(() => goTo(index - 1), [index, goTo])
  const next = useCallback(() => goTo(index + 1), [index, goTo])

  // Move the track so that the `index`th slide is flush left.
  const peekAdj = (peek - 3) / 2 // from user formula
  const translatePct =
    index === 0
      ? peek - peekAdj
      : `-${(index - 1) * (fullItemPct + 3) + (fullItemPct - peekAdj)}`

  const trackStyle = {
    transform: `translateX(${translatePct}%)`,
  } as React.CSSProperties

  const atStart = index === 0
  const atEnd = index >= maxIndex

  return (
    <div
      {...rest}
      className={[styles.container, className]
        .filter(Boolean)
        .join(' ')}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={trackStyle}
          role="group"
          aria-live="polite"
        >
          {slidesArray.map((slide, i) => {
            const isActive = i >= index && i < index + visibleCount // fully visible range
            const isPeek = i === index + visibleCount || i === index - 1 // preview slides
            const basisPct = fullItemPct
            return (
              <div
                key={i}
                className={[
                  styles.slide,
                  isPeek ? styles.peek : '',
                  isActive ? styles.active : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ flex: `0 0 ${basisPct}%` }}
                aria-hidden={!isActive && !isPeek}
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${slideCount}`}
              >
                {slide}
              </div>
            )
          })}
        </div>
      </div>
      {!hideNavButtons && (
        <>
          <button
            type="button"
            className={[
              styles.navButton,
              styles.prev,
              atStart ? styles.disabled : '',
            ].join(' ')}
            onClick={prev}
            aria-label="Previous slide"
            disabled={atStart}
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            className={[
              styles.navButton,
              styles.next,
              atEnd ? styles.disabled : '',
            ].join(' ')}
            onClick={next}
            aria-label="Next slide"
            disabled={atEnd}
          >
            <ArrowRightIcon />
          </button>
        </>
      )}
    </div>
  )
}

/* --- Inline SVG arrow icons --- */
export function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="36"
      height="36"
      {...props}
    >
      <polyline
        points="13 8 9 12 13 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(2) translate(-6, -6)"
      />
    </svg>
  )
}

export function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="36"
      height="36"
      {...props}
    >
      <polyline
        points="11 8 15 12 11 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(2) translate(-6, -6)"
      />
    </svg>
  )
}
