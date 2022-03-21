import { css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'

import { mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import ScrollToggle from './ScrollToggle'

type PropTypes = {
  onOpen: () => void
  onClose: () => void
}

const BurgerIcon = ({ onOpen, onClose }: PropTypes) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  const escFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setOpen(false)
      }
    },
    [setOpen]
  )

  useEffect(() => {
    open && document.addEventListener('keydown', escFunction, false)
    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [open, escFunction])

  useEffect(() => {
    if (open) {
      onOpen()
    } else {
      onClose()
    }
  }, [open, onOpen, onClose])

  const styles = {
    burgerIcon: css`
      position: relative;
      align-self: center;
      margin-right: var(--gutter-md);
      width: 4rem;
      height: 4rem;
      border: none;
      appearance: none;
      background-color: transparent;
      cursor: pointer;
      pointer-events: all;
      border-radius: 50%;
      z-index: 10;
      display: none;
      ${mq().ls} {
        display: block;
      }
      span {
        position: absolute;
        height: 3px;
        width: 2rem;
        left: 50%;
        top: calc(50% - 1px);
        background-color: ${colors.goldTint1};
        ${!open &&
        css`
          &:nth-of-type(1) {
            transition: transform 150ms ease 150ms,
              opacity 0ms ease 150ms;
            transform: translate(-50%, -0.75rem);
          }
          &:nth-of-type(2) {
            transition: transform 150ms ease;
            transform: translate(-50%, 0);
          }
          &:nth-of-type(3) {
            transition: transform 150ms ease;
            transform: translate(-50%, 0);
          }
          &:nth-of-type(4) {
            transition: transform 150ms ease 150ms,
              opacity 0ms ease 150ms;
            transform: translate(-50%, 0.75rem);
          }
        `}
        ${open &&
        css`
          &:nth-of-type(1) {
            transition: transform 150ms ease, opacity 0ms ease 150ms;
            transform: translate(-50%, 0);
            opacity: 0;
          }
          &:nth-of-type(2) {
            transition: transform 150ms ease 150ms;
            transform: translate(-50%, 0) rotate(45deg);
            transition-delay: 150ms;
          }
          &:nth-of-type(3) {
            transition: transform 150ms ease 150ms;
            transform: translate(-50%, 0) rotate(-45deg);
            transition-delay: 150ms;
          }
          &:nth-of-type(4) {
            transition: transform 150ms ease, opacity 0ms ease 150ms;
            transform: translate(-50%, 0);
            opacity: 0;
          }
        `}
      }
      @media (hover: hover) {
        transition: background-color 300ms ease;
        &:hover {
          background-color: white;
        }
      }
    `,
  }
  return (
    <button
      aria-label="Menu"
      css={styles.burgerIcon}
      onClick={toggleOpen}
      onKeyPress={toggleOpen}
    >
      <span />
      <span />
      <span />
      <span />
      {open && <ScrollToggle />}
    </button>
  )
}

export default BurgerIcon
