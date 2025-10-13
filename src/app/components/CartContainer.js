import { useAppContext } from "@/context/ShopContext";
import ProductCard from "./ProductCard";

const CartContainer = ({cart}) => {
  const { loading, error } = useAppContext();

  return (
    <div className="mx-20 grid grid-cols-6 gap-5 p-3 text-1xl h-100">
      {!loading &&
      cart.map((cartitem) => (
        <ProductCard
          product={cartitem}
          key={cartitem.id}
        />
      ))
    }

    {loading && error && "Hubo un error at cargar el cart"}
    </div>
  );
};

export default CartContainer;
