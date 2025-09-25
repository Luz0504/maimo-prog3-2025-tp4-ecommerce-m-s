
'use client'

import {useState, useEffect} from "react"
import axios from 'axios';
import ProductCard from './ProductCard'
import { useAppContext } from "@/context/ShopContext";

const ProductGrid = () => {

    const {getAllProducts, data, error, loading} = useAppContext();

    useEffect(() => {
        getAllProducts();
    }, [])

  return (
    <div className='grid grid-cols-4 gap-3'>
        
        {!loading &&
                
            data.map((product) => (
                 <ProductCard
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    key={product._id}
                    id={product._id}
                />
        ))}

        {loading && 'Loading...'}
        {error && "Hubo un error"}
        
    </div>
  )
}

export default ProductGrid