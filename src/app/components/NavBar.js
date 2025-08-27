import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className=' bg-fuchsia-900'>
        <h1 className='p-5 text-center text-4xl font-bold'>GAMERZ STORE</h1>
        <div className='flex justify-between items-center px-10 bg-blue-500 py-2 rounded-t-4xl'>
            <ul className='flex gap-3'>
                <li>CATEGORIAS</li>
                <li>GIFT CARDS</li>
                <li>AYUDA</li>
                <li>ACCESIBILIDAD</li>
                <li>DEVOLUCIONES</li>
            </ul>
            <ul className='flex gap-3'>
                <li><Image
                src={'/assets/acc.png'}
                alt={"Your acc"}
                height={30}
                width={30}
                /></li>
                <li><Image
                src={'/assets/cart.png'}
                alt={"Your cart"}
                height={30}
                width={30}
                /></li>

            </ul>
        </div>
    </nav>
  )
}

export default NavBar