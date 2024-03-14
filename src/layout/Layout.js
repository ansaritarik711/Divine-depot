import React from 'react'
import Header from '../constant/Header'
import Footer from '../constant/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout