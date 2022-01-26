import { css } from '@emotion/react'
import { clamp } from 'lodash'
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill } from '../theme/mixins'
import { breakpoints } from '../theme/variables'
import ShapeColumn from './HomePromiseColumn'

const HomePromiseBackground = () => {
  const [containerRef, setContainerRef] = useState(null)
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const setRefs = useCallback(node => {
    setContainerRef(node)
    parallaxRef.current = node
  }, [])

  const { width: containerWidth, height: containerHeight } =
    useElementRect(containerRef)

  const columns = useMemo(() => {
    if (containerWidth < breakpoints.ms) {
      return 3
    }
    if (containerWidth < breakpoints.m) {
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

  const requestRunning = useRef(false)
  const handleSetOffset = useCallback(() => {
    if (!requestRunning.current) {
      window.requestAnimationFrame(() => {
        const windowHeight = window.innerHeight
        const containerPos =
          parallaxRef.current?.getBoundingClientRect().y || 0
        // const containerHeight =
        //   parallaxRef.current?.getBoundingClientRect().height || 0
        // const distCenter =
        //   containerPos + containerHeight / 2 - windowHeight / 2
        // const ratioCenter = distCenter / windowHeight
        setOffset(containerPos / windowHeight)
        requestRunning.current = false
      })
      requestRunning.current = true
    }
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

  const translateFactors = useMemo(() => {
    if (containerWidth < breakpoints.ms) {
      return [100, 50]
    } else {
      return [200, 75]
    }
  }, [containerWidth])
  const lineWidth = Math.abs(columnPosition.two - columnPosition.one)
  const lineHeight =
    Math.abs(offset - 1) * (translateFactors[0] - translateFactors[1])

  const styles = {
    container: css`
      ${absoluteFill}
      overflow: hidden;
    `,
    innerContainer: css`
      padding: 0 var(--gutter-mlg);
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      grid-gap: calc(3rem + 5vw);
      --translate-factor: ${translateFactors[0]};
      > div {
        &:nth-last-of-type(odd) {
          --translate-factor: ${translateFactors[1]};
        }
      }
    `,
    line: css`
      z-index: 4;
      position: absolute;
      overflow: visible;
    `,
  }
  return (
    <div css={styles.container} ref={setRefs}>
      <div css={styles.innerContainer}>
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
          brightCircle
          columnPosition={useCallback(
            (pos: number) =>
              setColumnPosition(prevState => ({
                ...prevState,
                one: pos,
              })),
            []
          )}
        />
        <ShapeColumn
          rows={rows}
          offset={offset}
          brightCircle
          brightenPosition={useCallback(
            (position: { top: number; left: number }) =>
              setBrightenPosition(position),
            []
          )}
          columnPosition={useCallback(
            (pos: number) =>
              setColumnPosition(prevState => ({
                ...prevState,
                two: pos,
              })),
            []
          )}
        />
        {
          <svg
            viewBox={`0 0 ${lineWidth} ${lineHeight}`}
            css={styles.line}
            style={{
              top: `${brightenPosition.top}px`,
              left: `${columnPosition.one + brightenPosition.left}px`,
              width: `${lineWidth}px`,
              height: `${lineHeight}px`,
              transform: `translate3d(0, calc(${
                offset - 1
              }px * var(--translate-factor)), 0) `,
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
                strokeDashoffset: clamp(offset * 200 + 75, 50, 100),
                transition:
                  'opacity 100ms ease, stroke-dashoffset 150ms ease',
                opacity: offset * 200 + 75 > 85 ? 0 : 1,
              }}
            />
          </svg>
        }
      </div>
    </div>
  )
}

export default HomePromiseBackground
