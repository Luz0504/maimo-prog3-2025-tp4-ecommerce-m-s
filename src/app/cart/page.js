"use client";

import Link from "next/link";
import Image from "next/image";
import CartContainer from "../components/CartContainer";

const page = () => {


  return (
    <div className="p-10">
      <Link
        href={"/"}
        className="p-5 bg-fuchsia-500 border-2 border-white rounded-[200px] hover:bg-fuchsia-900"
      >
        Seguir comprando
      </Link>

      <div className="py-10 flex flex-col items-center justify-items-center">
        <CartContainer />
      </div>
      <div className="flex flex-row-reverse">
        <Link
          href={"/checkout"}
          className="p-5 bg-fuchsia-500 border-2 border-white rounded-[200px] hover:bg-fuchsia-900"
        >
          Continuar con la compra
        </Link>

      </div>
    </div>
  );
};

export default page;
