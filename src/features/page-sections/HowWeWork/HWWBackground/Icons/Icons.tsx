import { type ComponentProps, Fragment } from 'react'

import { classes } from '@/utils'

import styles from './Icons.module.scss'

type Props = ComponentProps<'svg'> & {
  activeStep?: number
}

export const Icons = ({ activeStep, ...props }: Props) => {
  return (
    <Fragment>
      <svg
        className={classes(styles.svg, styles.left)}
        viewBox={`0 0 1355 1355`}
        fill="none"
        {...props}
      >
        <g
          data-is-active={activeStep === 1}
          className={styles.icon}
          fill="#fff"
        >
          <circle
            opacity={0.8}
            cx={62.87}
            cy={62.87}
            r={62.87}
            transform="scale(-1 1) rotate(-45 -113.96 781.525)"
          />
          <circle
            cx={42.226}
            cy={42.226}
            r={42.226}
            transform="scale(-1 1) rotate(-45 -99.363 746.283)"
          />
          <path
            opacity={0.8}
            d="M366.375 256.476l23.223 23.223 60.381-60.38-5.972-5.972 29.858-29.858-11.28-11.28-29.858 29.858-5.972-5.972-60.38 60.381z"
          />
        </g>
        <g
          data-is-active={activeStep === 2}
          className={styles.icon}
          fill="#fff"
        >
          <circle
            opacity={0.42}
            cx={183.834}
            cy={697.113}
            r={52.529}
          />
          <path
            opacity={0.79}
            d="M188.778 517.893l54.132 93.759H134.646l54.132-93.759z"
          />
          <path
            opacity={0.63}
            d="M86 590.889h90.182v90.182H86z"
          />
        </g>
        <g
          data-is-active={activeStep === 3}
          className={styles.icon}
        >
          <path
            d="M422.918 1079.2h57.102c15.463 0 27.999 12.54 28 28v57.14c-.001 15.46-12.537 28-28 28h-78.184c-15.464 0-28-12.54-28-28v-57.14c0-5.65 1.674-10.91 4.552-15.31l-18.695-41.3 63.225 28.61z"
            fill="#fff"
            opacity={0.81}
          />
          <path
            d="M497.086 1222.59h-57.102c-15.464 0-27.999-12.54-28-28v-57.14c0-15.46 12.536-28 28-28h78.184c15.464 0 28 12.54 28 28v57.14c0 5.65-1.674 10.91-4.552 15.31l18.695 41.3-63.225-28.61z"
            fill="#fff"
            opacity={0.46}
          />
        </g>
      </svg>
      <svg
        className={classes(styles.svg, styles.right)}
        viewBox={`0 0 1355 1355`}
        fill="none"
        {...props}
      >
        <g
          className={styles.icon}
          data-is-active={activeStep === 4}
        >
          <path
            fill="#fff"
            fillOpacity={0.6}
            d="M749 95.892h153.708v109.126H749z"
          />
          <path
            d="M764.453 173.893l42.437-43.88 19.193 24.521 41.37-37.641"
            stroke="#fff"
            strokeWidth={10}
          />
          <circle
            opacity={0.76}
            cx={894.668}
            cy={196.108}
            r={62.215}
            fill="#fff"
          />
          <path
            opacity={0.76}
            d="M751.453 237.893h68"
            stroke="#fff"
            strokeWidth={20}
          />
        </g>
        <g
          className={styles.icon}
          data-is-active={activeStep === 5}
        >
          <path
            opacity={0.66}
            fill="#fff"
            d="M1157.89 671.137h71.215v15.879h-71.215z"
          />
          <g
            opacity={0.64}
            fill="#fff"
          >
            <circle
              cx={1127.58}
              cy={609.546}
              r={21.653}
            />
            <path d="M1104.22 660.955c0-12.426 10.08-22.5 22.5-22.5 12.43 0 22.5 10.074 22.5 22.5v39.5h-45v-39.5z" />
            <path d="M1104 700.01h70.73v26.946h-43.78c-14.89 0-26.95-12.064-26.95-26.946z" />
            <path d="M1149.23 700.01h33.2l-7.7 66.884h-25.5V700.01z" />
          </g>
          <g
            opacity={0.88}
            fill="#fff"
          >
            <circle
              cx={21.653}
              cy={21.653}
              r={21.653}
              transform="matrix(-1 0 0 1 1282.52 587.893)"
            />
            <path d="M1284.23 660.955c0-12.426-10.08-22.5-22.5-22.5-12.43 0-22.5 10.074-22.5 22.5v39.5h45v-39.5z" />
            <path d="M1284.45 700.01h-70.74v26.946h43.79c14.88 0 26.95-12.064 26.95-26.946z" />
            <path d="M1239.21 700.01h-33.2l7.7 66.884h25.5V700.01z" />
          </g>
        </g>
        <g
          className={styles.icon}
          data-is-active={activeStep === 6}
        >
          <path
            opacity={0.77}
            d="M871.191 1081.77l83.838 144.24H787.353l83.838-144.24z"
            fill="#fff"
          />
          <path
            opacity={0.62}
            d="M819.176 1104.42l70.301 121.76H748.876l70.3-121.76z"
            fill="#fff"
          />
          <g
            opacity={0.77}
            fill="#fff"
          >
            <path d="M842.07 1038.89h28.099v27.059H842.07z" />
            <path d="M828.543 1044.1h28.099v27.059h-28.099zM867.633 1038.89h4.208v49.09h-4.208z" />
          </g>
        </g>
      </svg>
    </Fragment>
  )
}
