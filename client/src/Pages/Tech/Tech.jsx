import React from 'react'
import techStyle from './Tech.module.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Tech = () => {
  return (

    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technologies</title>
        </Helmet>
      </HelmetProvider>
      <div id='tech'>Tech</div>
    </>
  )
}

export default Tech