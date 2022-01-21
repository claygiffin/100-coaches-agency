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
  const columns = useMemo(() => {
    if (windowWidth < breakpoints.ms) {
      return 3
    }
    if (windowWidth < breakpoints.ml) {
      return 4
    } else {
      return 5
    }
  }, [windowWidth])
  const rows = useMemo(() => {
    const ar = windowHeight / windowWidth
    return Math.ceil(ar * columns)
  }, [windowWidth, windowHeight])
  const totalCoaches = columns * rows
  const shuffledNumbers = useMemo(() => {
    return shuffle([...Array(totalCoaches).keys()])
  }, [totalCoaches])

  const coachesSubset = useMemo(
    () => sampleSize(coaches.nodes, totalCoaches),
    [totalCoaches]
  )

  const [animationIndex, setAnimationIndex] = useState(0)
  const [inView, setInView] = useState(false)

  const containerRef = useRef<HTMLDivElement | null>(null)

  const requestRunning = useRef(false)
  const handleScroll = useCallback(() => {
    if (!requestRunning.current) {
      window.requestAnimationFrame(() => {
        const pos =
          containerRef.current?.getBoundingClientRect().bottom || 0
        const height =
          containerRef.current?.getBoundingClientRect().height || 0
        const windowHeight = window.innerHeight
        const ratio = (windowHeight - pos + height) / height
        setAnimationIndex(clamp(ratio * totalCoaches, 0, totalCoaches))
        requestRunning.current = false
      })
      requestRunning.current = true
    }
  }, [])
  useLayoutEffect(handleScroll, [handleScroll])

  const scrollObserver = new IntersectionObserver(
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

  useEffect(() => {
    if (containerRef.current) {
      scrollObserver.observe(containerRef.current)
    }
    return () => {
      scrollObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const backgroundOpacity = useMemo(() => {
    return Math.min((animationIndex / totalCoaches) * 1.5, 1)
  }, [animationIndex, totalCoaches])

  const containerStyle = css`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    ${!inView &&
    css`
      visibility: hidden;
    `}
  `
  const outerWrapperStyle = css`
    max-width: 100vw;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    &:before {
      content: '';
      ${absoluteFill};
      background: #fff;
      opacity: ${backgroundOpacity};
    }
  `
  const gridWrapperStyle = css`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${rows}, auto);
    grid-gap: 4px;
  `
  return (
    <div css={containerStyle} ref={containerRef}>
      <div css={outerWrapperStyle}>
        <div css={gridWrapperStyle}>
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
