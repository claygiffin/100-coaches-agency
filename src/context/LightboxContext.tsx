import { ReactNode, createContext, useState } from 'react'

const defaultValue = {
  lightbox: null,
  setLightbox: () => null,
}

interface IContext {
  lightbox: null | string
  setLightbox: (value: string | null) => void
}

const LightboxContext = createContext<IContext>(defaultValue)

export const LightboxProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [lightbox, setLightbox] = useState<string | null>(null)
  return (
    <LightboxContext.Provider
      value={{
        lightbox,
        setLightbox: (value: string | null) => setLightbox(value),
      }}
    >
      {children}
    </LightboxContext.Provider>
  )
}

export default LightboxContext
