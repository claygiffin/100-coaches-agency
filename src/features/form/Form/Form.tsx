'use client'

import {
  type ComponentPropsWithoutRef,
  type FormEventHandler,
  useRef,
  useState,
} from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { LoadingSpinner } from '@/features/ui'
import { useElementRect } from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import { FormSelectField } from '../FormFields/FormSelectField'
import { FormTextArea } from '../FormFields/FormTextArea'
import { FormTextField } from '../FormFields/FormTextField'
import styles from './Form.module.scss'
import { submitForm } from './actions'

type Props = ComponentPropsWithoutRef<'section'> & {
  data: Queries.FormFragment | null | undefined
  variant?: 'DARK' | 'LIGHT'
}

export const Form = ({
  data,
  variant = 'DARK',
  className,
  ...props
}: Props) => {
  const [formRef, setFormRef] = useState<HTMLFormElement | null>(null)
  const [successRef, setSuccessRef] = useState<HTMLElement | null>(null)

  const { height: formHeight } = useElementRect(formRef)
  const { height: successHeight } = useElementRect(successRef)

  const formData = useRef<{ [key: string]: string }>({})

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (name: string | undefined, value: string) => {
    if (name) {
      formData.current[name] = value
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    setSubmitting(true)
    const botField = e.currentTarget[
      'feed_after_midnight'
    ] as HTMLInputElement
    try {
      const response = await submitForm({
        siteName: '100 Coaches',
        n8nId: 'ecUJcWZ6EW2RZDsJ',
        formName: data?.formName || '',
        data: formData.current,
        recipients:
          data?.onSubmit
            .reduce((acc, val) => {
              if (val.__typename === 'SendEmailActionRecord') {
                acc.push(val.recipients)
              }
              return acc
            }, [] as string[])
            .join(', ') || '',
        botField: botField.checked,
        createHubspotContact:
          data?.onSubmit.find(
            action =>
              action.__typename === 'CreateHubspotContactActionRecord'
          ) && true,
      })
      if (response?.statusCode === 200) {
        setSubmitting(false)
        setSubmitted(true)
        data?.onSubmit.forEach(action => {
          if (action.__typename === 'OpenDocumentActionRecord') {
            const { document } = action
            window.open(
              `/documents/${document.id}/${document.filename}`,
              '_blank'
            )
          }
        })
      } else {
        setSubmitting(false)
        alert(
          `There was a problem with your submission. Please try again.`
        )
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section
      className={classes(styles.wrapper, className)}
      {...props}
      style={{
        '--success-height': successHeight + 'px',
        '--form-height': formHeight + 'px',
      }}
      data-submitted={
        submitted ? true : submitting ? 'submitting' : false
      }
      data-variant={variant}
    >
      <LoadingSpinner
        className={styles.spinner}
        color={'#fff'}
      />

      <div
        ref={node => setSuccessRef(node)}
        className={styles.successMessage}
      >
        <DatoStructuredText data={data?.successMessage} />
      </div>

      <form
        className={styles.form}
        ref={node => setFormRef(node)}
        name={data?.formName || undefined}
        method="post"
        onSubmit={handleSubmit}
      >
        {data?.formFields?.map(field => {
          switch (field?.__typename) {
            case 'FormTextFieldRecord':
              return (
                <FormTextField
                  data={field}
                  onChangeAction={handleChange}
                  key={field.id}
                />
              )
            case 'FormTextAreaRecord':
              return (
                <FormTextArea
                  data={field}
                  onChangeAction={handleChange}
                  key={field.id}
                />
              )
            case 'FormSelectFieldRecord':
              return (
                <FormSelectField
                  data={field}
                  onChangeAction={handleChange}
                  key={field.id}
                />
              )
          }
        })}
        <div
          className={styles.buttonWrap}
          data-submit
        >
          <div className={styles.button}>
            {/* Honeypot */}
            <input
              type="checkbox"
              id="feed_after_midnight"
              name="feed_after_midnight"
              tabIndex={-1}
              autoComplete={'off'}
              className={styles.feedAfterMidnight}
            />
            <span>{data?.submitButtonText}</span>
            <input
              name="submit"
              type="submit"
              aria-label={data?.submitButtonText || 'Submit'}
              value=""
            />
          </div>
        </div>
      </form>
    </section>
  )
}
