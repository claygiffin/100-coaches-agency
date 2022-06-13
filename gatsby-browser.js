import React from 'react'

import { LightboxProvider } from './src/context/LightboxContext'

export const wrapRootElement = ({ element }) => (
  <LightboxProvider>{element}</LightboxProvider>
)
