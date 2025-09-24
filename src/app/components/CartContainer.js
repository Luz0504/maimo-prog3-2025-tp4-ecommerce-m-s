import { useAppContext } from "@/app/contexts/AppContext"
import ProductCard from "./ProductCard"

const CartContainer = () => {

    const {cart} = useAppContext()

  return (
    <div className="mx-20 grid grid-cols-6 gap-5 p-3 text-1xl">
      {cart.map((car) => (
        <div key={car.id} >
          <MovieCard
           id={car.id}
           title={car.title}
           poster_path={car.image}
           alt={car.title}
          />
        </div>
      ))}
    </div>
    )
  }

export default CartContainer