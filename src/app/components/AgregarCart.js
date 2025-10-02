import { useAppContext } from "@/app/context/ShopContext";

const AgregarCart = ({ name, price, img, id }) => {
  const { addToCart } = useAppContext();

  return (
    <div  
      onClick={() => addToCart(name, price, img, id)} 
      className='bg-blue-400 rounded-4xl border-[2px] text-black px-2 py-2.5 truncate w-full hover: overflow-visible duration-200 ease-in cursor-pointer hover:bg-blue-600'>
        <p className='flex justify-center'>+ Agregar al carrito</p>
    </div>
  );
};

export default AgregarCart;
