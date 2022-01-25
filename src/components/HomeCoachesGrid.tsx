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
import { absoluteFill } from '../theme/mixins'
import { breakpoints } from '../theme/variables'
import CoachThumbnail from './CoachThumbnail'

const HomeCoachesGrid = () => {
  const { coaches } = useStaticQuery(graphql`
    query {
      coaches: allDatoCmsCoach {
        nodes {
          photo {
            gatsbyImageData(
              width: 360
              aspectRatio: 1
              imgixParams: {
                q: 65
                fit: "facearea"
                facepad: 3
                sat: -100
              }
            )
            alt
          }
          name
          jobTitle
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

  const requestRunning = useRef(false)
  const handleScroll = useCallback(() => {
    if (!requestRunning.current) {
      window.requestAnimationFrame(() => {
        const pos =
          parallaxRef.current?.getBoundingClientRect().bottom || 0
        const height =
          parallaxRef.current?.getBoundingClientRect().height || 0
        const ratio = (windowHeight - pos + height) / height
        setOffset(ratio)
        requestRunning.current = false
      })
      requestRunning.current = true
    }
  }, [windowHeight])
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
            rootMargin: '15% 0%',
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

  const backgroundOpacity =
    Math.min((animationIndex / totalCoaches) * 1.5, 1) || 0

  const styles = {
    container: css`
      grid-row: 2 / 3;
      grid-column: 1 / -1;
      ${!inView &&
      css`
        visibility: hidden;
      `}
    `,
    outerWrapper: css`
      width: 100vw;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
    `,
    gridWrapper: css`
      position: relative;
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${rows}, auto);
      grid-gap: 4px;
    `,
    background: css`
      ${absoluteFill};
      background: #fff;
    `,
  }
  return (
    <div css={styles.container} ref={parallaxRef}>
      <div css={styles.outerWrapper}>
        <div
          css={styles.background}
          style={{ opacity: backgroundOpacity }}
        />
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
