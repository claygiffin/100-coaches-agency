import { ReactNode, createContext, useState } from 'react'

const defaultValue = {
  lightbox: null,
  setLightbox: () => null,
}

interface IContext {
  lightbox: null | string
  setLightbox: (value: string | null) => void
}

const Context = createContext<IContext>(defaultValue)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [lightbox, setLightbox] = useState<string | null>(null)
  return (
    <Context.Provider
      value={{
        lightbox,
        setLightbox: (value: string | null) => setLightbox(value),
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
