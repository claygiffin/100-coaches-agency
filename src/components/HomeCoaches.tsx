import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { clamp } from 'lodash'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import HomeCoachesGrid from './HomeCoachesGrid'

const HomeCoaches = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        coachesHeading
      }
    }
  `)

  const parallaxWrapRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  const [offset, setOffset] = useState(0)
  const handleSetOffset = useCallback(() => {
    window.requestAnimationFrame(() => {
      const wrapPos =
        parallaxWrapRef.current?.getBoundingClientRect().y || 0
      const windowHeight = window.innerHeight
      const ratio = wrapPos / windowHeight
      setOffset(ratio)
    })
  }, [])
  useLayoutEffect(handleSetOffset, [handleSetOffset])

  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setInView(true)
                window.addEventListener('scroll', handleSetOffset, {
                  passive: true,
                })
              } else {
                setInView(false)
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
    if (parallaxWrapRef.current) {
      observer?.observe(parallaxWrapRef.current)
    }
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', handleSetOffset)
    }
  })

  const styles = {
    section: css`
      display: grid;
      background-color: #fff;
      grid-template-rows: 120vh 40vmax;
      grid-template-columns: 1fr;
      margin-top: -15vw;
      padding-top: 15vw;
    `,
    parallaxWrapper: css`
      grid-row: 1 / 3;
      grid-column: 1 / -1;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `,
    parallaxInner: css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      backface-visibility: hidden;
    `,
    parallaxElement: css`
      ${absoluteFill}
      ${baseGrid}
      align-items: center;
      justify-content: center;
      ${mq().s} {
        transform: none !important;
      }
    `,
    heading: css`
      color: #555;
      font-size: var(--fs-60);
      grid-column: 2 / -2;
      max-width: 25ch;
      text-align: center;
      justify-self: center;
      em {
        display: inline-block;
        font-style: normal;
        color: ${colors.goldShade1};
        ${mq().s} {
          display: inline;
        }
      }

      transition-property: opacity, transform;
      transition-duration: 500ms;
      transition-timing-function: cubic-bezier(0.25, 0.75, 0.25, 1);
      opacity: 0;
      transform: scale3d(0.75, 0.75, 1);

      ${inView &&
      css`
        opacity: 1;
        transform: scale3d(1, 1, 1);
        transition-duration: 1000ms;
      `}
    `,
  }

  return (
    <section css={styles.section}>
      <div css={styles.parallaxWrapper} ref={parallaxWrapRef}>
        <div css={styles.parallaxInner}>
          <div
            css={styles.parallaxElement}
            style={{
              transform: `translate3d(0, calc(${offset * 200}px), 0)`,
            }}
          >
            <h2
              dangerouslySetInnerHTML={{ __html: home.coachesHeading }}
              css={styles.heading}
              style={
                inView ? { opacity: clamp(1.2 + offset * 2, 0, 1) } : {}
              }
            />
          </div>
        </div>
      </div>
      <HomeCoachesGrid />
    </section>
  )
}

export default HomeCoaches
