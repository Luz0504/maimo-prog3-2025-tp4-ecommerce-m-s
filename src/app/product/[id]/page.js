import ProductContainer from '@/app/components/ProductContainer';
import React from 'react'

const productPage = async ({params}) => {

    const {id} = await params;

  return (
    <div className="min-h-lvh flex px-30 py-10 bg-purple-50">
        <ProductContainer id={id}/>
    </div>
  )
}

export default productPage