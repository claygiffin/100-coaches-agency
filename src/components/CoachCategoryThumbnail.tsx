import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { uniqueId } from 'lodash'
import { useMemo } from 'react'

import { mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps } from '../types/customTypes'
import CoachProfileLightbox from './CoachProfileLightbox'

type PropTypes = {
  coach: CoachProps
  index: number
}

const CoachCategoryThumbnail = ({ coach, index }: PropTypes) => {
  const gradientId = useMemo(() => uniqueId('gradient--'), [])

  const styles = {
    container: css`
      position: relative;
      display: flex;
      flex-direction: column;
      cursor: pointer;
    `,
    imageWrap: css`
      display: flex;
      position: relative;
    `,
    image: css`
      min-width: 100%;
      min-height: 100%;
      > div {
        max-width: 100% !important;
      }
    `,
    background: css`
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      stop {
        transition: stop-color 500ms ease;
      }
      div:not(:hover) > div > & stop {
        stop-color: #eee;
      }
    `,
    text: css`
      flex: 1;
      background: #222;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 0 1rem;
      transition: background-color 300ms ease;
      div:hover > & {
        background: #000;
      }
      h2 {
        position: relative;
        font-size: var(--fs-18);
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin: 1em 0 0.5em;
        padding-bottom: 0.75em;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        ${mq().s} {
          font-size: var(--fs-16);
        }
        &:after {
          content: '';
          width: 1.5em;
          height: 3px;
          background-color: ${colors.gold};
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 1px);
        }
      }
      h3 {
        font-size: var(--fs-15);
        font-weight: 300;
        font-style: italic;
        margin: 0.25em 0 1.5em;
        ${mq().s} {
          font-size: var(--fs-13);
        }
      }
    `,
  }
  return (
    <div css={styles.container}>
      <div css={styles.imageWrap}>
        <svg viewBox="0 0 329 144" css={styles.background}>
          <defs>
            <linearGradient
              x1="0%"
              y1="55%"
              x2="100%"
              y2="45%"
              id={gradientId}
            >
              <stop stopColor={colors.goldShade3} offset="0%" />
              <stop stopColor={colors.goldShade2} offset="30%" />
              <stop stopColor={colors.goldShade1} offset="60%" />
              <stop stopColor={colors.gold} offset="100%" />
            </linearGradient>
          </defs>
          {index % 2 === 0 ? (
            <path
              fill={`url(#${gradientId})`}
              d="M0,25 C82.25,-4.75 246.75,-4.75 329,25 L329,144 L0,144 L0,25 Z"
            />
          ) : (
            <path
              fill={`url(#${gradientId})`}
              d="M0,28 C82.25,57.75 246.75,57.75 329,28 L329,144 L0,144 L0,28 Z"
            />
          )}
        </svg>
        <GatsbyImage
          css={styles.image}
          image={coach.photo.small}
          alt={coach.photo.alt || `${coach.name} — ${coach.jobTitle}`}
        />
      </div>
      <div css={styles.text}>
        <h2>{coach.name}</h2>
        <h3>{coach.jobTitle}</h3>
      </div>
      <CoachProfileLightbox coach={coach} />
    </div>
  )
}

export default CoachCategoryThumbnail
