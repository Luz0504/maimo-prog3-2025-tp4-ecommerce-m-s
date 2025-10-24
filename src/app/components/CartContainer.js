import { useAppContext } from "@/context/ShopContext";
import CartCard from "./CartCard";

const CartContainer = () => {
  const { loading, error, cart } = useAppContext();

  console.log(cart);
  return (
      <div className="grid grid-cols-6 p-3 gap-2 text-1xl">
        {!loading &&
          cart.map((cartitem) => (
            <CartCard product={cartitem} key={cartitem._id} />
          ))}

        {loading && error && "Hubo un error at cargar el cart"}
      </div>
  );
};

export default CartContainer;
