'use client'

import React from 'react'
import { useAppContext } from '@/context/ShopContext';
import { useState,useEffect } from 'react';
import ProductCard from './ProductCard';

const CategoryGrid = ({id}) => {

    const {getCategoryProducts, getAllCategories, categories, data, error, loading} = useAppContext();
    
    
        useEffect(() => {
            getCategoryProducts(id);
            getAllCategories();
        }, [])

        const thisCategory = categories.find(cat => cat._id === id);
        console.log(thisCategory)

  return (
    <section className='flex-col'>

            {!loading &&
            <>
            <h1 className='text-3xl text-fuchsia-800 mb-5 text-center'>{thisCategory.name}</h1>
            <div className='grid grid-cols-4 gap-3'>
                {
                data.map((product) => (
                     <ProductCard
                        name={product.name}
                        key={product._id}
                        id={product._id}
                    />
            ))
                }
            </div>
            </>
            }
    
            {loading && error && 'Loading...'}
            
        </section>
  )
}

export default CategoryGrid