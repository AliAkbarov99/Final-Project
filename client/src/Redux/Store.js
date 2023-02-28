import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";
import BasketSlice from "./Slice/BasketSlice"

export const Store = configureStore({
    reducer:{
        login: LoginSlice.reducer,
        basket: BasketSlice.reducer
    }
})