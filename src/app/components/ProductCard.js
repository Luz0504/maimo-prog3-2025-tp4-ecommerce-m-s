"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/ShopContext";
import AgregarCart from "./AgregarCart";
import QuitarCart from "./QuitarCart";

const ProductCard = ({ id, name, price, img }) => {
  const { cart } = useAppContext();
  const isCart = cart.find((cartitem) => cartitem.id === id);

  return (
    <div className="col-span-3 flex flex-col justify-center p-4 bg-white rounded-2xl gap-2 border-black border-[2px] text-black transition-transform duration-300 ease-in-out hover:scale-105 w-50">
      <div className=" min-h-30 flex items-center">
        <Image src={`/assets/${img}`} height={500} width={150} alt={name} />
      </div>
      <div>
        <h1 className="max-w-40 max-h-70 text-[0.90em] line-clamp-2">{name}</h1>
        <p className="text-2xl">{price}</p>
      </div>
      <Link
        href={`/product/${id}`}
        className="bg-blue-400 rounded-3xl border-black border-[2px] p-1 duration-100 ease-in-out hover:bg-blue-500 hover:cursor-pointer text-center"
      >
        Ver más
      </Link>

      {isCart ? (
        <QuitarCart id={id} />
      ) : (
        <AgregarCart key={id} name={name} price={price} img={img} id={id} />
      )}
    </div>
  );
};

export default ProductCard;
