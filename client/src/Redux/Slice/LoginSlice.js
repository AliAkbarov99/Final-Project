import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:'login',
    initialState:{
        login:false
    },
    reducers:{
        login:(state,action)=>{
            state.login = true
            localStorage.setItem("token",action.payload.token)
            localStorage.setItem("logged user name",action.payload.user.name)
            localStorage.setItem("logged user surname",action.payload.user.surname)
        },
        logout:(state,action)=>{
            state.login = false
            localStorage.removeItem("token")
            localStorage.removeItem("logged user name")
            localStorage.removeItem("logged user surname")
        }
    }
})


export const { login, logout } = LoginSlice.actions
export default LoginSlice;