import React from 'react'
import footerStyle from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <ul>
        <li>All Departments</li>
        <li>Store Directory</li>
        <li>Careers</li>
        <li>Our Company</li>
        <li>Sell on Walmart.com</li>
        <li>Help</li>
        <li>COVID-19 Vaccine Scheduler</li>
        <li>Product Recalls</li>
        <li>Accessibility</li>
        <li>Tax Exempt Program</li>
      </ul>
      <p>© 2023 Walmart. All Rights Reserved.</p>
    </div>
  )
}

export default Footer