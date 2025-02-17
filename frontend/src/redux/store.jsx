 import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/Features/Cart/CartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import booksApi from './Features/books/booksApi'
import ordersApi from './Features/orders/orderApi'
 export const store=configureStore({
    reducer:{
        cart:cartReducer,
        [booksApi.reducerPath]:booksApi.reducer,
        [ordersApi.reducerPath]:ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware,ordersApi.middleware),
 })
 setupListeners(store.dispatch)