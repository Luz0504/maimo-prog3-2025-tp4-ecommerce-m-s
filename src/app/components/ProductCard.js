import Image from "next/image"

const ProductCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-2xl gap-2 border-black border-[2px] text-black transition-transform duration-300 ease-in-out hover:scale-105">
        <div className='flex justify-center'>
            <Image
            src={'/assets/ralseiplush.png'}
            height={500}
            width={150}
            alt='plushie'
            />
        </div>
        <h1>
            Nombre
        </h1>
        <p>
            Detalles
        </p>
        <p>
            $$$
        </p>
        <button className="bg-blue-400 rounded-3xl border-black border-[2px] p-1 duration-100 ease-in-out hover:bg-blue-500">
            Ver más
        </button>
    </div>
  )
}

export default ProductCard