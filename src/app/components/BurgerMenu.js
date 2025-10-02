'use client'

import { useAppContext } from '@/context/ShopContext'
import React from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BurgerMenu = () => {

  const {getAllCategories, loading, error, categories} = useAppContext();


   useEffect(() => {
        getAllCategories();
    }, [])
    
  
  return (
    <>
       {!loading &&
       <nav className='bg-blue-300 text-black text-center flex flex-col w-[28em] rounded-t-[3em] p-5 pt-8'>
       <h2 className='text-[1.5em] font-bold border-b-2 border-dotted pb-1'>Categories</h2>
       {
        categories.filter(cat => cat.type === "1").map(cat =>
           <Link href={`/category/${cat._id}`} key={cat._id} className='text-left list-none py-2 border-y-2 border-dotted hover:bg-blue-400 hover:cursor-pointer hover:font-bold pl-3 border-b-0 '>&#11208; {cat.name}</Link>
        )
        }
        <h2 className='text-2xl font-bold border-b-2 border-dotted pb-1'>Games</h2>
       {
        categories.filter(cat => cat.type === "0").map(cat =>
             <Link href={`/category/${cat._id}`} key={cat._id} className='text-left list-none py-2 border-y-2 border-dotted hover:bg-blue-400 hover:cursor-pointer hover:font-bold pl-3'>&#11208; {cat.name}</Link>
        )
        }
        </nav>
       }

       {loading && error && <p>Lol. LMAO</p>}
    </>
  )
}

export default BurgerMenu