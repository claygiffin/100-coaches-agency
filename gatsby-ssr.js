import React from 'react'

import { Provider } from './src/context/Context'

export const wrapRootElement = ({ element }) => (
  <Provider>{element}</Provider>
)
