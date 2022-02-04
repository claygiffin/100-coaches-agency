import { css } from '@emotion/react'
import { ChangeEvent, Fragment, useEffect, useState } from 'react'

import { absoluteFill } from '../theme/mixins'
import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'

type FieldProps = {
  label: string
  onChange: (name: string, value: string) => void
  required: boolean
}

const MultilineTextField = ({
  label,
  onChange,
  required,
  ...props
}: FieldProps) => {
  const name = toSlug(label)

  const [shrink, setShrink] = useState(false)
  const [value, setValue] = useState('')
  const handleFocus = () => {
    if (!shrink) {
      setShrink(true)
    }
  }
  const handleBlur = () => {
    onChange(label, value)
    if (value.length > 0) {
      setShrink(true)
    } else {
      setShrink(false)
    }
  }
  useEffect(() => {
    if (value.length > 0) {
      setShrink(true)
    }
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const styles = {
    container: css`
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
      }
      &:focus-within:after {
        background-color: ${colors.goldTint1};
      }
    `,
    inputBase: css`
      background-color: #00000055;
    `,
    sizer: css`
      display: block;
      visibility: hidden;
      min-height: 6em;
    `,
    textArea: css`
      display: block;
      ${absoluteFill}
      box-sizing: border-box;
      resize: none;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      color: #fff;
    `,
    sizeArea: css`
      padding: 1.333em 0.75em 1em;
      line-height: 1.333;
    `,
    label: css`
      position: absolute;
      pointer-events: none;
      z-index: 2;
      top: 1.5835em;
      left: 0.75em;
      color: #ffffffcc;
      max-width: calc(100% - 1.5em);
      padding-right: 2px;
      line-height: 1.333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transform: translate3d(0, -0.667em, 0);
      transition: transform 200ms ease;
      transform-origin: 0 0;
      font-style: italic;
      font-weight: 300;
      ${shrink &&
      css`
        transform: translate3d(0, -1.333em, 0) scale3d(0.75, 0.75, 1);
        font-weight: 500;
        color: #ffffff88;
        div:focus-within > & {
          color: ${colors.goldTint1};
        }
      `}
      ${required &&
      css`
        &:after {
          content: '*';
          display: inline-block;
          font-size: 75%;
          margin-left: 0.125em;
          transform: translateY(-0.125em);
        }
      `}
    `,
  }

  return (
    <div css={styles.container} {...props}>
      <label htmlFor={name} css={styles.label}>
        {label}
      </label>
      <div css={styles.inputBase}>
        <span css={[styles.sizeArea, styles.sizer]}>
          {value.split(/\n/g).map((text, i) => (
            <Fragment key={i}>
              {text}
              <br />
            </Fragment>
          ))}
        </span>
        <textarea
          css={[styles.sizeArea, styles.textArea]}
          name={name}
          id={name}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export default MultilineTextField
