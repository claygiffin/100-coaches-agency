import { type ReactNode } from 'react'

import { CoachMenuContextProvider } from '@/contexts/coachMenuContext'
import { NavMenuContextProvider } from '@/contexts/navMenuContext'

type Props = {
  children?: ReactNode | undefined
}

export const ContextWrapper = ({ children }: Props) => {
  return (
    <NavMenuContextProvider>
      <CoachMenuContextProvider>{children}</CoachMenuContextProvider>
    </NavMenuContextProvider>
  )
}
