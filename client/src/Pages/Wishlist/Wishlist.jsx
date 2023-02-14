import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Wishlist = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wishlist</title>
        </Helmet>
      </HelmetProvider>
      <div>Wishlist</div>
    </>
  )
}

export default Wishlist