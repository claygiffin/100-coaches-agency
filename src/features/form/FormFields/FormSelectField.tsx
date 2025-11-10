'use client'

import { kebabCase } from 'lodash'
import {
  type ChangeEvent,
  useCallback,
  useId,
  useRef,
  useState,
} from 'react'

import { DropdownArrow } from '@/features/ui'
import { useElementHeight } from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './FormFields.module.scss'

type Props = {
  data: Queries.FormSelectFieldFragment | null
  onChangeAction: (name: string | undefined, value: string) => void
}

export const FormSelectField = ({ data, onChangeAction }: Props) => {
  const name = data?.label ? kebabCase(data?.label) : undefined

  const [shrink, setShrink] = useState(false)
  const [value, setValue] = useState('')

  const handleShrink = () => {
    if (value.length > 0) {
      setShrink(true)
    } else {
      setShrink(false)
    }
  }

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const idToOptionObject = data?.options?.find(
        option => option?.id === e.target.value
      )
      setValue(idToOptionObject?.value || '')
      if ((idToOptionObject?.value.length || 0) > 0) {
        setShrink(true)
      }
      onChangeAction(name, idToOptionObject?.value || '')
    },
    [name, onChangeAction, data?.options]
  )

  const uniqueId = useId()

  const labelRef = useRef<HTMLLabelElement>(null)
  const labelHeight = useElementHeight(labelRef)

  const activeOptionRef = useRef<HTMLDivElement>(null)
  const activeOptionHeight = useElementHeight(activeOptionRef)

  return (
    <div
      className={styles.container}
      data-width={data?.width}
    >
      <label
        htmlFor={name + uniqueId}
        className={styles.label}
        data-shrink={shrink}
        data-required={data?.required}
        ref={labelRef}
      >
        {data?.label}
      </label>
      <DropdownArrow className={styles.arrow} />
      {value && (
        <div
          className={classes(styles.input, styles.inputValue)}
          aria-hidden
          ref={activeOptionRef}
        >
          {value}
        </div>
      )}
      <div className={styles.inputBase}>
        <select
          className={classes(styles.input, styles.select)}
          style={{
            '--label-height': labelHeight
              ? labelHeight + 'px'
              : undefined,
            '--active-option-height': activeOptionHeight
              ? activeOptionHeight + 'px'
              : undefined,
          }}
          name={name}
          id={name + uniqueId}
          required={data?.required || undefined}
          onChange={handleChange}
          onFocus={handleShrink}
          onBlur={handleShrink}
          defaultValue=""
        >
          <option
            value=""
            disabled
            aria-hidden
          >
            {data?.label}
          </option>
          {data?.options?.map(option => {
            return (
              <option
                key={option.id}
                value={option.id}
              >
                {option.value}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
