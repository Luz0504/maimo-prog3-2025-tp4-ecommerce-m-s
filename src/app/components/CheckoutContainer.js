"use client";

import { useAppContext } from "@/context/ShopContext";
import { CheckoutForm } from "./FormCheckout";

const CheckoutContainer = () => {
  const { cart } = useAppContext();

  const handlePlaceOrder = () => {
    console.log("my order");
  };

  return (
    <section className="flex flex-row h-full my-10">
      <div>
        <CheckoutForm />
      </div>
      <div className= "text-white flex flex-col">
        <div>
          <h2>Pedido</h2>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Cantidad: {product.qty}</p>
            </div>
          ))}
        </div>
        <button
          className="w-40 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 hover:cursor-pointer"
          onClick={() => handlePlaceOrder()}
        >
          Place Order
        </button>
      </div>
    </section>
  );
};

export default CheckoutContainer;
