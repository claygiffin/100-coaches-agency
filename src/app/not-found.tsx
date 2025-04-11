import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | 100 Coaches Agency',
}

const NotFoundPage: NextPage = async () => {
  return (
    <main>
      <h1>
        <b>404:</b> Page not found
      </h1>
      <p>{`It looks like the page your looking for doesn\'t exist.`}</p>
    </main>
  )
}

export default NotFoundPage
