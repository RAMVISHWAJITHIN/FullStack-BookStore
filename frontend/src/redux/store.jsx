 import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/Cart/CartSlice'
 export const store=configureStore({
    reducer:{
        cart:cartReducer
    },
 })