import React from 'react'
import techStyle from './Tech.module.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Link} from 'react-router-dom'

import { BsHeart } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'



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

        <div className={techStyle.tech__laptops}>
          <div className={techStyle.container}>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            <div className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><Link to="/detail"><img src="https://i5.walmartimages.com/asr/086a4dd0-276e-4622-92cf-51a9c04023f8.b7e975ec378dcf412641c69b605d858a.jpeg?odnHeight=392&odnWidth=290&odnBg=FFFFFF" alt="" /></Link></div>
              <div><button><BsPlusLg/> Add</button></div>
              <div><span>$899.00</span></div>
              <p>Acer Nitro 5 , 15.6" Full HD IPS 144Hz Display, 11th Gen Intel Core i5-11400H, NVIDIA GeForce RTX 3050Ti Laptop GPU, 16GB DDR4 ...</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Tech