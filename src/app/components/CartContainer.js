import { useAppContext } from "@/context/ShopContext";
import ProductCard from "./ProductCard"

const CartContainer = () => {

    const {cart} = useAppContext()

  return (
    <div className="mx-20 grid grid-cols-12 gap-5 p-3 text-1xl">
      {cart.map((cartitem) => (
          <ProductCard
           id={cartitem.id}
           name={cartitem.name}
           img={cartitem.img}
           alt={cartitem.name}
           key={cartitem.id}
          />
      ))}

    </div>
    )
  }

export default CartContainer