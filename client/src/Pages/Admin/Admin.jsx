import React from 'react'
import './Admin.scss'
import {Link} from 'react-router-dom'
import Admin_Navbar from '../../Components/Admin-Navbar/Admin_Navbar'

const Admin = () => {
  return (
    <>
    <Admin_Navbar/>
    <div className='admin__main'>
        
    </div>
    <div className='admin__overlay'></div>
    </>
  )
}

export default Admin