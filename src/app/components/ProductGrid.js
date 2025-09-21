import ProductCard from './ProductCard'

const ProductGrid = () => {

  return (
    <div className='grid grid-cols-4 gap-2'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductGrid