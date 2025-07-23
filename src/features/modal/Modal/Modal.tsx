'use client'

import { useRouter } from 'next/navigation'
import { type ComponentProps, useEffect, useRef, useState } from 'react'
import type { Metadata } from 'react-datocms'

import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'
import { classes } from '@/utils/css'

import styles from './Modal.module.scss'

type Props = ComponentProps<'dialog'> & {
  metaData?: Metadata
  variant?: 'DEFAULT' | 'ARTICLE' | 'FORM' | 'PROFILE' | 'VIDEOLIGHTBOX'
  onClose?: () => void
}

export function Modal({
  children,
  metaData,
  className,
  variant = 'DEFAULT',
  onClose,
  ...props
}: Props) {
  const router = useRouter()
  const [dialogRef, setDialogRef] = useState<HTMLDialogElement | null>(
    null
  )

  const [animating, setAnimating] = useState<string | undefined>()

  const openDuration = 600
  const closeDuration = 400

  const timeout = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    if (!dialogRef?.open) {
      dialogRef?.showModal()
      timeout.current = setTimeout(() => {
        setAnimating('OPEN')
      }, 10)
    }
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
      dialogRef?.close()
    }
  }, [dialogRef])

  const handleDismiss = () => {
    setAnimating('CLOSING')
    timeout.current = setTimeout(() => {
      if (onClose) {
        onClose()
      } else {
        router.back()
      }
    }, closeDuration)
  }

  useEscKeyFunction(handleDismiss)

  // Set and remove page title
  const initialTitle = useRef<string | undefined>(undefined)
  useEffect(() => {
    if (metaData) {
      initialTitle.current = document.title
      const title = metaData.title
      if (title) {
        document.title = title
      }
    }
    return () => {
      if (initialTitle.current) {
        document.title = initialTitle.current
      }
    }
  }, [metaData])

  return (
    <div data-variant={variant}>
      <dialog
        ref={setDialogRef}
        className={classes(styles.modal, className)}
        onClose={handleDismiss}
        data-animating={animating}
        style={{
          '--open-duration': `${openDuration}ms`,
          '--close-duration': `${closeDuration}ms`,
        }}
        {...props}
      >
        <button
          className={styles.backdrop}
          onClick={handleDismiss}
          tabIndex={-1}
          aria-hidden
        />
        <div className={styles.contentWrapper}>
          <button
            onClick={handleDismiss}
            className={styles.closeButton}
            aria-label="Close Modal"
          >
            <svg viewBox="0 0 30 30">
              <path d="M1 1L29 29" />
              <path d="M29 1L1 29" />
            </svg>
          </button>
          <div className={styles.content}>{children}</div>
        </div>
      </dialog>
    </div>
  )
}
