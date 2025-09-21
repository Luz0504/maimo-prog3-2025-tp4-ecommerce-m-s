import Image from "next/image"

const ProductCard = ({name, price, img}) => {

  return (
    <div className="flex flex-col p-4 bg-white rounded-2xl gap-2 border-black border-[2px] text-black transition-transform duration-300 ease-in-out hover:scale-105">
        <div className='flex justify-center'>
            <Image
            src={'/assets/sunny.jpg'}
            height={500}
            width={150}
            alt={name}
            />
        </div>
        <div className="h-15">
            <h1 className="line-clamp-1">
                {name}
            </h1>
            <p>
                {price}
            </p>
        </div>
        <button className="bg-blue-400 rounded-3xl border-black border-[2px] p-1 duration-100 ease-in-out hover:bg-blue-500">
            Ver más
        </button>
    </div>
  )
}

export default ProductCard