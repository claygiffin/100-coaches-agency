import type { ComponentProps, ElementType } from 'react'

export const srcSetCandidates = (
  ...{ width, breakpoints = [1440, 1260, 1080, 720, 540, 360, 180] }: {
    width: number
    breakpoints?: number[]
  }
) => {
  return breakpoints.map(size => size / width)
}
export const focalPoint = (focalPoint: { x: number; y: number }) => {
  const safeFocalPointX = focalPoint ? focalPoint.x : 0.5
  const safeFocalPointY = focalPoint ? focalPoint.y : 0.5
  return `${safeFocalPointX * 100}% ${safeFocalPointY * 100}%`
}

type AsProp<T extends ElementType> = {
  as?: T
}

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P)

export type PolymorphicComponentProps<
  T extends ElementType,
  Props extends object = Record<string, never>,
> = Props & AsProp<T> & Omit<ComponentProps<T>, PropsToOmit<T, Props>>

export const createThemeIndex = (start = -1) => {
  type Action = { type: 'INCREASE'; by?: number } | { type: 'RESET' }
  let index = start
  return {
    dispatch: (action: Action) => {
      switch (action.type) {
        case 'INCREASE':
          index += action.by ?? 1
          break
        case 'RESET':
          index = start
          break
      }
    },
    next: () => ++index,
    value: index,
  }
}
