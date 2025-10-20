import { useAppContext } from "@/context/ShopContext";
import CartCard from "./CartCard";

const CartContainer = () => {
  const { loading, error, cart } = useAppContext();

  console.log(cart);
  return (
      <div className="grid grid-cols-6 gap-x-10 gap-y-5 py-10 text-1xl h-fit">
        {!loading &&
          cart.map((cartitem) => (
            <CartCard product={cartitem} key={cartitem._id} />
          ))}

        {loading && error && "Hubo un error at cargar el cart"}
      </div>
  );
};

export default CartContainer;
