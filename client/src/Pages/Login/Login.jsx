import React, { useState } from 'react'
import loginStyle from "./Login.module.scss";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRef } from "react";
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux'
import {login} from '../../Redux/Slice/LoginSlice'
import { useNavigate } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data,setData] = useState(null)

  const emailInp = useRef();
  const passwordInp = useRef();
  const UserSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required!"),
    password: Yup.string().required("Password is required!")
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: UserSchema,
    onSubmit: async (values) => {
     try {
      await axios.post("http://localhost:8080/users/login",values).then((response)=>{
        setData(response.data.user)
        console.log(response.data.user);
        dispatch(login(response.data))
      })
      if(localStorage.getItem("token")){
      toast.success("Login successfully!")
      emailInp.current.value = "";
      passwordInp.current.value = "";
      
      setTimeout(() => {
        navigate("/")
      }, "3000")
      }
      else if(!localStorage.getItem("token")){
        toast.error("Email or password is incorrect!")
      }
     } catch (error) {
      toast.error("Email or password is incorrect!")
     }
    },
  });
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
        </Helmet>
      </HelmetProvider>

      <div id={loginStyle.login}>
        <div className={loginStyle.login__content}>
          <div className={loginStyle.login__content__header}>
            <Link to="/"><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt="" /></Link>
            <h3>Login your Walmart account</h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInp}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={loginStyle.yup__error} style={{ color: "darkred" }}>{formik.errors.email}</div>
            ) : null}


            <label htmlFor="lastName">Password</label>
            <input
              ref={passwordInp}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className={loginStyle.yup__error} style={{ color: "darkred" }}>{formik.errors.password}</div>
            ) : null}

            <p>Don't have an account? <span style={{ color: "#0071dc", fontWeight: "600",cursor:"pointer" }} onClick={()=>{
              window.location.href="/register"
            }}>Register</span></p>

            <div className={loginStyle.login__check}>
              <input type="checkbox" />
              <span style={{ color: "#2e2f32", fontWeight: "700", marginLeft: "10px" }}>Keep me signed in</span>
            </div>
            <p style={{ color: "#74767c" }}>By clicking Create Account, you acknowledge you have read and agreed to our <a href="https://www.walmart.com/help/article/walmart-com-terms-of-use/3b75080af40340d6bbd596f116fae5a0" style={{ color: "#2e2f32" }}>Terms of Use</a> and <a href="https://corporate.walmart.com/privacy-security/walmart-privacy-notice" style={{ color: "#2e2f32" }}>Privacy Policy</a>.</p>


            <button type="submit" onClick={() => {
              
            }}>Log in</button>
          </form>
        </div>
        <div className={loginStyle.footer}>
          <div className={loginStyle.footer__content}>
            <div>© 2023 Walmart. All Rights Reserved</div>
            <div>
              <span>Give feedback</span>
              <span>CA Privacy Rights</span>
              <span><img src="https://i5.walmartimages.com/dfwrs/76316474-d730/k2-_3c5ba298-4f19-46be-9fc3-ac49225d19bd.v1.png" alt="" /> Your Privacy Choices</span>
              <span>Request My Personal Information</span>
              <span>California Supply Chains Act</span>
            </div>
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  )
}

export default Login