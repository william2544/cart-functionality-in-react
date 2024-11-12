import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const {product,quantity}=action.payload
            const existingItem = (state.items).find(item=>item.id === product.id)
            if (existingItem) {
                console.log('the item exist');
                existingItem.quantity +=quantity
            }else{
                state.items.push({...product,quantity})
            }
        },
        removeFromCart(state,action){
            const nextItem = state.items.filter(item=>item.id !== action.payload.id)
            state.items =nextItem

        },
        decreaseQuatity(state,action){
            const  currentItem = state.items.find(item=>item.id === action.payload.id)
            if (currentItem.quantity > 1 ) {
                currentItem.quantity -=1;
            }else if (currentItem.quantity === 1) {
                const nextItem = state.items.filter(item=>item.id !== action.payload.id)
                state.items =nextItem
            }
        },
        increaseQuantity(state,action){
            const currentItem = state.items.find(item=>item.id === action.payload.id)
            if (currentItem) {
                currentItem.quantity +=1;
            }
        },
        clearCart(state,action){
            state.items=[]
        },
        getTotalCart(state,action){
            let {total,quantity} = state.items.reduce((cartTotal,cartItem)=>{
                const {price,quantity}=cartItem;
                const itemTotal= price*quantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += quantity;

                return cartTotal
            },
            {
                total:0,
                quantity:0
            }
            )
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})

export const {addToCart,removeFromCart,decreaseQuatity,increaseQuantity,clearCart,getTotalCart} = cartSlice.actions
export default cartSlice.reducer