import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps } from '../types/customTypes'
import { toSlug } from '../utils/helpers'
import ArrowButton from './ArrowButton'
import CoachProfile from './CoachProfile'
import Lightbox from './Lightbox'

type PropTypes = {
  featuredCoach: CoachProps
}

const CoachCategoryFeatured = ({
  featuredCoach,
  ...props
}: PropTypes) => {
  const styles = {
    section: css`
      ${baseGrid}
      background-color: white;
      padding: 7.5vw 0 5vw;
      min-height: 25vw;
    `,
    text: css`
      z-index: 1;
      color: white;
      align-self: center;
      position: relative;
      ${featuredCoach.photoAlignment === 'Right' &&
      css`
        grid-column: 2 / span 7;
        ${mq().m} {
          grid-column-end: span 6;
        }
      `}
      ${featuredCoach.photoAlignment === 'Left' &&
      css`
        grid-column: span 7 / -2;
        ${mq().m} {
          grid-column-start: span 6;
        }
      `}
      > span {
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: ${colors.gold};
        font-weight: 400;
        font-size: var(--fs-14);
        margin-bottom: 0.5em;
        margin-top: 2em;
      }
      h2 {
        font-size: var(--fs-48);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 325;
        margin: 0;
        transition: color 300ms ease;
        ${mq().s} {
          font-size: var(--fs-30);
        }
      }
      @media (hover: hover) {
        &:hover h2 {
          color: ${colors.goldTint2};
        }
      }
      h3 {
        font-size: var(--fs-16);
        font-weight: 400;
        font-style: italic;
        color: #aaa;
        margin: 0.75em 0 1.5em;
        ${mq().s} {
          font-size: var(--fs-14);
          margin-bottom: 1em;
        }
      }
      p {
        font-size: var(--fs-16);
        max-width: 75ch;
        ${mq().ms} {
          display: none;
        }
      }
    `,
    photo: css`
      position: absolute;
      bottom: 0;
      display: flex;
      width: 100%;
      min-height: 100%;
      max-height: 110%;
      ${featuredCoach.photoAlignment === 'Right' &&
      css`
        grid-column: span 6 / -1;
        ${mq().m} {
          grid-column-start: span 8;
        }
        ${mq().s} {
          grid-column-start: span 9;
        }
      `}
      ${featuredCoach.photoAlignment === 'Left' &&
      css`
        grid-column: 1 / span 6;
        ${mq().m} {
          grid-column-end: span 8;
        }
        ${mq().s} {
          grid-column-end: span 9;
        }
      `}
      > div {
        width: 100%;
        > div {
          max-width: none !important;
        }
      }
    `,
    button: css`
      margin-bottom: 2.25em;
      position: static;
    `,
    background: css`
      ${absoluteFill}
      background: linear-gradient(to top right, #111, #444);
      z-index: 0;
    `,
    topCurve: css`
      margin-top: -1px;
      width: 100%;
      height: auto;
      ${featuredCoach.photoAlignment === 'Left' &&
      css`
        transform: scaleX(-1);
      `}
    `,
    bottomCurve: css`
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      bottom: -1px;
      ${featuredCoach.photoAlignment === 'Left' &&
      css`
        transform: scaleX(-1);
      `}
    `,
  }
  return (
    <section css={styles.section} {...props}>
      <div css={styles.background}>
        <svg viewBox="0 0 1440 111" css={styles.topCurve}>
          <path
            fill="#f2f2f2"
            d="M0,97.67294 C478,-143.32706 978.5,215.17294 1440,78.17294 L1440,0 L0,0 L0,97.67294 Z"
          />
          <path
            fill="#fff"
            d="M0,69.4461582 C511,-107.726782 856.5,118.273218 1440,49.9461582 L1440,-1.42108547e-14 L0,-1.42108547e-14 L0,69.4461582 Z"
          />
        </svg>
      </div>
      <div css={styles.text}>
        <span>Coach Spotlight</span>
        <h2>{featuredCoach.name}</h2>
        <h3>
          {featuredCoach.jobTitleExtended || featuredCoach.jobTitle}
        </h3>
        <p>{featuredCoach.bioSummary}</p>
        <ArrowButton text="Read more" css={styles.button}>
          <Lightbox
            slug={`coaches/profiles/${toSlug(featuredCoach.name)}`}
          >
            <CoachProfile coach={featuredCoach} />
          </Lightbox>
        </ArrowButton>
      </div>
      <div css={styles.photo}>
        <GatsbyImage
          image={featuredCoach.photo.large}
          alt={
            featuredCoach.photo.alt ||
            `${featuredCoach.name} — ${featuredCoach.jobTitle}`
          }
          objectPosition={
            featuredCoach.photoAlignment === 'Right'
              ? '0% 0%'
              : '100% 0%'
          }
        />
      </div>
      <svg css={styles.bottomCurve} viewBox="0 0 1440 34">
        <path
          fill="#fff"
          d="M0,34 L1440,34 L1440,23.2663845 C954,60.6352155 443.5,-44.3209746 0,23.2663845 L0,34 Z"
        />
      </svg>
    </section>
  )
}

export default CoachCategoryFeatured
