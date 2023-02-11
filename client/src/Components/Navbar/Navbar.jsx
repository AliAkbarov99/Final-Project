import React, { useState } from 'react'
import navStyle from './Navbar.module.scss'
import { AiOutlineAppstore } from 'react-icons/ai'
import { RiApps2Line } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { BsHouseDoor } from 'react-icons/bs'
import { TfiReceipt } from 'react-icons/tfi'
import { FcMultipleInputs } from 'react-icons/fc'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { TbMessageCircle2 } from 'react-icons/tb'

import { Link } from 'react-router-dom'


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)





  return (
    <div className={navStyle.navbar} id="navbar">
      <div className={navStyle.navbar__top}>
        <div className={navStyle.navbar__top__left}>
          <Link to='/'><div>
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt="" />
          </div></Link>
          <div>
            <AiOutlineAppstore />Departaments
          </div>
          <div onClick={() => {
            setSidebar(!sidebar)
          }}>
            <RiApps2Line />
            Services
          </div>
        </div>
        <div className={navStyle.navbar__top__middle}>
          <div>
            <input type="text" placeholder='Search everything at Walmart online and in store' />
            <span><AiOutlineSearch /></span>
          </div>
        </div>
        <div className={navStyle.navbar__top__right}>
          <Link to="/wishlist">
            <div className={navStyle.navbar__top__right__wish}>
              <span>
                <AiOutlineHeart />
              </span>
              <div>
                <p>Reorder</p>
                <h5>My Items</h5>
              </div>
            </div>
          </Link>
          <Link to="/login">
            <div className={navStyle.navbar__top__right__account}>
              <span>
                <FaRegUser />
              </span>
              <div>
                <p>Sign In</p>
                <h5>Account</h5>
              </div>
            </div>
          </Link>
          <Link to="/basket">
            <div className={navStyle.navbar__top__right__basket}>
              <AiOutlineShoppingCart />
              <p>$0.00</p>
              <span>0</span>
            </div>
          </Link>
        </div>
      </div>
      <div className={navStyle.navbar__bottom}>
        <div className={navStyle.navbar__bottom__left}>
          <div>
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" alt="" />
            <p>How do you want your items? <BsChevronDown /></p>
            <span><GoLocation /> Sacramento, 95829 <BsHouseDoor /> Sacramento Supercenter</span>
          </div>
        </div>
        <div className={navStyle.navbar__bottom__right}>
          <Link to='/'>Deals</Link>
          <Link to='/tech'>Tech</Link>
          <Link to='/home'>Home</Link>
          <Link to='/grocery'>Grocery & essentials</Link>
          <Link to='/walmart+'>Walmart+</Link>
        </div>
      </div>

      <div className={navStyle.navbar__sidebar} style={sidebar ? { visibility: "visible", opacity: "1", transform: "translateX(320px)" } : { visibility: "hidden", opacity: "0", transform: "translateX(0px)" }}>
        <div className={navStyle.navbar__sidebar__top}>
          <img src="https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png" alt="" />
          <button>Sign in or create account</button>
        </div>
        <div className={navStyle.navbar__sidebar__bottom}>
          <ul>
            <li>
              <img src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg" alt="" />
              <span>Walmart+</span>
            </li>
            <hr />
            <li><TfiReceipt /> <span>Purchase History</span></li>
            <li><FcMultipleInputs /><span>My Items</span></li>
            <li><FaRegUser /><span>Account</span></li>
            <hr />
            <li><AiOutlineQuestionCircle /><span>Help</span></li>
            <hr />
            <li><AiOutlineHeart /><span>Lists</span></li>
            <li><TbMessageCircle2 /><span>Give Feedback</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar