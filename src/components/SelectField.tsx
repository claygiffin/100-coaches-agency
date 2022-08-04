import { css } from '@emotion/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'

export interface ISelectField {
  __typename: 'DatoCmsSelectField'
  label: string
  required: boolean
  options: {
    id: string
    label: string
    value: string
  }[]
}

interface Props extends Omit<ISelectField, '__typename'> {
  onChange: (name: string, value: string) => void
}

const SelectField = ({
  label,
  options = [],
  onChange,
  required = false,
}: Props) => {
  const name = toSlug(label)

  const [shrink, setShrink] = useState(false)
  const [value, setValue] = useState('')

  const handleShrink = () => {
    if (value.length > 0) {
      setShrink(true)
    } else {
      setShrink(false)
    }
  }
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const match = options.find(option => option.id === e.target.value)
    const idToValue = match?.value || match?.label || ''
    setValue(idToValue)
  }
  useEffect(() => {
    if (value.length > 0) {
      setShrink(true)
    }
  }, [value])

  useEffect(() => {
    onChange(name, value)
  }, [onChange, name, value])

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
    label: css`
      position: absolute;
      pointer-events: none;
      z-index: 2;
      bottom: 0;
      left: 0.75em;
      color: #ffffffcc;
      max-width: 100%;
      line-height: 1.333;
      padding-right: 2px;
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
    inputBase: css`
      background-color: #00000055;
    `,
    select: css`
      appearance: none;
      box-sizing: border-box;
      border: none;
      padding: 1.25em 0.75em 0.333em;
      line-height: 1.333;
      width: 100%;
      color: #fff;
      background-color: transparent;
      cursor: pointer;
      ${!value &&
      css`
        color: transparent;
      `}
    `,
    arrow: css`
      font-size: 125%;
      position: absolute;
      top: 50%;
      right: 0.5em;
      transform: translateY(-50%);
      pointer-events: none;
    `,
  }

  return (
    <div css={styles.container}>
      <label htmlFor={name} css={styles.label}>
        {label}
      </label>
      <BiChevronDown css={styles.arrow} />
      <div css={styles.inputBase}>
        <select
          css={styles.select}
          name={name}
          id={name}
          required={required}
          onChange={handleChange}
          onFocus={handleShrink}
          onBlur={handleShrink}
          defaultValue=""
        >
          <option value="" disabled aria-hidden>
            {label}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectField
