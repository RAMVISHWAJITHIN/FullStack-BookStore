import {createSlice} from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
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
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "item added to cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            else{
                Swal.fire({
                    title: "Already item added to the cart?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "ok"
                  })
            }
        },
        removeFromCart:(state,action)=>{
         state.cartItems=state.cartItems.filter(item=>item._id!==action.payload._id)
        },
        clearCart:(state)=>{
            state.cartItems=[]
        }
    }
})

export const {addToCart,removeFromCart,clearCart}=CartSlice.actions
export  default CartSlice.reducer