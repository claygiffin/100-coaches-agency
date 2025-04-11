import { type ReactNode } from 'react'

import { CoachMenuContextProvider } from '@/contexts/coachMenuContext'

type Props = {
  children?: ReactNode | undefined
}

export const ContextWrapper = ({ children }: Props) => {
  return <CoachMenuContextProvider>{children}</CoachMenuContextProvider>
}
