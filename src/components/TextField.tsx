import { css } from '@emotion/react'
import { ChangeEvent, useEffect, useState } from 'react'

import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'

type FieldProps = {
  label: string
  type: string
  onChange: (name: string, value: string) => void
  required: boolean
}

const TextField = ({ label, type, onChange, required }: FieldProps) => {
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

  const getFormattedPhoneNum = (e: any) => {
    let output = ''
    const inputType = e.nativeEvent.inputType
    const input = e.target.value
    input.replace(
      /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,
      (_: string, g1: string, g2: string, g3: string) => {
        if (g1.length) {
          output += '(' + g1
          if (g1.length === 3) {
            output += ')'
            if (g2.length) {
              output += ' ' + g2
              if (g2.length === 3) {
                output += '-'
                if (g3.length) {
                  output += g3
                }
              }
            }
          }
        }
        if (inputType === 'deleteContentBackward') {
          if (input.length === 4 || input.length === 9) {
            output = output.slice(0, -2)
          }
          if (input.length === 6 || input.length === 10) {
            output = output.slice(0, -1)
          }
        }
      }
    )
    return output
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v
    if (type === 'tel') {
      v = getFormattedPhoneNum(e)
    } else {
      v = e.target.value
    }
    setValue(v)
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
    input: css`
      box-sizing: border-box;
      border: none;
      padding: 1.25em 0.75em 0.333em;
      line-height: 1.333;
      width: 100%;
      color: #fff;
      background-color: transparent;
    `,
    label: css`
      position: absolute;
      pointer-events: none;
      z-index: 2;
      bottom: 0;
      left: 0.75em;
      color: #ffffffcc;
      max-width: 100%;
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
    `,
    required: css`
      display: inline-block;
      font-size: 75%;
      margin-left: 0.125em;
      transform: translateY(-0.125em);
    `,
  }

  return (
    <div css={styles.container}>
      <label htmlFor={name} css={styles.label}>
        {label}
        {required && <span css={styles.required}>*</span>}
      </label>
      <div css={styles.inputBase}>
        <input
          css={styles.input}
          value={value}
          name={name}
          id={name}
          type={type}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export default TextField
