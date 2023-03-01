import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BasketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
    },
    reducers: {
        addBasket: (state, action) => {
            let element = state.basket.find(x => x._id == action.payload._id)
            if (element) {
                let indexOfTarget = state.basket.indexOf(element)
                state.basket[indexOfTarget].count++
            }
            else {
                state.basket.push(action.payload)
            }
        },
        clearBasket: (state,action) =>{
            state.basket = []
            action.payload = []
        },
        removeItem: (state,action) => {
            state.basket.filter(x=>x._id!==action.payload._id)
        }
    }
})
export const { addBasket,clearBasket,removeItem } = BasketSlice.actions
export default BasketSlice;