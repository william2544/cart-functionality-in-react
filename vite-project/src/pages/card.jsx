import { useSelector } from 'react-redux'
import styles from './home.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slice/cart-slice'


export default function Card({EachItem}) {

    const {id,title,price,description,category,image}=EachItem
    const carts = useSelector(store=>store.cart.items)
    // console.log(carts);
    const dispatch=useDispatch()


    function handleAddToCart(){
        dispatch(addToCart({product:EachItem,quantity:1}))
    }
    

    return(
        <div className={styles["card-container"]} key={id}>
            <div className={styles["image-container"]}>
                <img src={image} alt={title} />
            </div>
            <p>{title}</p>
            <p>$ {price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
    
};
