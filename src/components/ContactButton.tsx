import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { IoChatbubbleEllipses } from 'react-icons/io5'

import { useElementWidth } from '../hooks/useElementRect'
import { colors } from '../theme/variables'
import ContactLightbox from './ContactLightbox'

type Props = {
  text: string
}

const ContactButton = ({ text }: Props) => {
  const [textRef, setTextRef] = useState(null)
  const textRefSetter = useCallback(node => {
    setTextRef(node)
  }, [])

  const textWidth = useElementWidth(textRef)

  const styles = {
    button: css`
      position: relative;
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 5;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.1em;
      color: #fff;
      background: linear-gradient(
        45deg,
        ${colors.goldShade2},
        ${colors.goldShade1},
        ${colors.gold}
      );
      font-size: var(--fs-15);
      font-weight: 400;
      padding: 0.75em;
      border-radius: 1.75em;
    `,
    icon: css`
      display: block;
      font-size: 175%;
    `,
    text: css`
      width: 0;
      box-sizing: content-box;
      overflow: hidden;
      white-space: nowrap;
      transition: width 300ms ease;
      > span {
        display: inline-block;
        padding-left: 0.5em;
        padding-right: 0.5em;
      }
      @media (hover: hover) {
        button:hover > & {
          width: ${textWidth}px;
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
        }
      }
    `,
  }
  return (
    <button css={styles.button}>
      <IoChatbubbleEllipses css={styles.icon} />
      <span css={styles.text}>
        <span ref={textRefSetter}>{text}</span>
      </span>
      <ContactLightbox />
    </button>
  )
}

export default ContactButton
