'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoIosMail } from 'react-icons/io'

import { useElementWidth } from '@/hooks/useElementRect'

import styles from './ContactButton.module.scss'

type Props = {
  text: string
}

export const ContactButton = ({ text }: Props) => {
  const [textRef, setTextRef] = useState<HTMLElement | null>(null)
  const textWidth = useElementWidth(textRef) || 0

  return (
    <Link
      href="/forms/contact"
      className={styles.button}
      style={{ '--text-width': textWidth + 'px' }}
    >
      <IoIosMail className={styles.icon} />
      <span className={styles.text}>
        <span ref={node => setTextRef(node)}>{text}</span>
      </span>
    </Link>
  )
}
