import { Link } from "react-router-dom"
import styles from './navber.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"
import { getTotalCart } from "../store/slice/cart-slice"


export default function Navber() {
    const cartTotalQuantity=useSelector(state=>state.cart.cartTotalQuantity)
    const cart=useSelector(state=>state.cart.items)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTotalCart())
    },[cart,dispatch])



    return(
        <div className={styles["wrapper"]}>
            <p>Navber</p>
            <div className={styles["links"]}>
                <Link to='/'>Home</Link>
                <div className={styles["cart-Link"]}>
                    <Link to='cart'>Cart</Link>
                    <span>{cartTotalQuantity}</span>
                </div>
            </div>
        </div>
    )
};
