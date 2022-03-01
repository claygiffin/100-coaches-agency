import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { StructuredText } from 'react-datocms'

import { useElementRect } from '../hooks/useElementRect'
import { mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps } from '../types/customTypes'
import Seo from './Seo'

type CoachProfileProps = {
  coach: CoachProps
}

const CoachProfile = ({ coach }: CoachProfileProps) => {
  const [headerBgRefState, setHeaderBgRefState] = useState(null)
  const headerBgRef = useCallback(node => {
    setHeaderBgRefState(node)
  }, [])
  const { width: bgWidth, height: bgHeight } =
    useElementRect(headerBgRefState)

  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const gradientId = useMemo(() => uniqueId('gradient--'), [])

  const styles = {
    article: css`
      font-size: var(--fs-18);
      max-width: calc(72ch + 2 * var(--gutter-lg));
    `,
    header: css`
      display: grid;
      grid-template-rows: 1fr auto;
      ${coach.photoAlignment === 'Right' &&
      css`
        grid-template-columns: 3fr 2fr;
        ${mq().ms} {
          grid-template-columns: 1fr 1fr;
        }
      `}
      ${coach.photoAlignment === 'Left' &&
      css`
        grid-template-columns: 2fr 3fr;
      `}
    `,
    headerBg: css`
      background: linear-gradient(to top right, #222, #555);
      grid-row: 2 / 3;
      grid-column: 1 / 3;
      clip-path: url(#${clipId});
      pointer-events: all;
      ${coach.photoAlignment === 'Left' &&
      css`
        transform: scaleX(-1);
        background: linear-gradient(to top left, #222, #555);
      `}
    `,
    headerText: css`
      position: relative;
      color: white;
      padding: calc(var(--gutter-md) + 10%) var(--gutter-sm)
        var(--gutter-md) var(--gutter-lg);
      grid-row: 2 / 3;
      ${coach.photoAlignment === 'Right' &&
      css`
        grid-column: 1 / 2;
      `}
      ${coach.photoAlignment === 'Left' &&
      css`
        grid-column: 2 / 3;
      `}
      ${mq().ms} {
        padding-top: calc(var(--gutter-md) + 12%);
        padding-left: var(--gutter-md);
      }
      h1 {
        font-size: var(--fs-48);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 325;
        margin: 0.333em 0 0;
        ${mq().ms} {
          font-size: var(--fs-30);
        }
      }
      h2 {
        font-family: var(--sans-serif);
        font-size: var(--fs-16);
        font-weight: 400;
        font-style: italic;
        color: #ddd;
        margin: 0.75em 0 2em;
        ${mq().ms} {
          font-size: var(--fs-14);
        }
      }
    `,
    photoWrap: css`
      grid-row: 1 / 3;
      display: flex;
      ${coach.photoAlignment === 'Right' &&
      css`
        grid-column: 2 / 3;
      `}
      ${coach.photoAlignment === 'Left' &&
      css`
        grid-column: 1 / 2;
      `}
      > div {
        width: 100%;
        > div {
          max-width: none !important;
        }
      }
    `,
    body: css`
      background-color: #fff;
      color: #555;
      padding: var(--gutter-md) var(--gutter-lg) var(--gutter-lg);
      pointer-events: all;
      ${mq().ms} {
        padding-left: var(--gutter-md);
        padding-right: var(--gutter-md);
      }
    `,
  }
  return (
    <article css={styles.article}>
      <Seo
        title={coach.seo?.description || coach.name}
        description={coach.jobTitleExtended || coach.jobTitle}
        imageUrl={coach.seo?.image?.url || coach.photo.thumbnailUrl}
      />
      <section css={styles.header}>
        <div css={styles.headerBg} ref={headerBgRef}>
          <svg viewBox="0 0 948 58">
            <defs>
              <linearGradient
                x1={coach.photoAlignment === 'Right' ? '100%' : '0%'}
                x2={coach.photoAlignment === 'Right' ? '0%' : '100%'}
                y1="50%"
                y2="50%"
                id={gradientId}
              >
                <stop stopColor={colors.gold} offset="0%" />
                <stop stopColor={colors.goldShade1} offset="40%" />
                <stop stopColor={colors.goldShade2} offset="80%" />
                <stop stopColor={colors.goldShade3} offset="100%" />
              </linearGradient>
              <clipPath id={clipId}>
                <path
                  d={`M0,${bgWidth * 0.042} C${bgWidth * 0.355},${
                    bgWidth * -0.065
                  } ${bgWidth * 0.6},${bgWidth * 0.072} ${bgWidth},${
                    bgWidth * 0.03
                  } L${bgWidth},${bgHeight} L0,${bgHeight} Z`}
                />
              </clipPath>
            </defs>
            <path
              fill={`url(#${gradientId})`}
              d="M0,55.8631487 C362.278107,-79.5 610.497041,95.5 948,49.5 L948,-5.32907052e-14 L0,-5.32907052e-14 L0,55.8631487 Z"
            />
          </svg>
        </div>
        <div css={styles.headerText}>
          <h1>{coach.name}</h1>
          <h2>{coach.jobTitleExtended || coach.jobTitle}</h2>
        </div>
        <div css={styles.photoWrap}>
          <GatsbyImage
            image={coach.photo.small}
            alt={coach.photo.alt || `${coach.name} — ${coach.jobTitle}`}
            objectPosition="0% 0%"
          />
        </div>
      </section>
      <section css={styles.body}>
        <StructuredText data={coach.bio.value} />
      </section>
    </article>
  )
}

export default CoachProfile
