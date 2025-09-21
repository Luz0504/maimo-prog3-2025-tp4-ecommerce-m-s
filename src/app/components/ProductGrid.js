
'use client'

import {useState, useEffect} from "react"
import axios from 'axios';
import ProductCard from './ProductCard'

const ProductGrid = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://maimo-prog3-2025-api-blank.vercel.app/products')
                const responseData  = response.data.products;
                setData(responseData);
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        getData();
    }, [])

  return (
    <div className='grid grid-cols-4 gap-3'>
        
        {!loading &&
                
            data.map((product) => (
                 <ProductCard
                    name={product.name}
                    price={product.price}
                    key={product._id}
                    id={product.id}
                />
        ))}

        {loading && 'Loading...'}
        {error && "Hubo un error"}
        
    </div>
  )
}

export default ProductGrid