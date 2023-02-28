import React from 'react'
import registerStyle from "./Register.module.scss";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRef } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster, toast } from 'react-hot-toast'

const Register = () => {
  const navigate = useNavigate()

  const nameInp = useRef();
  const surnameInp = useRef();
  const emailInp = useRef();
  const passwordInp = useRef();
  const UserSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("First name is required!"),
    surname: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Last name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    password: Yup.string().min(8, "Too short!").required("Password is required!")
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
        axios.post("http://localhost:8080/users/register", {
          name: values.name,
          surname: values.surname,
          email: values.email,
          password: values.password
        }).then((res) => {
          if(res){
            toast.success("Register successfully!")
            nameInp.current.value = "";
            surnameInp.current.value = "";
            emailInp.current.value = "";
            passwordInp.current.value = "";
            
            setTimeout(() => {
              navigate("/login")
            }, "3000")
          }
          else{
            toast.error("User already exists!")
          }
        })
    },
  });
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Register</title>
        </Helmet>
      </HelmetProvider>

      <div id={registerStyle.register}>
        <div className={registerStyle.register__content}>
          <div className={registerStyle.register__content__header}>
            <Link to="/"><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png" alt="" /></Link>
            <h3>Create your Walmart account</h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
              ref={nameInp}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className={registerStyle.yup__error} style={{ color: "darkred" }}>{formik.errors.name}</div>
            ) : null}


            <label htmlFor="lastName">Last name</label>
            <input
              ref={surnameInp}
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {formik.errors.surname && formik.touched.surname ? (
              <div className={registerStyle.yup__error} style={{ color: "darkred" }}>{formik.errors.surname}</div>
            ) : null}


            <label htmlFor="lastName">Email</label>
            <input
              ref={emailInp}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={registerStyle.yup__error} style={{ color: "darkred" }}>{formik.errors.email}</div>
            ) : null}


            <label htmlFor="lastName">Create a password</label>
            <input
              ref={passwordInp}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className={registerStyle.yup__error} style={{ color: "darkred" }}>{formik.errors.password}</div>
            ) : null}


            <div className={registerStyle.register__check}>
              <input type="checkbox" />
              <span style={{ color: "#74767c" }}>Send me emails about new arrivals, hot items, daily savings, & more.</span>
            </div>
            <p style={{ color: "#74767c" }}>By clicking Create Account, you acknowledge you have read and agreed to our <a href="https://www.walmart.com/help/article/walmart-com-terms-of-use/3b75080af40340d6bbd596f116fae5a0" style={{ color: "#2e2f32" }}>Terms of Use</a> and <a href="https://corporate.walmart.com/privacy-security/walmart-privacy-notice" style={{ color: "#2e2f32" }}>Privacy Policy</a>.</p>


            <button type="submit" onClick={() => {



            }}>Create Account</button>
          </form>
        </div>
        <div className={registerStyle.footer}>
          <div className={registerStyle.footer__content}>
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
      </div>
      <Toaster />
    </>
  )
}

export default Register