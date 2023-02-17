import React from 'react'
import techStyle from './Tech.module.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Tech = () => {
  return (

    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technologies</title>
        </Helmet>
      </HelmetProvider>
      <div className={techStyle.tech}>
        <div className={techStyle.container}>
          <div className={techStyle.tech__header}>
            <div className={techStyle.tech__header__top}>
              / Laptops
            </div>
            <div className={techStyle.tech__header__bottom}>
              <img src="https://advertising.walmart.com/thunder/assets/template-build-service/release/campaigns/advertising.walmart.com/d1bcc3b4-9132-11ed-9d60-42010a161204/creatives/20230110T233805.232Z/optimizedPhotos/45a37384-8fce-48d0-adc6-8586257320c5.png"
               alt="" />
               <p>Ship free, no order min* <span>As often as you need.</span></p>
            </div>
            <div className={techStyle.tech__header__sort}>
              <button>Sort by price</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech