'use client'

import { useEffect, useMemo, useRef } from 'react'

import { useElementRect } from '@/hooks/useElementRect'

import styles from './HomePromiseShape.module.scss'

type ShapeProps = {
  shape?: string
  brighten?: null | number
  setBrightenPosition?: (arg: { top: number; left: number }) => void
}

export const Shape = ({
  shape = 'square',
  brighten,
  setBrightenPosition,
  ...props
}: ShapeProps) => {
  const animationDelay = useMemo(() => Math.random() * -4000, [])
  const triangleRotation = useMemo(
    () => Math.floor(Math.random() * 4) * 90,
    []
  )
  const shapeRef = useRef<HTMLDivElement>(null)
  // const [shapeRef, setShapeRef] = useState<HTMLDivElement | null>(null)

  const size = useElementRect(shapeRef.current)
  const width = size.width || 0
  const height = size.height || 0

  useEffect(() => {
    if (brighten && shapeRef && setBrightenPosition) {
      setBrightenPosition({
        top: (shapeRef.current?.offsetTop || 0) + height / 2,
        left: (shapeRef.current?.offsetLeft || 0) + width / 2,
      })
    }
  }, [shapeRef, brighten, setBrightenPosition, height, width])

  return (
    <div
      ref={shapeRef}
      style={{
        display: 'flex',
        '--triangle-rotation': triangleRotation + 'deg',
        '--animation-delay': animationDelay + 'ms',
      }}
      data-brighten={brighten || false}
    >
      <svg
        className={styles.shape}
        style={brighten ? { opacity: brighten } : {}}
        viewBox="0 0 180 180"
        {...props}
      >
        {shape === 'square' && (
          <rect
            x="0"
            y="0"
            width="180"
            height="180"
          />
        )}
        {shape === 'circle' && (
          <circle
            cx="90"
            cy="90"
            r="90"
          />
        )}
        {shape === 'triangle' && (
          <polygon points="90 0 180 180 0 180" />
        )}
      </svg>
    </div>
  )
}
