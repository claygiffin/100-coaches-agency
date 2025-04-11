'use client'

import {
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import variables from '@/theme/variables.module.scss'
import { classes } from '@/utils/css'

import { ShapeColumn } from '../HomePromiseColumn/HomePromiseColumn'
import styles from './HomePromiseBackground.module.scss'

type Props = {
  innerClassName?: string
}

export const HomePromiseBackground = ({
  innerClassName,
  ...props
}: Props) => {
  const clipId = useId()

  const [containerRef, setContainerRef] =
    useState<HTMLDivElement | null>(null)
  const parallaxRef = useRef<HTMLDivElement | null>(null)

  const containerWidth = useElementWidth(containerRef) || 0
  const containerHeight = useElementHeight(containerRef) || 0

  const columns = useMemo(() => {
    if (containerWidth < Number(variables.breakpoint_ms)) {
      return 3
    }
    if (containerWidth < Number(variables.breakpoint_m)) {
      return 4
    } else {
      return 5
    }
  }, [containerWidth])

  const rows = useMemo(() => {
    const ar = containerHeight / containerWidth || 0
    return Math.ceil(ar * columns * 2)
  }, [containerHeight, containerWidth, columns])

  const [offset, setOffset] = useState(0)

  const handleSetOffset = useCallback(() => {
    window.requestAnimationFrame(() => {
      const windowHeight = window.innerHeight
      const containerPos =
        parallaxRef.current?.getBoundingClientRect().y || 0
      setOffset(containerPos / windowHeight)
    })
  }, [])
  useLayoutEffect(handleSetOffset, [handleSetOffset])

  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                window.addEventListener('scroll', handleSetOffset, {
                  passive: true,
                })
              } else {
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
    if (parallaxRef.current) {
      observer?.observe(parallaxRef.current)
    }
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', handleSetOffset)
    }
  })

  const [brightenPosition, setBrightenPosition] = useState({
    top: 0,
    left: 0,
  })
  const [columnPosition, setColumnPosition] = useState({
    one: 0,
    two: 0,
  })

  const handleUpdateColumnPositionOne = useCallback(
    (position: number) => {
      setColumnPosition(prev => ({ ...prev, one: position }))
    },
    []
  )
  const handleUpdateColumnPositionTwo = useCallback(
    (position: number) => {
      setColumnPosition(prev => ({ ...prev, two: position }))
    },
    []
  )

  const translateFactors = () => {
    if (containerWidth < Number(variables.breakpoint_ms)) {
      return [100, 50]
    } else {
      return [200, 75]
    }
  }
  const lineWidth = Math.abs(columnPosition.two - columnPosition.one)
  const lineHeight =
    Math.abs(offset - 1) *
    (translateFactors()[0] - translateFactors()[1])

  return (
    <div
      className={styles.container}
      ref={node => {
        setContainerRef(node)
        parallaxRef.current = node
      }}
      data-brighten-position={`top: ${brightenPosition.top}, left: ${brightenPosition.left}`}
      style={{
        '--clip-id-url': `url(#${clipId})`,
        '--columns': columns,
        '--translate-factor-0': translateFactors()[0],
        '--translate-factor-1': translateFactors()[1],
      }}
      {...props}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${containerWidth},${0.02 * containerWidth} C${
                0.75 * containerWidth
              },${-0.0625 * containerWidth} ${0.435 * containerWidth},${
                0.16 * containerWidth
              } 0,${0.0875 * containerWidth} L0,${
                containerHeight - 0.02 * containerWidth
              } C${0.333 * containerWidth},${
                containerHeight - 0.2 * containerWidth
              } ${0.68 * containerWidth},${
                containerHeight + 0.06 * containerWidth
              } ${containerWidth},${
                containerHeight - 0.02 * containerWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={classes(styles.innerContainer, innerClassName)}>
        {[...Array(columns - 2)].map((_, i) => (
          <ShapeColumn
            key={i}
            rows={rows}
            startingIndex={i}
            offset={offset}
          />
        ))}
        <ShapeColumn
          rows={rows}
          offset={offset}
          brightCircle={
            containerWidth >= Number(variables.breakpoint_ms)
          }
          setColumnPosition={handleUpdateColumnPositionOne}
        />
        <ShapeColumn
          rows={rows}
          offset={offset}
          brightCircle={
            containerWidth >= Number(variables.breakpoint_ms)
          }
          setBrightenPosition={setBrightenPosition}
          setColumnPosition={handleUpdateColumnPositionTwo}
        />

        {containerWidth >= Number(variables.breakpoint_ms) && (
          <svg
            viewBox={`0 0 ${lineWidth} ${lineHeight}`}
            className={styles.line}
            data-column-one={columnPosition.one}
            data-column-two={columnPosition.two}
            style={{
              top: `${brightenPosition.top}px`,
              left: `${columnPosition.one + brightenPosition.left}px`,
              width: `${lineWidth}px`,
              height: `${lineHeight}px`,
              transform: `translate3d(0, calc(${
                offset - 1
              }px * var(--translate-factor)), 0)`,
            }}
          >
            <polygon
              points={`0,0 ${lineWidth},${lineHeight}`}
              strokeWidth="9"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="100"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: offset * 200 + 75 > 60 ? 100 : 50,
                transition:
                  'opacity 100ms ease, stroke-dashoffset 1500ms ease',
                opacity: offset * 200 + 75 > 85 ? 0 : 1,
              }}
            />
          </svg>
        )}
      </div>
    </div>
  )
}
