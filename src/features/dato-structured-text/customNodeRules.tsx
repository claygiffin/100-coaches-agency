import { renderNodeRule } from 'datocms-structured-text-to-plain-text'
import { isLink, isParagraph } from 'datocms-structured-text-utils'
import Link from 'next/link'

export const noEmptyParagraphsRule = renderNodeRule(
  isParagraph,
  ({ node, children, key }) => {
    const isEmpty =
      (
        node.children?.[0] as {
          type: string
          value: string
        }
      ).value === ''
    if (isEmpty) return
    return <p key={key}>{children}</p>
  }
)

export const linksRule = renderNodeRule(
  isLink,
  ({ node, children, key }) => {
    const isInternal =
      node.url.startsWith('/') || node.url.startsWith('#')
    return (
      <Link
        key={key}
        href={node.url}
        target={isInternal ? undefined : '_blank'}
        rel={isInternal ? undefined : 'noreferrer'}
        {...node.meta}
      >
        {children}
      </Link>
    )
  }
)
