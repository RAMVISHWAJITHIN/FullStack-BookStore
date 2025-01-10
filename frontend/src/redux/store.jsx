 import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/Cart/CartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import booksApi from './Features/books/booksApi'
 export const store=configureStore({
    reducer:{
        cart:cartReducer,
        [booksApi.reducerPath]:booksApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware),
 })
 setupListeners(store.dispatch)