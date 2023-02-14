import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Grocery = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Grocery & essentials</title>
        </Helmet>
      </HelmetProvider>
      <div>Grocery</div>
    </>
  )
}

export default Grocery