"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/ShopContext";
import { useEffect } from "react";

const NavBar = () => {
  const { cartQty } = useAppContext();

  const { getAllCategories, getCategoryProducts, categories } = useAppContext();
  
    useEffect(() => {
      getAllCategories();
    }, []);

  return (
    <nav className=" bg-fuchsia-900">
      <Link href={"/"}>
        <h1 className="p-5 text-center text-4xl font-bold hover:text-white">
          GAMERZ STORE
        </h1>
      </Link>
      <div className="flex justify-between items-center px-10 bg-blue-500 py-2 rounded-t-4xl ">
        <ul className="flex gap-6 text-[0.60em]">
           {
        categories.filter(cat => cat.type === "0").map(cat =>
             <Link href={`/category/${cat._id}`} key={cat._id} onClick={() => getCategoryProducts(cat._id)} className='text-2xl hover:text-fuchsia-900'> {cat.name}</Link>
        )
        }
        </ul>
        <div className="flex flex-row">
          <ul className="flex gap-3">
            <Link href={"/cart"}>
              <li>
                <Image
                  src={"/assets/shopping-cart.png"}
                  alt={"Your cart"}
                  height={30}
                  width={30}
                  /></li></Link>

              </ul>
              <span className='text-2xl'>({cartQty})</span>
            </div>
        </div>
            </nav>
  );
};

export default NavBar;
