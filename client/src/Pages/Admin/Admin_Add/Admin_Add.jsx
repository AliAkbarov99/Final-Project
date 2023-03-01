import React from 'react'
import addStyle from './Admin_Add.module.scss'
import Admin_Navbar from '../../../Components/Admin-Navbar/Admin_Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Yup from "yup";
import axios from "axios";
import { useRef } from "react";
import { Toaster, toast } from 'react-hot-toast'
import { useFormik } from "formik";
const Admin_Add = () => {
  const nameInp = useRef();
  const priceInp = useRef();
  const imageInp = useRef();
  const descInp = useRef();
  const TechSchema = Yup.object().shape({
    name: Yup.string().min(1, "Too Short!").max(10, "Too Long!").required("Product name is required!"),
    price: Yup.string().required("Price is required!"),
    image: Yup.string().required("Image link is required!"),
    desc: Yup.string().min(4, "Too short!").max(140,"Too long!").required("Description is required!")
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
      desc: "",
    },
    validationSchema: TechSchema,
    onSubmit: async (values) => {
      try {
        axios.post("http://localhost:8080/tech/createproduct", {
          name: values.name,
          price: values.price,
          image: values.image,
          description: values.desc,
          count:1
        }).then((response) => {
          toast.success("Product added successfully!")
          nameInp.current.value = "";
          priceInp.current.value = "";
          imageInp.current.value = "";
          descInp.current.value = "";

        }).catch(error => {
          toast.error("Something went wrong!")
        })
      } catch (error) {
        toast.error("Something went wrong!")
      }
    },
  });
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add</title>
        </Helmet>
      </HelmetProvider>
      <Admin_Navbar />
      <div className={addStyle.container}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Product Name</label>
        <input
          ref={nameInp}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className={addStyle.yup_error} style={{ color: "darkred" }}>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="price">Price</label>
        <input
          ref={priceInp}
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.surname}
        />
        {formik.errors.price && formik.touched.price ? (
          <div className={addStyle.yup_error} style={{ color: "darkred" }}>{formik.errors.price}</div>
        ) : null}
        <label htmlFor="image">Image link</label>
        <input
          ref={imageInp}
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.errors.image && formik.touched.image ? (
          <div className={addStyle.yup_error} style={{ color: "darkred" }}>{formik.errors.image}</div>
        ) : null}
        <label htmlFor="desc">Description</label>
        <input
          ref={descInp}
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.desc && formik.touched.desc ? (
          <div className={addStyle.yup_error} style={{ color: "darkred" }}>{formik.errors.desc}</div>
        ) : null}
        <button type="submit">Add Product</button>
      </form>
      <Toaster/>
      </div>
    </>
  )
}
export default Admin_Add