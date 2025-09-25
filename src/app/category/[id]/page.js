import BurgerMenu from '@/app/components/BurgerMenu';
import CategoryGrid from '@/app/components/CategoryGrid';
import React from 'react'

const CategoryPage = async ({params}) => {
    const {id} = await params;
  return (
    <div className='min-h-lvh flex px-30 py-10 gap-10 bg-purple-50'>
      <BurgerMenu/>
      <CategoryGrid id={id}/>
    </div>
  )
}

export default CategoryPage