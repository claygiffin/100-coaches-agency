import { css } from '@emotion/react'
import { clamp } from 'lodash'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { useWindowHeight } from '../hooks/useWindowDimensions'
import { absoluteFill } from '../theme/mixins'
import { breakpoints } from '../theme/variables'
import ShapeColumn from './HomePromiseColumn'

const HomePromiseBackground = () => {
  const windowHeight = useWindowHeight()
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
    if (containerWidth < breakpoints.ml) {
      return 4
    } else {
      return 5
    }
  }, [containerWidth])

  const rows = useMemo(() => {
    const ar = containerHeight / containerWidth || 0
    return Math.ceil(ar * columns * 2)
  }, [containerHeight, containerWidth])

  const [offset, setOffset] = useState(0)

  const requestRunning = useRef(false)
  const handleSetOffset = useCallback(() => {
    if (!requestRunning.current) {
      window.requestAnimationFrame(() => {
        const containerPos =
          parallaxRef.current?.getBoundingClientRect().y || 0
        const containerHeight =
          parallaxRef.current?.getBoundingClientRect().height || 0
        const dist =
          containerPos + containerHeight / 2 - windowHeight / 2
        const ratio = dist / windowHeight
        setOffset(ratio)
        requestRunning.current = false
      })
      requestRunning.current = true
    }
  }, [])
  useLayoutEffect(handleSetOffset, [handleSetOffset])

  const observer = new IntersectionObserver(
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

  useLayoutEffect(() => {
    if (parallaxRef.current) {
      observer.observe(parallaxRef.current)
    }
    return () => {
      observer.disconnect()
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
  useEffect(() => {
    console.log(offset - 1)
  }, [offset])
  const lineWidth = columnPosition.two - columnPosition.one
  const lineHeight = Math.abs(offset - 1) * 125

  const containerStyle = css`
    ${absoluteFill}
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: var(--gutter-xlg);
    padding: 0 var(--gutter-mlg);
    box-sizing: border-box;
    overflow: hidden;
    > div {
      &:nth-last-of-type(odd) {
        --translate-factor: 75;
      }
      &:nth-last-of-type(even) {
        --translate-factor: 200;
      }
    }
  `
  return (
    <div css={containerStyle} ref={setRefs}>
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
        columnPosition={(pos: number) =>
          setColumnPosition({ ...columnPosition, one: pos })
        }
      />
      <ShapeColumn
        rows={rows}
        offset={offset}
        brightCircle
        brightenPosition={(position: { top: number; left: number }) =>
          setBrightenPosition(position)
        }
        columnPosition={(pos: number) =>
          setColumnPosition({ ...columnPosition, two: pos })
        }
      />
      {
        <svg
          viewBox={`0 0 ${lineWidth} ${lineHeight}`}
          style={{
            zIndex: 4,
            position: 'absolute',
            overflow: 'visible',
            top: `${brightenPosition.top}px`,
            left: `${columnPosition.one + brightenPosition.left}px`,
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            transform: `translate3d(0, calc(${
              offset - 1
            }px * 200), 0) `,
          }}
        >
          <polygon
            points={`0,0 ${lineWidth},${lineHeight}`}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="100"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: clamp(offset * 200 + 50, 50, 100),
            }}
          />
        </svg>
      }
    </div>
  )
}

export default HomePromiseBackground
