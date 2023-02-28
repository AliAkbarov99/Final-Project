import React, { useState } from 'react'
import navStyle from './Navbar.module.scss'
import { AiOutlineAppstore } from 'react-icons/ai'
import { RiApps2Line } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { BsHouseDoor } from 'react-icons/bs'
import { TfiReceipt } from 'react-icons/tfi'
import { FcMultipleInputs } from 'react-icons/fc'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { TbMessageCircle2 } from 'react-icons/tb'
import { HiBars3 } from 'react-icons/hi2'
import { AiOutlineLaptop } from 'react-icons/ai'
import { CiApple } from 'react-icons/ci'
import { MdOutlineChair } from 'react-icons/md'
import { useSelector,useDispatch } from 'react-redux'
import {logout} from '../../Redux/Slice/LoginSlice'


import { Link } from 'react-router-dom'


const Navbar = () => {
  const dispatch = useDispatch()
  const login = useSelector(state=>state.login.login)
  console.log(login);
  const [sidebar, setSidebar] = useState(false)
  const [size, setSize] = useState(false)
  const [delivery, setDelivery] = useState(false)
  window.onresize = function (e) {
    let windowSize = window.innerWidth
    if (windowSize <= 1200) {
      setSize(true)
    }
    else {
      setSize(false)
    }
  }

  // if(login){
  //   let loggedUser = 
  //   console.log(loggedUser);
  // }
  return (
    <div className={navStyle.navbar} id="navbar">
      <div className={navStyle.navbar__top}>
        <div className={navStyle.navbar__top__left}>
          <Link to='/' className={navStyle.navbar__top__left__item}><div>
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt="" />
          </div></Link>
          <div className={navStyle.navbar__top__left__item}>
            <AiOutlineAppstore />Departaments
          </div>
          <div className={navStyle.navbar__top__left__item}>
            <RiApps2Line />
            Services
          </div>
          <div className={navStyle.navresponsive}>
            <HiBars3 onClick={() => {
              setSidebar(true)
            }} />
            <Link to="/"><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt="" /></Link>

          </div>
        </div>
        <div className={navStyle.navbar__top__middle}>
          <div>
            <input type="text" placeholder={size ? "Search Walmart" : "Search everything at Walmart online and in store"} />
            <span><AiOutlineSearch /></span>
          </div>
        </div>
        <div className={navStyle.navbar__top__right}>
          
            <div className={navStyle.navbar__top__right__wish}>
              <span>
                <AiOutlineHeart />
              </span>
              <div>
                <p>Reorder</p>
                <h5>My Items</h5>
              </div>
            </div>
          
          <Link to="/login" onClick={()=>{
            dispatch(logout())
          }}>
            <div className={navStyle.navbar__top__right__account}>
              <span>
                <FaRegUser />
              </span>
              <div style={{width:"50px"}}>
                <p> {login ? (`Hi, ${localStorage.getItem("logged user name")+" "+localStorage.getItem("logged user surname")[0]}`) : "Sign In"} </p>
                <h5>{login ? "Log out" : "Account"}</h5>
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
          <div className={navStyle.navbar__bottom__left__item} onClick={() => {
            setDelivery(!delivery)
          }}>
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" alt="" />
            <p>How do you want your items? <BsChevronDown style={delivery ? { display: "none" } : { display: "block" }} /><BsChevronUp style={delivery ? { display: "block" } : { display: "none" }} /></p>
          </div>
          <span><GoLocation /> Sacramento, 95829 <BsHouseDoor /> Sacramento Supercenter</span>

          <div className={navStyle.delivery__dropdown} style={delivery ? { display: "block" } : { display: "none" }}>
            <div className={navStyle.delivery__dropdown__top}>
              <div>
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png" alt="" />
                <p>Shipping</p>
              </div>
              <div>
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png" alt="" />
                <p>Pickup</p>
              </div>
              <div>
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png" alt="" />
                <p>Delivery</p>
              </div>
            </div>
            <div className={navStyle.delivery__dropdown__middle}>
              <div className={navStyle.delivery__dropdown__middle__content}>
                <div><GoLocation /></div>
                <div>
                  <h5>Add an address for shipping and delivery</h5>
                  <p>Sacramento, CA 95829</p>
                </div>
              </div>
              <div>
                <button>Add address</button>
              </div>
            </div>
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
      <div className={navStyle.sidebar__overlay} style={sidebar ? { display: "block" } : { display: "none" }} onClick={() => { setSidebar(false) }}></div>
      <div className={navStyle.navbar__sidebar} style={sidebar ? { visibility: "visible", opacity: "1", transform: "translateX(320px)" } : { visibility: "hidden", opacity: "0", transform: "translateX(0px)" }}>
        <div className={navStyle.navbar__sidebar__top}>
          <img src="https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png" alt="" onClick={() => {
            setSidebar(false)
          }} />
          <Link to="/login" onClick={()=>{
            dispatch(logout())
          }}><button>{login ? "Log out" : "Sign in or create account"}</button></Link>
        </div>
        <div className={navStyle.navbar__sidebar__bottom}>
          <ul>
            <li>
              <img src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg" alt="" />
              <Link to="/walmart+"><span>Walmart+</span></Link>
            </li>
            <hr />
            <li><TfiReceipt /> <span>Purchase History</span></li>
            <li><FcMultipleInputs /><Link to="/wishlist"><span>My Items</span></Link></li>
            <li><FaRegUser /><Link to="/login"><span>Account</span></Link></li>
            <hr />
            <li><AiOutlineLaptop /><Link to="/tech"><span>Tech</span></Link></li>
            <li><CiApple /><Link to="/grocery"><span>Grocery</span></Link></li>
            <li><MdOutlineChair /><Link to="/home"><span>Home</span></Link></li>
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