import { clamp } from 'lodash'
import { useEffect, useRef, useState } from 'react'

import { useElementRect } from '@/hooks/useElementRect'

import { Shape } from '../HomePromiseShape/HomePromiseShape'
import styles from './HomePromiseColumn.module.scss'

type ShapeProps = {
  brightCircle?: boolean
  setBrightenPosition?: (arg: { top: number; left: number }) => void
  setColumnPosition?: (arg: number) => void
  startingIndex?: number
  offset?: number
  rows?: number
}

export const ShapeColumn = ({
  brightCircle = false,
  setBrightenPosition,
  setColumnPosition,
  startingIndex = 0,
  offset = 0,
  rows = 0,
  ...props
}: ShapeProps) => {
  const [colRef, setColRef] = useState<HTMLElement | null>(null)
  const colSizeRef = useRef<HTMLDivElement>(null)
  const size = useElementRect(colSizeRef)
  useEffect(() => {
    if (setColumnPosition && colRef && size) {
      setColumnPosition(colRef.offsetLeft || 0)
    }
  }, [colRef, size, setColumnPosition])

  return (
    <div
      className={styles.column}
      style={{
        transform: `translate3d(0, calc(${
          offset - 1
        }px * var(--translate-factor, 100)), 0)`,
      }}
      ref={node => {
        setColRef(node)
        colSizeRef.current = node
      }}
      data-offset-left={colRef?.offsetLeft}
      {...props}
    >
      {[...Array(rows)].map((_, i) => {
        const shapeIndex = i + startingIndex
        return (
          <Shape
            setBrightenPosition={setBrightenPosition}
            key={i}
            shape={
              shapeIndex % 3 === 0
                ? 'square'
                : shapeIndex % 3 === 1
                  ? 'triangle'
                  : 'circle'
            }
            brighten={
              (brightCircle &&
                i === 2 &&
                clamp((offset - 0.25) * -5, 0.067, 1)) ||
              null
            }
          />
        )
      })}
    </div>
  )
}
