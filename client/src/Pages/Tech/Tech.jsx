import React, { useEffect, useState } from 'react'
import techStyle from './Tech.module.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Link} from 'react-router-dom'
import { BsHeart } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import axios from 'axios'
import { addBasket } from '../../Redux/Slice/BasketSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

const Tech = () => {
  const dispatch = useDispatch()
  const[data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/tech/get").then((response)=>{
      setData(response.data)
    })
  },[])
  function sortProducts(data){
 
    let unSortedData=[]
    if(data[0].price>data[1].price ){
      unSortedData= data.sort((a,b)=>a.price-b.price)
    }else
    unSortedData= data.sort((a,b)=>b.price-a.price)
    setData([...unSortedData])
  
}
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
              <button onClick={()=>{
                sortProducts(data)
              }}>Sort by price</button>
            </div>
          </div>
        </div>
        <div className={techStyle.tech__laptops}>
          <div className={techStyle.container}>
            {data && data.map(item=>{
              return <div key={item._id} className={techStyle.tech__laptops__card}>
              <div><BsHeart/></div>
              <div><img src={item.image} alt="product image" /></div>
              <div><button onClick={()=>{
                dispatch(addBasket({
                  ...item,
                  count:1
                }))
              }}><BsPlusLg/> Add</button></div>
              <div><span>${item.price}.00</span></div>
              <p>{item.description}</p>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech