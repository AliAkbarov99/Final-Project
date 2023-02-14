import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Walmart = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Walmart+</title>
        </Helmet>
      </HelmetProvider>
      <div>Walmart</div>
    </>
  )
}

export default Walmart