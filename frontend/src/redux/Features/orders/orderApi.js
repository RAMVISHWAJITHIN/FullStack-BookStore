import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import getBaseUrl from "../../../utilis/baseURL"
const ordersApi=createApi({
    reducerPath:'ordersApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/orders`,
        credentials:'include'
    }),
    tagTypes:['Orders'],
    endpoints:(builder)=>({
        createOrder:(builder.mutation) ({
            query:(newOrder)=>({
               url:"/",
               method:"POST",
               body:newOrder,
               credentials:'include',
            })
        })
    })
})

export const {  useCreateOrderMutation }=ordersApi
export default ordersApi