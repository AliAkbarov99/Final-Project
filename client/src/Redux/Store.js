import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";

export const Store = configureStore({
    reducer:{
        login: LoginSlice.reducer
    }
})