import React, { useEffect, useState } from 'react'
import Admin_Navbar from '../../../Components/Admin-Navbar/Admin_Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Space, Table, Tag } from 'antd';
import axios from 'axios'
const Admin_Users = () => {



  const delBtn = {
    backgroundColor: "red",
    padding: "8px 20px",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    border: "none",
    fontWeight: "700"
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button style={delBtn} onClick={() => {
            axios.delete(`http://localhost:8080/users/${record._id}`)
            setData(data.filter(x => x._id !== record._id))
          }}>Delete</button>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/users/get").then(res => {
      setData(res.data)
      console.log(res.data);
    })
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Users</title>
        </Helmet>
      </HelmetProvider>
      <Admin_Navbar />
      <Table style={{ padding: "0px 90px" }} columns={columns} dataSource={data} />
    </>
  )
}

export default Admin_Users





