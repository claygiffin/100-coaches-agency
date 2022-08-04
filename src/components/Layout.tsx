import { SerializedStyles, css } from '@emotion/react'
import { Fragment, ReactNode } from 'react'

import GlobalStyles from '../theme/GlobalStyles'
import ContactButton from './ContactButton'
import Footer from './Footer'
import Nav from './Nav'

type LayoutProps = {
  children: ReactNode
  mainCss?: SerializedStyles | SerializedStyles[]
  homeNav?: boolean
}

const Layout = ({ children, mainCss, homeNav }: LayoutProps) => {
  const styles = {
    main: css`
      position: relative;
      background-color: #fff;
    `,
  }
  return (
    <Fragment>
      <GlobalStyles />
      <Nav homeNav={homeNav} />
      <main css={[styles.main, mainCss]}>{children}</main>
      <Footer />
      <ContactButton text="Work With Us" />
      <div id="lightbox-container" />
    </Fragment>
  )
}

export default Layout
