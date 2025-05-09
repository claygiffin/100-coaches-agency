'use client'

import { kebabCase } from 'lodash'
import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useId,
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

  useEffect(() => {
    if (value.length > 0) {
      setShrink(true)
    }
  }, [value])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const idToOptionObject = data?.options?.find(
        option => option?.id === e.target.value
      )
      setValue(idToOptionObject?.value || '')
      onChangeAction(name, idToOptionObject?.value || '')
    },
    [name, onChangeAction, data?.options]
  )

  const uniqueId = useId()

  const [labelRef, setLabelRef] = useState<HTMLElement | null>(null)
  const labelHeight = useElementHeight(labelRef)

  const [activeOptionRef, setActiveOptionRef] =
    useState<HTMLElement | null>(null)
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
        ref={node => setLabelRef(node)}
      >
        {data?.label}
      </label>
      <DropdownArrow className={styles.arrow} />
      {value && (
        <div
          className={classes(styles.input, styles.inputValue)}
          aria-hidden
          ref={node => setActiveOptionRef(node)}
        >
          {value}
        </div>
      )}
      <div className={styles.inputBase}>
        <select
          className={classes(styles.input, styles.select)}
          style={
            labelHeight && activeOptionHeight
              ? {
                  '--label-height': labelHeight + 'px',
                  '--active-option-height': activeOptionHeight + 'px',
                }
              : {}
          }
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
