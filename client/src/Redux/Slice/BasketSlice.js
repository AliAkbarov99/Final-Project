import { createSlice } from "@reduxjs/toolkit";

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
            console.log(state.basket);
        },
        increaseCount:(state,action)=>{
            let element = state.basket.find(x => x._id == action.payload._id)
            let indexOfTarget = state.basket.indexOf(element)
            state.basket[indexOfTarget].count = state.basket[indexOfTarget].count +1
        },
        decreaseCount:(state,action)=>{
            let element = state.basket.find(x => x._id == action.payload._id)
            let indexOfTarget = state.basket.indexOf(element)
            if(state.basket[indexOfTarget].count == 1){
                state.basket.splice(indexOfTarget,1)
            }
            else{
                state.basket[indexOfTarget].count = state.basket[indexOfTarget].count - 1
            }
            
        }
    }
})


export const { addBasket,decreaseCount,increaseCount } = BasketSlice.actions
export default BasketSlice;