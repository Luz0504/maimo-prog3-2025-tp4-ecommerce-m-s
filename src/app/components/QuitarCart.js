import { useAppContext } from "@/app/context/ShopContext";

const QuitarFav = ({onClick}) => {

  const {removeFromCart} = useAppContext();

  return (
    <div onClick={onClick}
    className='bg-red-500 rounded-4xl text-white px-2 py-2.5 truncate w-full hover: overflow-visible duration-200 ease-in cursor-pointer hover:bg-red-700'>
        <p className='flex justify-center'>Quitar del carrito</p>
    </div>
  )
}

export default QuitarFav