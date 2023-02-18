import React from 'react'
import basketStyle from './Basket.module.scss'
import {Link} from 'react-router-dom'
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
      <div className={basketStyle.basket}>
        <div className={basketStyle.container}>
          <h2>Cart <span>(0 items)</span></h2>
          <div className={basketStyle.basket__free}>
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff" alt="" />
            <h2>Time to start shopping!</h2>
            <h5>Your cart is empty</h5>
            <p>Hi, Ali A - fill it up with savings from your usual departments.</p>
            <div>
              <Link to="/tech"><button>Shop Electronics</button></Link>
            </div>
          </div>
          <div className={basketStyle.basket__main}>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket