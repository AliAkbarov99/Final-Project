import React from 'react'
import Admin_Navbar from '../../../Components/Admin-Navbar/Admin_Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Admin_Add = () => {
  return (
    <>
    
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add</title>
        </Helmet>
      </HelmetProvider>
    <Admin_Navbar/>
    </>
  )
}

export default Admin_Add