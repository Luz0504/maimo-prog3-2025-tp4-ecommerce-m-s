"use client";

import React from "react";

import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "@/context/ShopContext";
import Link from "next/link";
import Image from "next/image";

const ProductContainer = ({ id }) => {


  const { getOneProduct, getAllCategories, loading, error, product, categories} = useAppContext();

  useEffect(() => {
    getOneProduct(id);
    getAllCategories();
  }, []);

  return (
    <>
      {!loading && (
        <div className="text-black">
          <Link href="/">Volver</Link>
          <section className="flex justify-center mb-5">
            <div className="min-h-100 min-w-100 flex items-center rounded-2xl border-2 border-black justify-center bg-fuchsia-300">
              <Image
                src={`/assets/${product.img}`}
                height={100}
                width={350}
                alt="Snnuy"
              />
            </div>
            <div className="flex flex-col ml-4 justify-around">
              <div>
                <Link href={""} className="text-4xl">
                    {product.categories.map((_id) => {
                    const match = categories.find(
                      (cat) => cat._id === id && cat.type === "0"
                    );
                    return match ? match.name : null;
                  })}
                </Link>
                <h1 className="text-black text-4xl mb-2 max-w-125">{product.name}</h1>
                <h2 className="text-5xl text-fuchsia-900 mt-5">{product.price}</h2>
              </div>
              <Link
                href={""}
                className="bg-fuchsia-900 text-white p-3 rounded-2xl w-fit text-2xl border-2 border-black px-8 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                ¡Lo Quiero!
              </Link>
            </div>
          </section>
          <p className="italic text-gray-900 mb-2">
            &#8223; {product.desc} &#8221;
          </p>
          <table className="w-full">
            <tbody>
              <tr className="bg-fuchsia-200">
                <td className="text-2xl p-2">Category</td>
                <td className="p-2">
                  {product.categories.map((id) => {
                    const match = categories.find(
                      (cat) => cat._id === id && cat.type === "1"
                    );
                    return match ? match.name : null;
                  })}
                </td>
              </tr>
              <tr>
                <td className="text-2xl p-2">Tamaño</td>
                <td className="p-2">{product.size}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {loading && error && <p>Cargando...</p>}
    </>
  );
};

export default ProductContainer;
