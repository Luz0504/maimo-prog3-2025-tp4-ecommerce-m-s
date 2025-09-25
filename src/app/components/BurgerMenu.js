'use client'

import { useAppContext } from '@/context/ShopContext'
import React from 'react'
import { useState,useEffect } from 'react'

const BurgerMenu = () => {

  const {getAllCategories} = useAppContext();

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

   useEffect(() => {
        getAllCategories(setCategories,setError,setLoading);
    }, [])
    
  
  return (
    <>
       {!loading &&
       <div className='bg-blue-300 text-black text-center flex flex-col w-[28em] rounded-t-[3em] p-5'>
       {
        categories.filter(cat => cat.type === "1").map(cat =>
          <li key={cat._id}>{cat.name}</li>
        )
        }
        </div>
       }

       {loading && error && <p>VETER A LA MIERDA</p>}
    </>
  )
}

export default BurgerMenu