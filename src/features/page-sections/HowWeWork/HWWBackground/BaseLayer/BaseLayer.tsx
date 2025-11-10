import { type ComponentProps, useId } from 'react'

import styles from './BaseLayer.module.scss'

type Props = ComponentProps<'svg'> & {
  showSections?: boolean
  color: 'Gold' | 'Dark' | 'White'
}

export const BaseLayer = ({ showSections, color, ...props }: Props) => {
  const gradientWhite = useId()
  const gradientDark = useId()
  const gradientGold = useId()
  const gradient1 = useId()
  const gradient2 = useId()
  const gradient3 = useId()
  const gradient4 = useId()
  const maskA = useId()

  return (
    <svg
      className={styles.baseLayer}
      viewBox={`0 0 2457 1356`}
      fill="none"
      data-show-sections={showSections}
      {...props}
    >
      <path
        className={styles.base}
        d="M1761.61 0c-383.79 0-698.5 303.236-698.5 675.564 0 172.729-122.816 318.59-295.523 353.136-172.707 34.55-345.414-53.738-414.497-211.114-69.083-157.376-11.514-341.62 134.328-437.581 145.841-95.961 341.576-80.607 468.228 42.223C982.512 314.751 1036.24 218.791 1113 138.184 994.025 49.9 844.346 3.838 694.666 3.838 310.873 3.838 0 307.075 0 679.402c0 372.328 314.711 671.728 698.504 671.728 383.796 0 694.666-303.24 694.666-675.566 0-172.729 126.65-318.59 303.2-349.297 172.7-30.708 345.41 61.415 410.66 218.79 65.24 157.376 7.67 341.621-142.01 433.743-149.68 92.12-345.41 72.93-468.22-49.899-26.87 107.479-80.6 203.439-157.36 287.879 118.98 88.29 268.66 138.19 418.33 138.19 383.8 0 698.51-303.24 698.51-675.568C2456.28 303.236 2145.41 0 1761.61 0z"
        fill={`url(#${gradientGold})`}
        opacity={color === 'Gold' ? 1 : 0}
      />
      <path
        className={styles.base}
        d="M1761.61 0c-383.79 0-698.5 303.236-698.5 675.564 0 172.729-122.816 318.59-295.523 353.136-172.707 34.55-345.414-53.738-414.497-211.114-69.083-157.376-11.514-341.62 134.328-437.581 145.841-95.961 341.576-80.607 468.228 42.223C982.512 314.751 1036.24 218.791 1113 138.184 994.025 49.9 844.346 3.838 694.666 3.838 310.873 3.838 0 307.075 0 679.402c0 372.328 314.711 671.728 698.504 671.728 383.796 0 694.666-303.24 694.666-675.566 0-172.729 126.65-318.59 303.2-349.297 172.7-30.708 345.41 61.415 410.66 218.79 65.24 157.376 7.67 341.621-142.01 433.743-149.68 92.12-345.41 72.93-468.22-49.899-26.87 107.479-80.6 203.439-157.36 287.879 118.98 88.29 268.66 138.19 418.33 138.19 383.8 0 698.51-303.24 698.51-675.568C2456.28 303.236 2145.41 0 1761.61 0z"
        fill={`url(#${gradientWhite})`}
        opacity={color === 'White' ? 1 : 0}
      />
      <path
        className={styles.base}
        d="M1761.61 0c-383.79 0-698.5 303.236-698.5 675.564 0 172.729-122.816 318.59-295.523 353.136-172.707 34.55-345.414-53.738-414.497-211.114-69.083-157.376-11.514-341.62 134.328-437.581 145.841-95.961 341.576-80.607 468.228 42.223C982.512 314.751 1036.24 218.791 1113 138.184 994.025 49.9 844.346 3.838 694.666 3.838 310.873 3.838 0 307.075 0 679.402c0 372.328 314.711 671.728 698.504 671.728 383.796 0 694.666-303.24 694.666-675.566 0-172.729 126.65-318.59 303.2-349.297 172.7-30.708 345.41 61.415 410.66 218.79 65.24 157.376 7.67 341.621-142.01 433.743-149.68 92.12-345.41 72.93-468.22-49.899-26.87 107.479-80.6 203.439-157.36 287.879 118.98 88.29 268.66 138.19 418.33 138.19 383.8 0 698.51-303.24 698.51-675.568C2456.28 303.236 2145.41 0 1761.61 0z"
        fill={`url(#${gradientDark})`}
        opacity={color === 'Dark' ? 1 : 0}
      />
      <mask
        id={maskA}
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={2457}
        height={1355}
      >
        <path
          d="M1761.61 0c-383.79 0-698.5 303.236-698.5 675.564 0 172.729-122.816 318.59-295.523 353.136-172.707 34.55-345.414-53.738-414.497-211.114-69.083-157.376-11.514-341.62 134.328-437.581 145.841-95.961 341.576-80.607 468.228 42.223C982.512 314.751 1036.24 218.791 1113 138.184 994.025 49.9 844.346 3.838 694.666 3.838 310.873 3.838 0 307.075 0 679.402c0 372.328 314.711 671.728 698.504 671.728 383.796 0 694.666-303.24 694.666-675.566 0-172.729 126.65-318.59 303.2-349.297 172.7-30.708 345.41 61.415 410.66 218.79 65.24 157.376 7.67 341.621-142.01 433.743-149.68 92.12-345.41 72.93-468.22-49.899-26.87 107.479-80.6 203.439-157.36 287.879 118.98 88.29 268.66 138.19 418.33 138.19 383.8 0 698.51-303.24 698.51-675.568C2456.28 303.236 2145.41 0 1761.61 0z"
          fill={`url(#${gradientGold})`}
        />
      </mask>
      <g
        mask={`url(#${maskA})`}
        fillOpacity={0.17}
        className={styles.gradients}
      >
        <path
          d="M692.498 875.982l-182-459-230-48-54-254-306 339-54 458 314 385.998 284 112 228-533.998z"
          fill={`url(#${gradient1})`}
        />
        <path
          d="M763.486 827.428l-348.307-49.461-186.748 167.276-199.916-27.774-48.493 173.561 24.163 63.56 430.669 249.23 305.263 3.78 492.853-162.88-469.484-417.292z"
          fill={`url(#${gradient2})`}
        />
        <path
          d="M1759.48 875.982l182-459 230-48 54-254 306 339 54 458-314 385.998-284 112-546-46h-176l638-220-144-267.998z"
          fill={`url(#${gradient3})`}
        />
        <path
          d="M1688.5 827.428l348.3-49.461 186.75 167.276 199.92-27.774 48.49 173.561-24.16 63.56-430.67 249.23-305.27 3.78-23.36-580.172z"
          fill={`url(#${gradient4})`}
        />
      </g>
      <defs>
        <linearGradient
          id={gradientWhite}
          x1="1523.66"
          y1="279"
          x2="1052.72"
          y2="-578.295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="#F1F1F1"
          />
        </linearGradient>

        <linearGradient
          id={gradientDark}
          x1="1523.66"
          y1="279"
          x2="1052.72"
          y2="-578.295"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop
            offset="0.0994278"
            stopColor="#0E0E0E"
          />
          <stop
            offset="0.188688"
            stopColor="#1A1A1A"
          />
          <stop
            offset="0.269246"
            stopColor="#262626"
          />
          <stop
            offset="0.342566"
            stopColor="#313131"
          />
          <stop
            offset="0.410113"
            stopColor="#3B3B3B"
          />
          <stop
            offset="0.473353"
            stopColor="#454545"
          />
          <stop
            offset="0.53375"
            stopColor="#4D4D4D"
          />
          <stop
            offset="0.59277"
            stopColor="#555555"
          />
          <stop
            offset="0.651877"
            stopColor="#5C5C5C"
          />
          <stop
            offset="0.712536"
            stopColor="#626262"
          />
          <stop
            offset="0.776214"
            stopColor="#666666"
          />
          <stop
            offset="0.844373"
            stopColor="#6A6A6A"
          />
          <stop
            offset="0.91848"
            stopColor="#6C6C6C"
          />
          <stop
            offset="1"
            stopColor="#6D6D6D"
          />
        </linearGradient>
        <linearGradient
          id={gradientGold}
          x1={3575.45}
          y1={291.498}
          x2={1800.87}
          y2={-1746.94}
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
          id={gradient1}
          x1={380.498}
          y1={329.983}
          x2={152.498}
          y2={695.983}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop
            offset={1}
            stopColor="#fff"
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={gradient2}
          x1={276.327}
          y1={924.896}
          x2={620.397}
          y2={1177.09}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop
            offset={1}
            stopColor="#fff"
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={gradient3}
          x1={2071.48}
          y1={329.982}
          x2={2299.48}
          y2={695.983}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop
            offset={1}
            stopColor="#fff"
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={gradient4}
          x1={2175.66}
          y1={924.896}
          x2={1831.58}
          y2={1177.09}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop
            offset={1}
            stopColor="#fff"
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
