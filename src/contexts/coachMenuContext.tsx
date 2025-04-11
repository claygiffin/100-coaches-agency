'use client'

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface IContext {
  coachMenuIsOpen: boolean
  setCoachMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

const CoachMenuContext = createContext<IContext | undefined>(undefined)

export const useCoachMenuContext = () =>
  useContext(CoachMenuContext) as IContext

export const CoachMenuContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [coachMenuIsOpen, setCoachMenuIsOpen] = useState(false)

  return (
    <CoachMenuContext.Provider
      value={{
        coachMenuIsOpen,
        setCoachMenuIsOpen: value => setCoachMenuIsOpen(value),
      }}
    >
      {children}
    </CoachMenuContext.Provider>
  )
}
