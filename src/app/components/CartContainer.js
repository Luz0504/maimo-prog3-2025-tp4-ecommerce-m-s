import { useAppContext } from "@/app/context/ShopContext";
import ProductCard from "./ProductCard"

const CartContainer = () => {

    const {cart} = useAppContext()

  return (
    <div className="mx-20 grid grid-cols-6 gap-5 p-3 text-1xl">
      {cart.map((cartitem) => (
        <div key={cartitem.id} >
          <ProductCard
           id={cartitem.id}
           title={cartitem.title}
           poster_path={cartitem.image}
           alt={cartitem.title}
          />
        </div>
      ))}
    </div>
    )
  }

export default CartContainer