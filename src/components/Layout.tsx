import React from 'react'

import GlobalStyles from '../theme/GlobalStyles'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
