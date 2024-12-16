import {createSlice} from '@reduxjs/toolkit'
const initialState={
    cartItems:[]
}
const CartSlice=createSlice({
    name:'cart',
    initialState, //calling initialState function
    reducers:{
        addToCart:(state,action)=>{
            const existingItem=state.cartItems.find(item=>item._id===action.payload._id)
            if(!existingItem){
                state.cartItems.push(action.payload)
                alert("item added successfully")
            }
            else{
                alert("Item already exists ")
            }
        }
    }
})

export const {addToCart}=CartSlice.actions
export  default CartSlice.reducer