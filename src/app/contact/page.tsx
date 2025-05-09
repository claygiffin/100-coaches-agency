import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { Form, FormFragment } from '@/features/form'
import {
  CompaniesSection,
  CompaniesSectionFragment,
} from '@/features/page-sections'
import { MarkdownHeading } from '@/features/ui'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './contactPage.module.scss'

export const dynamic = 'force-static'

const query = gql`
  query ContactPage {
    contactPage {
      heading
      intro {
        value
      }
      form {
        ...Form
      }
      companiesSection {
        ...CompaniesSection
      }
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${FormFragment}
  ${CompaniesSectionFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { contactPage },
  } = await datoRequest<Queries.ContactPageQuery>({
    query,
  })
  return toNextMetadata(contactPage?._seoMetaTags || [])
}

const ContactPage: NextPage = async () => {
  const {
    data: { contactPage },
  } = await datoRequest<Queries.ContactPageQuery>({
    query,
  })
  return (
    <main>
      <section className={styles.content}>
        <MarkdownHeading
          as="h1"
          className={styles.heading}
        >
          {contactPage?.heading || ''}
        </MarkdownHeading>
        <div className={styles.intro}>
          <DatoStructuredText data={contactPage?.intro} />
        </div>
        <Form
          className={styles.form}
          data={contactPage?.form}
          variant={'LIGHT'}
        />
      </section>
      <CompaniesSection
        data={contactPage?.companiesSection}
        variant={'ALT1'}
      />
    </main>
  )
}

export default ContactPage
