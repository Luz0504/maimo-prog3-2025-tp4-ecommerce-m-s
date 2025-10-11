"use client";

import { useAppContext } from "@/context/ShopContext";
import { CheckoutForm } from "./FormCheckout";

const CheckoutContainer = () => {
  const { cart } = useAppContext();

  const handlePlaceOrder = () => {
    console.log("my order");
  };

  return (
    <section className="flex flex-row h-70">
      <div>
        <div>
          <CheckoutForm />
        </div>
        <div>
          <h2>Pedido</h2>
          {cart.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>Cantidad: {product.qty}</p>
            </div>
          ))}
        </div>
        <button onClick={() => handlePlaceOrder()}>Place Order</button>
      </div>
    </section>
  );
};

export default CheckoutContainer;
