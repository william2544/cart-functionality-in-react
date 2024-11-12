import { Link } from "react-router-dom"
import styles from './navber.module.css'
export default function Navber(params) {
    return(
        <div className={styles["wrapper"]}>
            <p>Navber</p>
            <div className={styles["links"]}>
                <Link to='/'>Home</Link>
                <Link to='cart'>Cart</Link>
            </div>
        </div>
    )
};
