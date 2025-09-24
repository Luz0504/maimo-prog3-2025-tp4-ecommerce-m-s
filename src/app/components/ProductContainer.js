'use client'

import axios from 'axios'
import React from 'react'

import { useState, useCallback, useEffect } from 'react'
import { useAppContext } from '@/context/ShopContext'
import Link from 'next/link'
import Image from 'next/image'

const ProductContainer = ({id}) => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

        const {getOneProduct} = useAppContext();

    useEffect(() => {
        getOneProduct(setProduct,setError,setLoading,id);
      }, [])

  
  return (
    <>
        {!loading &&
        <div className='text-black'>
          <Link href="/">
          Volver
          </Link>
          <section className='flex justify-center mb-5'>
            <>
              <Image
                src={'/assets/sunny.jpg'}
                height={100}
                width={350}
                alt='Snnuy'
                className='rounded-2xl border-2 border-black'
              />
            </>
            <div className='flex flex-col ml-4 justify-evenly'>
              <div>
                <Link href={""} className='text-2xl'>Videojuego</Link>
                <h1 className='text-black text-6xl mb-2'>{product.name}</h1>
                <p className='text-black text-4xl'>{product.price}</p>
              </div>
              <Link href={""} className='bg-fuchsia-900 text-white p-3 rounded-2xl w-fit text-2xl border-2 border-black'>¡Lo Quiero!</Link>
            </div>
            <p>{}</p>
          </section>
              <p className='italic text-gray-900 mb-2'>&#8223; {product.desc} &#8221;</p>
          <table className='w-full'>
            <tbody>
              <tr className='bg-fuchsia-200'>
                <td className='text-2xl p-2'>Videogame</td>
                <td className='p-2'></td>
              </tr>
              <tr>
                <td className='text-2xl p-2'>Tamaño</td>
                <td className='p-2'>{product.size}</td>
              </tr>
            </tbody>
          </table>
        </div>}

        {loading && error &&
        <p>Cargando...</p>
        }
    </>
  )
}

export default ProductContainer