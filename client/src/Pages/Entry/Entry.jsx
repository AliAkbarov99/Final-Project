import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Entry = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Walmart.com | Save Money</title>
        </Helmet>
      </HelmetProvider>
      <div>Entry</div>
    </>
  )
}

export default Entry