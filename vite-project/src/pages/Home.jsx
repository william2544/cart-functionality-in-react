import { useEffect, useState } from 'react'
import styles from './home.module.css'
import Card from './card'


export default function Home() {
    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState([])
    const [ error, setError] = useState(false)


    async function fetchData(){
        try {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            setLoading(false)
    
        } catch (err) {
            setLoading(false)
            setError(err)
            return <h2>Haaa!!</h2>
        }
        console.log(products);

        return products,error,loading
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            {
                loading && <h2>Loading, please wait...</h2>
            }
            {
                error && <h2>Opps! an error ocured {error}</h2>
            }

            {!loading && !error && products.length > 0 ? (
                <div className={styles["products-wrapper"]}>
                    {products.map((EachItem) => (
                        <Card key={EachItem.id} EachItem={EachItem}/>
                    ))}
                </div>
            ) : null}

            
        </div>
    )
};
