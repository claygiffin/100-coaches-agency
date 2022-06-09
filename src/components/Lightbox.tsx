import { css, keyframes } from '@emotion/react'
import {
  Fragment,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

import Context from '../context/Context'
import useFocusTrap from '../hooks/useFocusTrap'
import closeX from '../images/close-x.svg'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import ScrollToggle from './ScrollToggle'

type LightboxProps = {
  onClick?: () => void
  slug: string
  children: ReactNode
}

const Lightbox = ({
  onClick = () => {
    return
  },
  slug,
  children,
}: LightboxProps) => {
  const isBrowser = typeof window !== `undefined`

  const context = useContext(Context)

  const portalTarget = isBrowser
    ? document.getElementById('lightbox-container')
    : null

  const url = ('/' + slug + '/').replace('//', '/')

  const setUrl = () => {
    window.history.pushState(null, '', url)
  }

  const [open, setOpen] = useState(false)
  const handleOpen = (e: SyntheticEvent) => {
    e.preventDefault()
    setUrl()
    setOpen(true)
    onClick()
    context.setLightbox(url)
  }

  const [closing, setClosing] = useState(false)
  const handleBack = useCallback(() => {
    if (open && !closing) {
      window.history.back()
    }
  }, [closing, open])

  const handleClose = useCallback(() => {
    if (open) {
      console.log('handleClose')
      setClosing(true)
      context.lightbox === url && context.setLightbox(null)
      setTimeout(() => {
        setClosing(false)
      }, 300)
      setTimeout(() => {
        setOpen(false)
      }, 301)
    }
  }, [open, context, url])

  useEffect(() => {
    window.addEventListener('popstate', handleClose, { passive: true })
    return () => {
      window.removeEventListener('popstate', handleClose)
    }
  })

  const escFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        handleBack()
      }
    },
    [handleBack]
  )

  useEffect(() => {
    open && document.addEventListener('keydown', escFunction, false)
    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [open, escFunction])

  const [lightboxRef, setLightboxRef] = useState<HTMLDivElement | null>(
    null
  )
  const lightboxRefSetter = useCallback((node: HTMLDivElement) => {
    setLightboxRef(node)
  }, [])
  useFocusTrap(lightboxRef, open)

  const animations = {
    blurIn: keyframes`
      0% {
        background-color: transparent;
      }
      99% {
        background-color: #f8f8f8dd;
        backdrop-filter: blur(0);
      }
      100% {
        background-color: #f8f8f8dd;
        backdrop-filter: blur(0.333rem);
      }
    `,
    blurOut: keyframes`
      0% {
        backdrop-filter: blur(0.333rem);
        background-color: #f8f8f8dd;
      }
      1% {
        backdrop-filter: blur(0);
        background-color: #f8f8f8dd;
      }
      100% {
        background-color: transparent;
      }
    `,
    contentIn: keyframes`
      from {
        transform: translate3d(0, min(33%, 12rem), 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    `,
    contentOut: keyframes`
      from {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
      to {
        transform: translate3d(0, min(33%, 12rem), 0);
        opacity: 0;
      }
    `,
  }
  const styles = {
    button: css`
      ${absoluteFill}
      opacity: 0;
    `,
    lightbox: css`
      ${baseGrid}
      grid-template-rows: var(--gutter-md) auto var(--gutter-mlg);
      position: fixed;
      top: 0;
      left: 0;
      overflow-y: scroll;
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);
      z-index: 11;
    `,
    content: css`
      pointer-events: none;
      position: relative;
      grid-column: 2 / -2;
      grid-row: 2 / 3;
      width: fit-content;
      box-sizing: border-box;
      justify-self: center;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      align-self: center;
      opacity: 0;
      animation-name: ${animations.contentIn};
      animation-duration: 290ms;
      animation-timing-function: east-out;
      animation-fill-mode: forwards;
      ${(closing || context.lightbox !== url) &&
      css`
        opacity: 1;
        animation-name: ${animations.contentOut};
        animation-delay: 10ms;
        animation-timing-function: east-in;
      `}
      ${mq().s} {
        grid-column: 1 / -1;
        width: auto;
        box-sizing: border-box;
      }
    `,
    closeButton: css`
      position: relative;
      pointer-events: all;
      position: fixed;
      overflow: visible;
      top: 0;
      right: 0;
      width: 1.25rem;
      height: 1.25rem;
      padding: 1rem 1rem 1.5rem 1.5rem;
      cursor: pointer;
      transition: transform 400ms cubic-bezier(0.33, 3, 0.25, 0.5);
      color: #555;
      line {
        stroke: currentColor;
        stroke-width: 1.5;
        transition: color 300ms ease;
      }
      circle {
        fill: #fff;
      }
      @media (hover: hover) {
        opacity: 0;
        pointer-events: none;
        ${mq().ml} {
          display: block;
        }
        &:hover {
          transform: scale3d(1.25, 1.25, 1.25);
          color: ${colors.gold};
        }
        &:focus {
          opacity: 1;
        }
      }
    `,
    background: css`
      position: fixed;
      width: 100vw;
      height: calc(100 * var(--vh, 1vh));
      top: 0;
      left: 0;
      z-index: 10;
      animation-name: ${animations.blurIn};
      animation-duration: 300ms;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      ${closing &&
      css`
        animation-name: ${animations.blurOut};
        background-color: transparent;
        backdrop-filter: none;
      `}
    `,
    backgroundClose: css`
      position: relative;
      grid-row: 1 / 4;
      grid-column: 1 / -1;
      z-index: 0;
      cursor: url(${closeX}) 22.5 22.5, auto;
      ${closing &&
      css`
        display: none;
      `}
    `,
  }
  return (
    <Fragment>
      <a
        css={styles.button}
        onClick={handleOpen}
        aria-label="Open Lightbox"
        href={url}
      >
        <span />
      </a>
      {open &&
        portalTarget &&
        createPortal(
          <Fragment>
            <ScrollToggle />
            <div css={styles.background} />
            <div css={styles.lightbox} ref={lightboxRefSetter}>
              <div
                css={styles.backgroundClose}
                onClick={handleBack}
                aria-hidden
              />
              <div css={styles.content}>
                <button aria-hidden />
                {children}
              </div>
              <svg
                css={styles.closeButton}
                aria-label="Close Lightbox"
                onClick={handleBack}
                onKeyPress={handleBack}
                tabIndex={0}
                width="15px"
                height="15px"
                viewBox="0 0 15 15"
              >
                <circle r="15" cx="7.5" cy="7.5" />
                <line
                  x1="0.535714286"
                  y1="0.535714286"
                  x2="14.4642857"
                  y2="14.4642857"
                />
                <line
                  x1="14.4642857"
                  y1="0.535714286"
                  x2="0.535714286"
                  y2="14.4642857"
                />
              </svg>
            </div>
          </Fragment>,
          portalTarget
        )}
    </Fragment>
  )
}

export default Lightbox
