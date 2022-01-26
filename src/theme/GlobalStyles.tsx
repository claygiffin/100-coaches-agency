import '../fonts/_font-face.css'

import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

import { mq } from './mixins'

const GlobalStyles = () => {
  const globalStyles = css`
    ${emotionNormalize}

    :root {
      /* Font Sizes */
      --fs-108: max(4rem, 5rem + 3.333vw);
      --fs-60: max(3rem, 2.75rem + 1.875vw);
      --fs-48: max(2.5rem, 2.25rem + 1.25vw);
      --fs-36: max(2.25rem, 2rem + 0.833vw);
      --fs-30: max(2rem, 1.5rem + 0.833vw);
      --fs-24: max(1.667rem, 1.5rem + 0.417vw);
      --fs-21: max(1.5rem, 1.25rem + 0.417vw);
      --fs-18: max(1.333rem, 1rem + 0.417vw);
      --fs-16: max(1.333rem, 0.8333rem + 0.417vw);
      --fs-15: 1.25rem;
      --fs-14: 1.167rem;
      --fs-13: 1.0888rem;

      /* Font Stacks */
      --sans-serif: 'Brother 1816', system-ui, -apple-system, 'Segoe UI',
        Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji';
      --serif: 'Bitter', Constantia, 'Lucida Bright', Lucidabright,
        'Lucida Serif', Lucida, 'DejaVu Serif', 'Bitstream Vera Serif',
        'Liberation Serif', Georgia, serif;

      /* Padding/Gutters/Margins */
      --pd-sm: clamp(3rem, 2.5vw, 6rem);
      --pd-md: clamp(4.5rem, 5vw, 9rem);
      --pd-lg: clamp(6rem, 7.5vw, 12rem);
      --pd-xl: clamp(12rem, 12.5vw, 18rem);
      --gutter-sm: max(1.25vw, 0.75rem);
      --gutter-md: max(2.5vw, 1rem);
      --gutter-mlg: max(3.333vw, 2rem);
      --gutter-lg: max(5vw, 3rem);
      --gutter-xlg: max(7.5vw, 4.5rem);

      --margin-outer: calc(3 * var(--gutter-md));
      ${mq().s} {
        --margin-outer: calc(var(--gutter-md) + 0.5rem);
      }
      --column-width: calc(
        (100vw - 2 * var(--margin-outer) - 11 * var(--gutter-md)) / 12
      );
    }

    html {
      background-color: #000;
      font-family: var(--sans-serif);
      font-size: 12px;
      ${mq('min').l} {
        font-size: calc(9px + 0.21vw);
      }
    }
    body {
      font-size: var(--fs-18);
    }
    h1 {
      font-family: var(--serif);
      font-weight: 225;
      line-height: 1.1;
    }
    h2 {
      font-family: var(--serif);
      font-weight: 225;
      line-height: 1.125;
    }
    p {
      line-height: 2;
      font-weight: 300;
    }
    input,
    textarea,
    select {
      border-radius: 0;
      &:focus {
        outline: none;
      }
    }
    *:-webkit-autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        transition: all 0s 99999s;
        border-radius: 0;
      }
    }
  `

  return <Global styles={globalStyles} />
}

export default GlobalStyles
