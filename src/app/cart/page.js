'use client'

import Link from 'next/link'
import Image from 'next/image'
import CartContainer from '../components/CartContainer'

const page = ({ id, name, price, img }) => {
  return (
    <div className='p-10'>
        <Link href={'/'} className='p-5 bg-fuchsia-500 border-2 border-white rounded-[200px] hover:bg-fuchsia-900'>Seguir comprando</Link>

        <div className='py-10'>
        <CartContainer />
        </div>

        <Link href={'/'} className='p-5 bg-fuchsia-500 border-2 border-white rounded-[200px] hover:bg-fuchsia-900'>Continuar con la compra</Link>
    </div>
  )
}

export default page