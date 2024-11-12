import { useEffect, useState } from "react";
import styles from './cart.module.css'
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart,decreaseQuatity,increaseQuantity } from "../store/slice/cart-slice";



export default function CartItem({ data }) {
    const { id,itemId, quantity } = data;
    const [detail, setDetail] = useState(null);
    const dispatch=useDispatch()

    async function fetchProductDetails() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const productDetail = await response.json();
            setDetail(productDetail);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    console.log(detail,quantity);
    useEffect(() => {
        fetchProductDetails();
    }, [itemId]);

    if (!detail) {
        return <h2>Loading...</h2>;
    }
    function handleMinusQuatity(detail) {
        dispatch(decreaseQuatity(detail))
    }
    function handlePlusQuatity(detail) {
        dispatch(increaseQuantity(detail))
    }
    function handleRemoveFromcart(detail){
        dispatch(removeFromCart(detail))
    }

    return (
        <div className={styles["item"]}>
            <div className={styles["image"]}>
                <img src={detail.image} alt={detail.title || "Product Image"} />
            </div>
            <div className={styles["detail"]}>
                <h4>{detail.title}</h4>
                <div className={styles["btn"]}>
                    <button onClick={()=>handleMinusQuatity(detail)} disabled={quantity <= 1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={()=>handlePlusQuatity(detail)}>+</button>
                </div>
            </div>
            <div className={styles["end"]}>
                <span onClick={()=>handleRemoveFromcart(detail)}><IoClose/></span>
                <p>${(detail.price * quantity).toFixed(2)}</p>
            </div>
        </div>
    );
}
