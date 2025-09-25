import { useAppContext } from "@/app/context/ShopContext";

const AgregarFav = ({onClick}) => {

  const { addToCart } = useAppContext();

  return (
    <div  onClick={onClick} 
    className='bg-blue-400 rounded-4xl text-black px-2 py-2.5 truncate w-full hover: overflow-visible duration-200 ease-in cursor-pointer hover:bg-amber-600'>
        <p className='flex justify-center'>+ Agregar al carrito</p>
    </div>
  )
}

export default AgregarFav