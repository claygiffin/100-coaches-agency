'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { IoIosMail } from 'react-icons/io'

import { useElementWidth } from '@/hooks/useElementRect'

import styles from './ContactButton.module.scss'

type Props = {
  text: string
}

export const ContactButton = ({ text }: Props) => {
  const textRef = useRef<HTMLElement>(null)
  const textWidth = useElementWidth(textRef) || 0

  return (
    <Link
      href="/contact"
      className={styles.button}
      style={{ '--text-width': textWidth + 'px' }}
    >
      <IoIosMail className={styles.icon} />
      <span className={styles.text}>
        <span ref={textRef}>{text}</span>
      </span>
    </Link>
  )
}
