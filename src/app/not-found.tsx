import type { Metadata, NextPage } from 'next'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'Page Not Found | 100 Coaches Agency',
}

const NotFoundPage: NextPage = async () => {
  const styles: { [name: string]: CSSProperties } = {
    main: {
      display: 'grid',
      minHeight: '60lvh',
      padding: 'var(--row-144) var(--margin)',
      alignContent: 'center',
      textAlign: 'center',
      justifyItems: 'center',
    },
  }
  return (
    <main style={styles.main}>
      <h1>
        <b>404:</b> Page not found
      </h1>
      <p>{`It looks like the page you're looking for doesn\'t exist.`}</p>
    </main>
  )
}

export default NotFoundPage
