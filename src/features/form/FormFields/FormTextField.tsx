'use client'

import { kebabCase } from 'lodash'
import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react'

import { useElementHeight } from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './FormFields.module.scss'

type Props = {
  data: Queries.FormTextFieldFragment | null
  onChange: (name: string | undefined, value: string) => void
}

export const FormTextField = ({ data, onChange }: Props) => {
  const name = data?.label ? kebabCase(data.label) : undefined
  const [shrink, setShrink] = useState(false)
  const [value, setValue] = useState('')
  const handleFocus = () => {
    if (!shrink) {
      setShrink(true)
    }
  }
  const handleBlur = () => {
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

  const handleChangeText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      onChange(name, e.target.value)
    },
    [name, onChange]
  )

  const handleChangePhone = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
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
      setValue(() => getFormattedPhoneNum(e))
      onChange(name, getFormattedPhoneNum(e))
    },
    [name, onChange]
  )

  const uniqueId = useId()

  const [labelRef, setLabelRef] = useState<HTMLElement | null>(null)
  const labelHeight = useElementHeight(labelRef)

  return (
    <div
      className={styles.container}
      data-width={data?.width}
    >
      <label
        htmlFor={name + uniqueId}
        className={styles.label}
        ref={node => setLabelRef(node)}
        data-shrink={shrink}
        data-required={data?.required}
      >
        {data?.label}
      </label>
      <div className={styles.inputBase}>
        <input
          className={classes(styles.input, styles.textField)}
          style={
            labelHeight
              ? {
                  '--label-height': labelHeight + 'px',
                }
              : {}
          }
          value={value}
          name={name}
          id={name + uniqueId}
          type={data?.fieldType || undefined}
          required={data?.required || undefined}
          onChange={
            data?.fieldType === 'tel'
              ? handleChangePhone
              : handleChangeText
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
          inputMode={data?.fieldType === 'zip' ? 'numeric' : undefined}
        />
      </div>
    </div>
  )
}
