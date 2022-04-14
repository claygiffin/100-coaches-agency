import { SerializedStyles, css } from '@emotion/react'
import { uniqueId } from 'lodash'
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill } from '../theme/mixins'
import { colors } from '../theme/variables'
import { breakpoints } from '../theme/variables'
import ShapeColumn from './HomePromiseColumn'

type Props = {
  innerCss?: SerializedStyles
}

const HomePromiseBackground = ({ innerCss, ...props }: Props) => {
  const clipId = useMemo(() => uniqueId('clipPath--'), [])

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
      clip-path: url(#${clipId});
      background: linear-gradient(
        to top right,
        ${colors.goldShade3},
        ${colors.goldShade2},
        ${colors.goldShade1},
        ${colors.gold}
      );
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
    <div css={styles.container} ref={setRefs} {...props}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <div css={[styles.innerContainer, innerCss]}>
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
          brightCircle={containerWidth >= breakpoints.ms}
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
          brightCircle={containerWidth >= breakpoints.ms}
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
        {containerWidth >= breakpoints.ms && (
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
                strokeDashoffset: offset * 200 + 75 > 60 ? 100 : 50,
                transition:
                  'opacity 100ms ease, stroke-dashoffset 2000ms ease',
                opacity: offset * 200 + 75 > 85 ? 0 : 1,
              }}
            />
          </svg>
        )}
      </div>
    </div>
  )
}

export default HomePromiseBackground
