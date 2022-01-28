import { SerializedStyles, css } from '@emotion/react'
import { Fragment, ReactNode } from 'react'

import GlobalStyles from '../theme/GlobalStyles'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
  mainCss?: SerializedStyles
}

const Layout = ({ children, mainCss }: LayoutProps) => {
  const styles = {
    main: css`
      position: relative;
    `,
  }
  return (
    <Fragment>
      <GlobalStyles />
      <main css={[styles.main, mainCss]}>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
