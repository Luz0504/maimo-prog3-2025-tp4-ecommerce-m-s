import React from 'react'

const BurgerMenu = () => {
  return (
    <div className='bg-blue-300 text-black text-center flex flex-col w-[28em] rounded-t-[3em] p-5'>
        <h1 className='py-3 text-2xl'>Categorías</h1>
        <div className='py-3 border-t-2 hover:bg-blue-400 hover:cursor-pointer'>
          <h2>Ropa</h2>
        </div>
        <div className='py-3 border-t-2 hover:bg-blue-400 hover:cursor-pointer'>
          <h2>Trinkets</h2>
        </div>
        <div className='py-3 border-t-2 hover:bg-blue-400 hover:cursor-pointer'>
          <h2>Libros</h2>
        </div>
        <div className='py-3 border-t-2 hover:bg-blue-400 hover:cursor-pointer'>
          <h2>Ropa</h2>
        </div>
    </div>
  )
}

export default BurgerMenu