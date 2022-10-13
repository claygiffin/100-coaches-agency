import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import { colors } from '../theme/variables'
import Form from './Form'
import Lightbox from './Lightbox'
import Seo from './Seo'

const ContactLightbox = () => {
  const { contactForm } = useStaticQuery(graphql`
    query {
      contactForm: datoCmsContactForm {
        form {
          ...FormFragment
        }
        lightboxHeading
        lightboxBodyNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  const styles = {
    formContainer: css`
      pointer-events: all;
      background: linear-gradient(to top right, #222, #555);
      padding: var(--gutter-sm) var(--gutter-md);
      box-sizing: border-box;
      width: calc(100% - 1.5rem);
      max-width: 60ch;
      color: white;
      margin: 0 0.75rem;
    `,
    heading: css`
      font-size: var(--fs-48);
      font-weight: 325;
      margin: 0.5em 0 0;
      em {
        font-style: normal;
        color: ${colors.goldTint1};
      }
    `,
    body: css`
      font-size: var(--fs-16);
      margin-bottom: 2em;
    `,
    form: css`
      margin-bottom: 2.5rem;
    `,
  }
  return (
    <Lightbox slug="/contact">
      <Seo title={contactForm.lightboxHeading.replace(/<[^>]>/g, '')} />
      <div css={styles.formContainer}>
        <h2
          css={styles.heading}
          dangerouslySetInnerHTML={{
            __html: contactForm.lightboxHeading,
          }}
        />
        <div
          css={styles.body}
          dangerouslySetInnerHTML={{
            __html:
              contactForm.lightboxBodyNode.childMarkdownRemark.html,
          }}
        />
        <Form css={styles.form} data={contactForm.form[0]} />
      </div>
    </Lightbox>
  )
}

export default ContactLightbox
