'use client'

import { renderNodeRule } from 'datocms-structured-text-to-plain-text'
import { isHeading } from 'datocms-structured-text-utils'
import {
  type ComponentProps,
  type ElementType,
  useRef,
  useState,
} from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { useElementHeight } from '@/hooks'

import styles from './AccordionItem.module.scss'

type Props = ComponentProps<'li'> & {
  data: Queries.AccordionItemFragment
  headingLevel?: 2 | 3
}

export const AccordionItem = ({
  data,
  headingLevel = 2,
  ...props
}: Props) => {
  const Heading = `h${headingLevel}` as ElementType
  const [isOpen, setOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const bodyHeight = useElementHeight(bodyRef)
  return (
    <li
      className={styles.item}
      data-is-open={isOpen}
      style={{ '--body-height': bodyHeight + 'px' }}
      {...props}
    >
      <button
        className={styles.button}
        onClick={() => setOpen(prev => !prev)}
      >
        <Heading className={styles.heading}>{data.heading}</Heading>
        <div className={styles.buttonIcon} />
      </button>
      <div className={styles.bodyContainer}>
        <div
          ref={bodyRef}
          className={styles.body}
        >
          <DatoStructuredText
            data={data.body}
            customNodeRules={[
              renderNodeRule(isHeading, ({ children, key }) => {
                const HeadingTag = `h${headingLevel + 1}` as ElementType
                return (
                  <HeadingTag
                    className={styles.bodyHeading}
                    key={key}
                  >
                    {children}
                  </HeadingTag>
                )
              }),
            ]}
          />
        </div>
      </div>
    </li>
  )
}
