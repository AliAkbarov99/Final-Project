import MainRoot from '../Components/MainRoot'
import { createBrowserRouter } from 'react-router-dom'
import Entry from '../Pages/Entry/Entry'
import Home from '../Pages/Home/Home'
import Tech from '../Pages/Tech/Tech'
import Grocery from '../Pages/Grocery/Grocery'
import Walmart from '../Pages/Walmart+/Walmart'
import Detail from '../Pages/Detail/Detail'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Wishlist from '../Pages/Wishlist/Wishlist'
import Basket from '../Pages/Basket/Basket'
import Admin from '../Pages/Admin/Admin'
import Admin_Users from '../Pages/Admin/Admin_Users/Admin_Users'
import Admin_Products from '../Pages/Admin/Admin_Products/Admin_Products'
import Admin_Add from '../Pages/Admin/Admin_Add/Admin_Add'

export const Routes = createBrowserRouter([
    {
        path:"",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Entry/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/tech",
                element:<Tech/>
            },
            {
                path:"/grocery",
                element:<Grocery/>
            },
            {
                path:"/walmart+",
                element:<Walmart/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
        ]
    },

    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/admin",
        element:<Admin/>
    },
    {
        path:"/admin/users",
        element:<Admin_Users/>
    },
    {
        path:"/admin/products",
        element:<Admin_Products/>
    },
    {
        path:"/admin/addproduct",
        element:<Admin_Add/>
    }

])


export default Routes