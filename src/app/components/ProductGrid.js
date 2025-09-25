
'use client'

import {useState, useEffect} from "react"
import axios from 'axios';
import ProductCard from './ProductCard'
import { useAppContext } from "@/app/context/ShopContext";

const ProductGrid = () => {

    const {getAllProducts} = useAppContext();
    //test comment

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllProducts(setData,setError,setLoading);
    }, [])

  return (
    <div className='grid grid-cols-4 gap-3'>
        
        {!loading &&
                
            data.map((product) => (
                 <ProductCard
                    name={product.name}
                    price={product.price}
                    key={product._id}
                />
        ))}

        {loading && 'Loading...'}
        {error && "Hubo un error"}
        
    </div>
  )
}

export default ProductGrid