import React from 'react'
import './Admin.scss'
import {Link} from 'react-router-dom'
import Admin_Navbar from '../../Components/Admin-Navbar/Admin_Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Admin = () => {
  return (
    <>

    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin</title>
        </Helmet>
      </HelmetProvider>
    <Admin_Navbar/>
    <div className='admin__main'>
        
    </div>
    <div className='admin__overlay'></div>
    </>
  )
}

export default Admin