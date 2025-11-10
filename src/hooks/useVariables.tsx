'use client'

import { useCallback, useSyncExternalStore } from 'react'

const subscribe = () => () => {}

const serverCssVarReader = () => undefined

const clientCssVarReader = (name: string) => {
  const style = getComputedStyle(document.documentElement)
  const variable = style.getPropertyValue(name)
  return variable?.trim() || undefined
}

export const useVariables = () => {
  const cssVarReader = useSyncExternalStore(
    subscribe,
    () => clientCssVarReader,
    () => serverCssVarReader
  )

  const cssVar = useCallback(
    (name: string) => cssVarReader(name),
    [cssVarReader]
  )

  const getBreakpoint = useCallback(
    (name: string) => {
      const raw = cssVar(`--breakpoint-${name}`)
      const n = raw ? Number(raw) : NaN
      return Number.isFinite(n) ? n : undefined
    },
    [cssVar]
  )

  const getColor = useCallback(
    (name: string) => cssVar(`--color-${name}`),
    [cssVar]
  )

  return { getBreakpoint, getColor }
}
