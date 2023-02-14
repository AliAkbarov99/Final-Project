import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Basket = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Basket</title>
        </Helmet>
      </HelmetProvider>
      <div>Basket</div>
    </>
  )
}

export default Basket