import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { clamp, sampleSize, shuffle } from 'lodash'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { breakpoints } from '../theme/variables'
import CoachThumbnail from './HomeCoachThumbnail'

const HomeCoachesGrid = () => {
  const { coaches } = useStaticQuery(graphql`
    query {
      coaches: allDatoCmsCoach {
        nodes {
          ...CoachFragment
        }
      }
    }
  `)

  const { width: windowWidth, height: windowHeight } =
    useWindowDimensions()

  const parallaxRef = useRef<HTMLDivElement | null>(null)

  const columns = useMemo(() => {
    if (windowWidth < breakpoints.ms) {
      return 3
    } else if (windowWidth < breakpoints.m) {
      return 4
    } else {
      return 5
    }
  }, [windowWidth])

  const rows = useMemo(() => {
    const ar = windowHeight / windowWidth || 0
    return Math.ceil(ar * columns)
  }, [windowHeight, windowWidth, columns])

  const totalCoaches = columns * rows

  const shuffledNumbers = useMemo(() => {
    if (totalCoaches) {
      return shuffle([...Array(totalCoaches).keys()])
    } else return []
  }, [totalCoaches])

  const coachesSubset = useMemo(
    () => sampleSize(coaches.nodes, totalCoaches),
    [totalCoaches, coaches.nodes]
  )

  const [offset, setOffset] = useState(0)
  const animationIndex = clamp(offset * totalCoaches, 0, totalCoaches)
  const [inView, setInView] = useState(false)

  const handleScroll = useCallback(() => {
    window.requestAnimationFrame(() => {
      const windowHeight = window.innerHeight
      const pos =
        parallaxRef.current?.getBoundingClientRect().bottom || 0
      const height =
        parallaxRef.current?.getBoundingClientRect().height || 0
      const ratio = (windowHeight - pos + height) / height
      setOffset(ratio)
    })
  }, [])
  useLayoutEffect(handleScroll, [handleScroll])

  const scrollObserver =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setInView(true)
                window.addEventListener('scroll', handleScroll, {
                  passive: true,
                })
              } else {
                setInView(false)
                window.removeEventListener('scroll', handleScroll)
              }
            })
          },
          {
            root: null,
            rootMargin: '10% 0%',
          }
        )
      : null

  useEffect(() => {
    if (parallaxRef.current) {
      scrollObserver?.observe(parallaxRef.current)
    }
    return () => {
      scrollObserver?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const styles = {
    container: css`
      grid-row: 2 / 3;
      grid-column: 1 / -1;
      z-index: 1;
    `,
    outerWrapper: css`
      width: 100vw;
      overflow: hidden;
      position: fixed;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    `,
    gridWrapper: css`
      position: relative;
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${rows}, auto);
      grid-gap: 4px;
      ${!inView &&
      css`
        display: none;
      `}
    `,
  }
  return (
    <div css={styles.container} ref={parallaxRef}>
      <div css={styles.outerWrapper}>
        <div css={styles.gridWrapper}>
          {coachesSubset.map((coach: any, i: number) => (
            <CoachThumbnail
              coach={coach}
              key={i}
              animated={shuffledNumbers[i] < animationIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeCoachesGrid
