import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <div>Home</div>
    </>
  )
}

export default Home