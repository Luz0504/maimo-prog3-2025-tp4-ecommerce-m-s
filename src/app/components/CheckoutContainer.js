"use client";

import { useAppContext } from "@/context/ShopContext";
import { CheckoutForm } from "./FormCheckout";

const CheckoutContainer = () => {
  const { cart, addOrder, cartTotal } = useAppContext();

  const handlePlaceOrder = () => {
    console.log("my order");
  };

  const handleAddOrder = (values) => {
    addOrder(values)
  };

  return (
    <section className="flex flex-row h-full my-10 mx-5">
      <div className="w-500">
        <CheckoutForm handleAddOrder={handleAddOrder} />
      </div>
      <div className="border-2 border-white rounded-3xl p-5 flex flex-col w-500">
        <div className="mb-10">
          <h2>Pedido</h2>
          {cart.map((product) => (
            <div className="flex flex-row gap-4" key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.qty}</p>
            </div>
          ))}

          <p>
            Order total: ${cartTotal}
          </p>

        </div>
        <button
          className="w-full h-10 bg-blue-500 text-white rounded-3xl hover:bg-blue-700 transition-colors duration-200 hover:cursor-pointer"
          onClick={() => handlePlaceOrder()}
        >
          Completar la compra
        </button>
      </div>
    </section>
  );
};

export default CheckoutContainer;
