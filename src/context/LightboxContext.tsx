import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

const defaultValue = {
  lightbox: null,
  setLightbox: () => null,
}

interface IContext {
  lightbox: null | string
  setLightbox: Dispatch<SetStateAction<string | null>>
}

const LightboxContext = createContext<IContext>(defaultValue)

export const LightboxProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [lightbox, setLightbox] = useState<string | null>(
    defaultValue.lightbox
  )

  return (
    <LightboxContext.Provider
      value={{
        lightbox,
        setLightbox: value => setLightbox(value),
      }}
    >
      {children}
    </LightboxContext.Provider>
  )
}

export default LightboxContext
