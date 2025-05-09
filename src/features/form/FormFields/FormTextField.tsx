'use client'

import { AsYouType, type CountryCode } from 'libphonenumber-js/max'
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

import { FormCountryCodeSelect } from './FormCountryCodeSelect'
import styles from './FormFields.module.scss'

type Props = {
  data: Queries.FormTextFieldFragment | null
  onChangeAction: (name: string | undefined, value: string) => void
}

export const FormTextField = ({ data, onChangeAction }: Props) => {
  const name = data?.label ? kebabCase(data.label) : undefined
  const [shrink, setShrink] = useState(false)
  const [value, setValue] = useState('')
  const [countryCodeValue, setCountryCodeValue] =
    useState<CountryCode>('US')
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
      onChangeAction(name, e.target.value)
    },
    [name, onChangeAction]
  )

  // const formatter = useMemo(() => {
  //   return new AsYouType(countryCodeValue)
  // }, [countryCodeValue])

  const handleChangePhone = useCallback(
    (input: string, countryCode: CountryCode) => {
      const formatter = new AsYouType(countryCode)
      const formattedInput = formatter.input(input)
      setValue(formattedInput)

      // Combine country code and national number for full E.164 format
      const fullNumber = formatter.getNumber()?.number || ''
      onChangeAction(name, fullNumber)
    },
    [name, onChangeAction, countryCodeValue]
  )

  const uniqueId = useId()

  const [labelRef, setLabelRef] = useState<HTMLElement | null>(null)
  const labelHeight = useElementHeight(labelRef)

  return (
    <div
      className={styles.container}
      data-width={data?.width}
      data-is-i18l={data?.fieldType === 'tel' && data?.isInternational}
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
        {data?.fieldType === 'tel' && data?.isInternational && (
          <FormCountryCodeSelect
            label={'Country Code'}
            required={data.required}
            onChangeAction={countryCode => {
              setCountryCodeValue(countryCode)
              handleChangePhone(value, countryCode)
            }}
            onFocusAction={() => setShrink(true)}
          />
        )}
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
              ? e => handleChangePhone(e.target.value, countryCodeValue)
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
