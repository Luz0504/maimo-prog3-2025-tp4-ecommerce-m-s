"use client";

import Link from "next/link";
import Image from "next/image";
import CartContainer from "../components/CartContainer";

const page = () => {


  return (
    <div className="min-h-lvh px-10 py-10 bg-purple-50">
      <section className="flex justify-center gap-5">
      <Link
        href={"/"}
        className="p-5 bg-fuchsia-500 border-2 border-black
        rounded-[200px] hover:bg-fuchsia-900
        inset-ring-2 inset-ring-fuchsia-300
        text-black hover:text-white"
      >
        Seguir comprando
      </Link>
      <Link
          href={"/checkout"}
          className="p-5 text-fuchsia-800 border-2 border-fuchsia-800 rounded-[200px]
           hover:bg-fuchsia-900 inset-ring-2 inset-ring-fuchsia-300
           hover:text-white"
        >
          Continuar con la compra
        </Link>
      </section>
      <div className="flex items-center justify-items-center h-fit">
        <CartContainer />
      </div>
    </div>
  );
};

export default page;
