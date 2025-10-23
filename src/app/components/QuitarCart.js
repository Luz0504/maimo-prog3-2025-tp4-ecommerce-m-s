import { useAppContext } from "@/context/ShopContext";

const QuitarCart = ({ id }) => {
  const { removeFromCart } = useAppContext();

  return (
    <div
      onClick={() => removeFromCart(id)}
      className="bg-fuchsia-700 rounded-4xl border-black border-[2px]
       text-white px-2 py-2.5 truncate w-full hover: overflow-visible 
       duration-200 ease-in cursor-pointer hover:bg-fuchsia-900
       inset-ring-2 inset-ring-fuchsia-400"
    >
      <p className="flex justify-center">Quitar del carrito</p>
    </div>
  );
};

export default QuitarCart;
