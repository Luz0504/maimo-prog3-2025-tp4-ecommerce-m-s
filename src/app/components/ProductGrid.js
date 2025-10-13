"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/ShopContext";

const ProductGrid = () => {

    const {getAllProducts, data, error, loading} = useAppContext();

    useEffect(() => {
        getAllProducts();
    }, [])

  return (
    <div className='grid grid-cols-9 gap-x-18 gap-y-5'>
        
        {!loading &&
                
            data.map((product) => (
                 <ProductCard
                 key={product._id}
                  product={product}
                />
        ))}

      {loading && "Loading..."}
      {error && "Hubo un error"}
    </div>
  );
};

export default ProductGrid;
