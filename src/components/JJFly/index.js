import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

let JJFly = ({children}) => {
  return (
    <div id='jjfly'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default JJFly