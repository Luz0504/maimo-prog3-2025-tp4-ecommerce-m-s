"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/ShopContext";
import AgregarCart from "./AgregarCart";
import QuitarCart from "./QuitarCart";

const ProductCard = ({product}) => {
  const { cart, getOneProduct, addToCart } = useAppContext();
  const isCart = cart.find((cartitem) => cartitem._id === product._id)
  const qty = isCart?.qty ?? 0;

  return (
    <div className="col-span-3 flex flex-col justify-center p-4 bg-white rounded-2xl gap-2 border-black border-[2px] text-black transition-transform duration-300 ease-in-out hover:scale-105 w-50">
      <div className=" min-h-30 flex items-center">
        <Image src={`/assets/${product.img}`} height={500} width={150} alt={product.name} />
      </div>
      <div>
        <h1 className="max-w-40 max-h-70 text-[0.90em] line-clamp-2">{product.name}</h1>
        <p className="text-4xl">{product.price}</p>
      </div>
      <Link
        href={`/product/${product._id}`}
        className="bg-blue-400 rounded-3xl border-black border-[2px] p-1 duration-100 ease-in-out hover:bg-blue-500 hover:cursor-pointer text-center text-2xl hover:text-white"
        onClick={() => getOneProduct(product._id)}
      >
        Ver más
      </Link>

        <AgregarCart key={product._id} name={product.name} price={product.price} img={product.img} _id={product._id} />
        <p>{qty}</p>
        {
          qty > 1?
                  <button onClick={() => addToCart(product.name, product.price, product.img, product._id, -1)}>Remove qty</button>
          :
          <QuitarCart id={product._id}/>
        }        
    </div>
  );
};

export default ProductCard;
