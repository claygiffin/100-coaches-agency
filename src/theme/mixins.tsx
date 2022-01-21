import { css } from '@emotion/react'
import { parseToHsl } from 'polished'

import { breakpoints, colors } from './variables'

export const mq = (minMax = 'max') => {
  const bp = Object.create(breakpoints)
  Object.keys(breakpoints).forEach(key => {
    bp[key] = `@media (${minMax}-width: ${breakpoints[key]}px)`
  })
  return bp
}

export const baseGrid = css`
  position: relative;
  display: grid;
  grid-template-columns: calc(2 * var(--gutter-md)) repeat(12, 1fr) calc(
      2 * var(--gutter-md)
    );
  grid-template-rows: auto;
  grid-column-gap: var(--gutter-md);
  width: 100%;
  ${mq().s} {
    grid-template-columns: 0.5rem repeat(12, 1fr) 0.5rem;
  }
`

export const absoluteFill = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const goldGradient = (direction = '60deg') => css`
  background: linear-gradient(
    ${direction},
    ${colors.goldShade3},
    ${colors.goldShade2},
    ${colors.goldShade1},
    ${colors.gold}
  );
`

export const scrim = (
  startColor = 'black',
  startOpacity = 1,
  direction = 'to top'
) => {
  const scrimCoordinates: { [key: number]: number } = {
    0: 1,
    10.34: 0.9854227405,
    19.97: 0.944606414,
    28.94: 0.8819241983,
    37.32: 0.8017492711,
    45.14: 0.7084548104999999,
    52.48: 0.6064139942,
    59.38: 0.5,
    65.89: 0.3935860058,
    72.08: 0.29154518949999997,
    77.99: 0.19825072889999995,
    83.68: 0.11807580169999998,
    89.21: 0.055393585999999995,
    94.63: 0.014577259499999995,
    100: 0,
  }
  const hsl = parseToHsl(startColor)
  const stops = []
  for (const colorStop in scrimCoordinates) {
    const stop = `hsla(${hsl.hue}, ${hsl.saturation * 100}%, ${
      hsl.lightness * 100
    }%, ${scrimCoordinates[colorStop] * startOpacity}) ${colorStop}%`
    stops.push(stop)
  }

  return css`
    background-image: linear-gradient(
      ${direction},
      ${stops.sort().reverse().toString()}
    );
  `
}
