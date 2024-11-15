import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from './cart.module.css'
import { clearCart, getTotalCart } from "../store/slice/cart-slice";
import { Link } from "react-router-dom"

export default function Cart() {
    const carts = useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const cartTotalAmount = useSelector(store => store.cart.cartTotalAmount)
    const cartTotalQuantity = useSelector(store=>store.cart.cartTotalQuantity)

    const length = carts.length
    

    useEffect(()=>{
        dispatch(getTotalCart())
    },[carts,dispatch])

    function handleClearCart() {
        dispatch(clearCart())
    }
    return(
        <div className={styles["wrapper"]}>
            {
                length?
                <>
                    <div className={styles["items"]}>
                        {
                            carts.map(item=>(
                                <CartItem key={item.id} data={item}/>
                            ))
                        }
                    </div>
                    <div className={styles["cart-sumation"]}>
                        <div className={styles["clear-btn"]}>
                            <button onClick={handleClearCart}>Clear Cart</button>
                        </div>
                        <div className={styles["total"]}>
                            <p>Total Price: <span>${cartTotalAmount.toFixed(2)}</span></p>
                            <p>Total Quantity <span>{cartTotalQuantity}</span></p>
                        </div>
                    </div>
                </>
                :<>
                <div className={styles["cont-no-item"]}>
                    <h3>No items yet, <Link to="/">Shop now</Link></h3>
                </div>
                </>
            }
            
        </div>
    )    
};
