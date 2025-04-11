'use client'

import Markdown from 'markdown-to-jsx'
import { type ComponentProps } from 'react'

type AllowedElementTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props<T extends AllowedElementTypes> =
  T extends AllowedElementTypes
    ? ComponentProps<T> & {
        as?: T
      }
    : never

export const MarkdownHeading = <T extends AllowedElementTypes>({
  as = 'h2',
  children,
  ...props
}: Props<T>) => {
  const Wrapper = as
  return (
    <Markdown
      options={{
        overrides: {
          p: ({ children }) => children,
        },
        wrapper: Wrapper,
        forceWrapper: true,
      }}
      {...props}
    >
      {children?.toString().replace(/\\n/, '<br />') || ''}
    </Markdown>
  )
}
