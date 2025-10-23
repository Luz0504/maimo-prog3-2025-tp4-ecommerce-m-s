import { useAppContext } from "@/context/ShopContext";

const AgregarCart = ({ name, price, img, _id }) => {
  const { addToCart } = useAppContext();

  return (
    <div  
      onClick={() => addToCart(name, price, img, _id, 1)} 
      className='bg-blue-400 rounded-4xl border-[2px] text-black px-2 py-2.5 
      truncate w-full hover: overflow-visible duration-200 ease-in 
      cursor-pointer hover:bg-blue-600 hover:text-white
      inset-ring-2 inset-ring-blue-300'>
        <p className='flex justify-center'>+ Agregar al carrito</p>
    </div>
  );
};

export default AgregarCart;
