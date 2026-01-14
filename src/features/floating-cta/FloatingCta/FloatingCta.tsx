import Link, { type LinkProps } from 'next/link'
import { useId } from 'react'

import styles from './FloatingCta.module.scss'

type Props = Omit<LinkProps, 'href'>

export const FloatingCta = ({ ...props }: Props) => {
  const id = useId()
  return (
    <Link
      href={`/contact`}
      className={styles.container}
      {...props}
    >
      <svg
        className={styles.icon}
        viewBox={`0 0 39 39`}
        fill="none"
      >
        <g opacity={0.85}>
          <g opacity={0.8}>
            <path
              d="M2.75 11.006a5.443 5.443 0 015.443-5.443H23.39a5.443 5.443 0 015.444 5.443v11.107a5.443 5.443 0 01-5.444 5.443H8.193a5.443 5.443 0 01-5.444-5.443V11.006z"
              fill={`url(#${id}-1)`}
            />
            <path
              d="M0 0l13.958 6.317-7.64 7.641L0 0z"
              fill={`url(#${id}-2)`}
            />
          </g>
          <g opacity={0.6}>
            <path
              d="M36.25 27.994a5.443 5.443 0 01-5.443 5.443H15.608a5.443 5.443 0 01-5.443-5.443V16.887a5.443 5.443 0 015.443-5.443h15.2a5.443 5.443 0 015.442 5.443v11.107z"
              fill={`url(#${id}-3)`}
            />
            <path
              d="M39 39L25.04 32.683l7.641-7.641L39 39z"
              fill={`url(#${id}-4)`}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id={`${id}-1`}
            x1={41.973}
            y1={5.928}
            x2={8.409}
            y2={-16.326}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A66427" />
            <stop
              offset={0.495}
              stopColor="#DF9B35"
            />
            <stop
              offset={1}
              stopColor="#F5BD5D"
            />
          </linearGradient>
          <linearGradient
            id={`${id}-2`}
            x1={41.973}
            y1={5.928}
            x2={8.409}
            y2={-16.326}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A66427" />
            <stop
              offset={0.495}
              stopColor="#DF9B35"
            />
            <stop
              offset={1}
              stopColor="#F5BD5D"
            />
          </linearGradient>
          <linearGradient
            id={`${id}-3`}
            x1={52.138}
            y1={17.372}
            x2={18.574}
            y2={-4.882}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A66427" />
            <stop
              offset={0.495}
              stopColor="#DF9B35"
            />
            <stop
              offset={1}
              stopColor="#F5BD5D"
            />
          </linearGradient>
          <linearGradient
            id={`${id}-4`}
            x1={52.138}
            y1={17.372}
            x2={18.574}
            y2={-4.882}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A66427" />
            <stop
              offset={0.495}
              stopColor="#DF9B35"
            />
            <stop
              offset={1}
              stopColor="#F5BD5D"
            />
          </linearGradient>
        </defs>
      </svg>

      <span>Ready to start?</span>
      <span>Find a coach now</span>
    </Link>
  )
}
