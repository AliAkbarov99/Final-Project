import React from 'react'
import basketStyle from './Basket.module.scss'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Basket = () => {

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const d = new Date();
  const today = d.getDate() + 1;

  let currentDate = (`${monthNames[d.getMonth()] + ' ' + today}`)
  console.log(currentDate);
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
          <div className={basketStyle.basket__cart}><h2>Cart <span>(0 items)</span></h2></div>
          {/* <div className={basketStyle.basket__free}>
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff" alt="" />
            <h2>Time to start shopping!</h2>
            <h5>Your cart is empty</h5>
            <p>Hi, Ali A - fill it up with savings from your usual departments.</p>
            <div>
              <Link to="/tech"><button>Shop Electronics</button></Link>
            </div>
          </div> */}
          <div className={basketStyle.basket__main}>
            <div className={basketStyle.basket__main__products}>
              <div className={basketStyle.basket__main__products__top}>
                <div className={basketStyle.basket__main__products__top__left}>
                  <img src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" alt="" />
                </div>
                <div className={basketStyle.basket__main__products__top__right}>
                  <div>
                    <h2>Shipping, arrives tomorrow , {currentDate}</h2>
                    <span>95829</span>
                  </div>
                  <div>
                    Want it as soon as <p>today?</p>
                  </div>
                </div>
              </div>
              <div className={basketStyle.basket__main__products__bottom}>
                <div className={basketStyle.basket__main__products__bottom__item}>
                  <p style={{marginBottom:"20px",fontSize:"12px"}}>Sold and shipped by <strong>Walmart</strong></p>
                  <div className={basketStyle.basket__main__products__bottom__item__content}>
                    <div className={basketStyle.basket__main__products__bottom__item__left}>
                      <img src="https://i5.walmartimages.com/asr/52559c05-8ae0-4f9a-833e-e47f804f644a.ce427b265eceac9547366a33b2d54245.jpeg?odnHeight=96&odnWidth=96&odnBg=FFFFFF" alt="" />
                    </div>
                    <div className={basketStyle.basket__main__products__bottom__item__right}>
                      <p>Frito-Lay Snacks Classic Mix Variety Pack, 42</p>
                      <span style={{fontWeight:"700"}}>$20.46</span>
                      <span><img src="https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg" alt="" />Free 90-day returns</span>
                      <span> <img src="https://i5.walmartimages.com/dfw/63fd9f59-fc02/1be09571-b0a8-4894-8001-e7a71e306c46/v1/gifting-icon.svg" alt="" /> Gift Eligible</span>
                    </div>
                  </div>
                </div>
                <div className={basketStyle.basket__main__products__bottom__item}>
                  <p style={{marginBottom:"20px",fontSize:"12px"}}>Sold and shipped by <strong>Walmart</strong></p>
                  <div className={basketStyle.basket__main__products__bottom__item__content}>
                    <div className={basketStyle.basket__main__products__bottom__item__left}>
                      <img src="https://i5.walmartimages.com/asr/52559c05-8ae0-4f9a-833e-e47f804f644a.ce427b265eceac9547366a33b2d54245.jpeg?odnHeight=96&odnWidth=96&odnBg=FFFFFF" alt="" />
                    </div>
                    <div className={basketStyle.basket__main__products__bottom__item__right}>
                      <p>Frito-Lay Snacks Classic Mix Variety Pack, 42</p>
                      <span style={{fontWeight:"700"}}>$20.46</span>
                      <span><img src="https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg" alt="" />Free 90-day returns</span>
                      <span> <img src="https://i5.walmartimages.com/dfw/63fd9f59-fc02/1be09571-b0a8-4894-8001-e7a71e306c46/v1/gifting-icon.svg" alt="" /> Gift Eligible</span>
                    </div>
                  </div>
                </div>
                <div className={basketStyle.basket__main__products__bottom__item}>
                  <p style={{marginBottom:"20px",fontSize:"12px"}}>Sold and shipped by <strong>Walmart</strong></p>
                  <div className={basketStyle.basket__main__products__bottom__item__content}>
                    <div className={basketStyle.basket__main__products__bottom__item__left}>
                      <img src="https://i5.walmartimages.com/asr/52559c05-8ae0-4f9a-833e-e47f804f644a.ce427b265eceac9547366a33b2d54245.jpeg?odnHeight=96&odnWidth=96&odnBg=FFFFFF" alt="" />
                    </div>
                    <div className={basketStyle.basket__main__products__bottom__item__right}>
                      <p>Frito-Lay Snacks Classic Mix Variety Pack, 42</p>
                      <span style={{fontWeight:"700"}}>$20.46</span>
                      <span><img src="https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg" alt="" />Free 90-day returns</span>
                      <span> <img src="https://i5.walmartimages.com/dfw/63fd9f59-fc02/1be09571-b0a8-4894-8001-e7a71e306c46/v1/gifting-icon.svg" alt="" /> Gift Eligible</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={basketStyle.basket__main__checkout}>
              <div className={basketStyle.basket__main__checkout__top} style={{ padding: "16px" }}>
                <button>Continue to checkout</button>
              </div>
              <div className={basketStyle.basket__main__checkout__bottom}>
                <div>
                  <span><h5>Subtotal</h5> (1 item)</span>
                  <span>$20.46</span>
                </div>
                <div>
                  <span><h5>Shipping</h5></span>
                  <span style={{color:"#2a8703",fontSize:"15px"}}>Free</span>
                </div>

                <div style={{padding:"15px 0px"}}>
                  <h4>Estimated total</h4>
                  <h3>$27.45</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket