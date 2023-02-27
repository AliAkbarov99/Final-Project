import './Admin-Navbar.scss'
import { Link } from 'react-router-dom'

import React from 'react'

const Admin_Navbar = () => {
  return (
    <>
    <div id='admin__navbar'>
        <div className="admin__navbar__left">
            <Link to="/admin">ADMIN</Link>
        </div>
        <div className="admin__navbar__right">
            <ul>
                <li><Link to="/admin/users">Users</Link></li>
                <li><Link to="/admin/products">Products</Link></li>
                <li><Link to="/admin/addproduct">Add Product</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Admin_Navbar