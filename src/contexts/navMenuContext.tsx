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
  navMenuIsOpen: boolean
  setNavMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

const NavMenuContext = createContext<IContext | undefined>(undefined)

export const useNavMenuContext = () =>
  useContext(NavMenuContext) as IContext

export const NavMenuContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)

  return (
    <NavMenuContext.Provider
      value={{
        navMenuIsOpen,
        setNavMenuIsOpen: value => setNavMenuIsOpen(value),
      }}
    >
      {children}
    </NavMenuContext.Provider>
  )
}
