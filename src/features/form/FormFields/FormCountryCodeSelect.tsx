'use client'

import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import {
  type CountryCode,
  getCountries,
  getCountryCallingCode,
} from 'libphonenumber-js'
import {
  type ChangeEvent,
  type ComponentProps,
  useCallback,
  useId,
  useState,
} from 'react'

import { DropdownArrow } from '@/features/ui'
import { classes } from '@/utils/css'

import styles from './FormFields.module.scss'

type Props = ComponentProps<'div'> & {
  label: string
  defaultValue?: CountryCode
  required: boolean | null | undefined
  onChangeAction(value: CountryCode): void
  onFocusAction(): void
}

export const FormCountryCodeSelect = ({
  label,
  defaultValue,
  required,
  onChangeAction,
  onFocusAction,
}: Props) => {
  countries.registerLocale(enLocale)
  const countryOptions = getCountries()
    .reduce(
      (acc, countryCode) => {
        const countryName = countries.getName(
          countryCode.toUpperCase(),
          'en'
        )
        const callingCode = `+${getCountryCallingCode(countryCode)}`
        if (countryName) {
          acc.push({
            label: `${countryName} (${callingCode})`,
            countryCode,
            callingCode,
          })
        }
        return acc
      },
      [] as {
        label: string
        countryCode: CountryCode
        callingCode: string
      }[]
    )
    .sort((a, b) => a.label.localeCompare(b.label))

  const [value, setValue] = useState<CountryCode>(defaultValue || 'US')

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const countryCode = e.target.value as CountryCode
      setValue(countryCode)
      onChangeAction(countryCode)
    },
    [onChangeAction]
  )

  const uniqueId = useId()

  return (
    <div className={classes(styles.countryCodeSelect)}>
      <DropdownArrow className={styles.arrow} />
      {value && (
        <div
          className={classes(styles.input, styles.inputValue)}
          aria-hidden
        >
          {
            countryOptions.find(
              country => country.countryCode === value
            )?.callingCode
          }
        </div>
      )}
      <select
        className={classes(styles.input, styles.select)}
        name={label}
        id={label + uniqueId}
        required={required || undefined}
        onChange={handleChange}
        onFocus={onFocusAction}
        defaultValue=""
      >
        <option
          value=""
          disabled
          aria-hidden
        >
          {label}
        </option>
        {countryOptions?.map(option => {
          return (
            <option
              key={option.countryCode}
              value={option.countryCode}
            >
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
