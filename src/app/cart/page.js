'use client'

import Link from 'next/link'
import Image from 'next/image'
import CartContainer from '../components/CartContainer'

const page = ({ id, name, price, img }) => {
  return (
    <div>
        <Link href={'/'}>Seguir comprando</Link>

        <CartContainer />

        <Link href={'/'}>Continuar con la compra</Link>
    </div>
  )
}

export default page