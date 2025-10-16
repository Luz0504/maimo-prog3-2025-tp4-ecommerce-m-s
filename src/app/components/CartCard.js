"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/ShopContext";

const CartCard = ({product}) => {
  const { cart, getOneProduct, addToCart, removeFromCart } = useAppContext();
  const isCart = cart.find((cartitem) => cartitem._id === product._id)
  const qty = isCart?.qty ?? 0;

  return (
    <div className="col-span-3 flex p-4 bg-white rounded-2xl gap-2 border-black border-[2px] text-black transition-transform duration-300 ease-in-out hover:scale-105 items-center">
      <section className=" min-h-30 flex items-center">
        <Image src={`/assets/${product.img}`} height={500} width={150} alt={product.name} className="max-w-40" />
      </section>
      <section>
        <h1 className="max-w-150 max-h-70 text-[0.90em] mb-2">{product.name}</h1>
        <Link
        href={`/product/${product._id}`}
        className="bg-blue-400 rounded-3xl border-black border-[2px] p-1 duration-100 ease-in-out hover:bg-blue-500 hover:cursor-pointer text-center text-[1.25em] hover:text-white"
        onClick={() => getOneProduct(product._id)}
      >
        Ver más
      </Link>
                </section>
                <section className="flex justify-center gap-6 items-center">  
            <button onClick={() => addToCart(product.name, product.price, product.img, product._id, -1)} className="text-2xl p-1 h-fit rounded-2xl border-2 border-black bg-fuchsia-400 hover:text-white cursor-pointer hover:bg-fuchsia-900">-</button>
            <p className="text-2xl">{qty}</p>
            <button onClick={() => addToCart(product.name, product.price, product.img, product._id, 1)} className="text-2xl p-1 h-fit rounded-2xl border-2 border-black bg-fuchsia-400 hover:text-white cursor-pointer hover:bg-fuchsia-900">+</button>
        </section> 
                            <p className="text-4xl mx-5 text-fuchsia-900">{product.price}</p>
                            <button onClick={() => removeFromCart(product._id)} className="w-fit cursor-pointer">
                    <Image
                    src={'/assets/blacktrash.svg'}
                    height={30}
                    width={30}
                    alt="Delete"
                    className="max-w-15"
                    />
                </button> 

    </div>
  );
};

export default CartCard;
