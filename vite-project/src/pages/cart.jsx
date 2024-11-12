import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from './cart.module.css'
import { clearCart, getTotalCart } from "../store/slice/cart-slice";

export default function Cart() {
    const carts = useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const cartTotalAmount = useSelector(store => store.cart.cartTotalAmount)
    const cartTotalQuantity = useSelector(store=>store.cart.cartTotalQuantity)
    

    useEffect(()=>{
        dispatch(getTotalCart())
    },[carts,dispatch])

    function handleClearCart() {
        dispatch(clearCart())
    }
    return(
        <div className={styles["wrapper"]}>
            <div className={styles["items"]}>
                {
                    carts.map(item=>(
                        <CartItem key={item.id} data={item}/>
                    ))
                }
            </div>
            <div className={styles["cart-sumation"]}>
                <div>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className="total">
                    <p>Total: ${cartTotalAmount.toFixed(2)}</p>
                    <p>Total Quantity ${cartTotalQuantity}</p>
                </div>
            </div>
        </div>
    )    
};
