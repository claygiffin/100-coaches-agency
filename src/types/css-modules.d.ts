import 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
declare module '*.module.css' {
  const content: Record<string, string>
  export default content
}
declare module '*.module.scss' {
  const content: Record<string, string>
  export default content
}
