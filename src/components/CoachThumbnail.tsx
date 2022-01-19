import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { scrim } from '../theme/mixins'
import { colors } from '../theme/variables'

type CoachThumbnailProps = {
  coach: {
    photo: {
      alt?: string
      gatsbyImageData: any
    }
    name: string
    jobTitle: string
  }
  animated: boolean
}

const CoachThumbnail = ({ coach, animated }: CoachThumbnailProps) => {
  const thumbnailStyle = css`
    position: relative;
    opacity: 0;
    transition: opacity 500ms cubic-bezier(0.25, 0.75, 0.25, 1);
    ${animated &&
    css`
      transform: none;
      opacity: 1;
    `}
  `
  const textStyle = css`
    color: white;
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 2;
    padding: 3rem 1rem 1rem;
    box-sizing: border-box;
    &:before {
      content: '';
      ${scrim('black', 0.67, 'to top')}
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    h2 {
      font-size: var(--fs-21);
      font-weight: 350;
      margin: 0;
      padding-bottom: 1em;
      position: relative;
      text-shadow: 0 0 0.25em #000;

      &:after {
        content: '';
        width: 1.5em;
        height: 3px;
        background-color: ${colors.gold};
        position: absolute;
        left: 50%;
        bottom: 0.5em;
        transform: translate(-50%, 1px);
      }
    }
    h3 {
      position: relative;
      font-size: var(--fs-15);
      font-weight: 400;
      font-style: italic;
      margin: 0;
      text-shadow: 0 0 0.25em #000;
    }
  `
  const imageStyle = css`
    min-width: 100%;
    min-height: 100%;
  `
  return (
    <div css={thumbnailStyle}>
      <GatsbyImage
        css={imageStyle}
        image={coach.photo.gatsbyImageData}
        alt={coach.photo.alt || `${coach.name} — ${coach.jobTitle}`}
      />
      <div css={textStyle}>
        <h2>{coach.name}</h2>
        <h3>{coach.jobTitle}</h3>
      </div>
    </div>
  )
}

export default CoachThumbnail
