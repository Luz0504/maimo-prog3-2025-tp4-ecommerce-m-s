"use client";

import React from "react";

import { useState, useCallback, useEffect } from "react";
import { useAppContext } from "@/context/ShopContext";
import Link from "next/link";
import Image from "next/image";
import AgregarCart from "./AgregarCart";
import QuitarCart from "./QuitarCart";

const ProductContainer = ({ id }) => {
  const { loading, error, product, categories, getOneProduct, cart } =
    useAppContext();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const isCart = cart.find((cartitem) => cartitem.id === id);

  return (
    <>
      {!loading && (
        <div className="text-black">
          <Link href="/">
            <Image
              src={"/assets/window-close.png"}
              alt="Volver"
              height={50}
              width={50}
            />
          </Link>
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
                      (cat) => cat._id === _id && cat.type === "0"
                    );
                    return match ? match.name : null;
                  })}
                </Link>
                <h1 className="text-black text-3xl mb-2 max-w-125">
                  {product.name}
                </h1>
                <h2 className="text-4xl text-fuchsia-900 mt-5">
                  ${product.price}
                </h2>
              </div>
              {isCart ? (
                <QuitarCart id={id} />
              ) : (
                <AgregarCart
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  id={id}
                />
              )}
            </div>
          </section>
          <p className="italic text-gray-900 mx-10 my-10 text-2xl p-5 rounded-3xl border-4 border-dotted border-fuchsia-900">
            &#8223; {product.desc} &#8221;
          </p>
          <table className="w-full text-3xl">
            <tbody>
              <tr className="bg-fuchsia-200">
                <td className=" p-2 border-r-4 border-fuchsia-900">Category</td>
                <td className="p-2 px-5">
                  {product.categories.map((id) => {
                    const match = categories.find(
                      (cat) => cat._id === id && cat.type === "1"
                    );
                    return match ? match.name : null;
                  })}
                </td>
              </tr>
              <tr>
                <td className=" p-2 border-r-4 border-fuchsia-900">Tamaño</td>
                {typeof product.size === "object" ? (
                  <td className="px-5">
                    <ul className="flex gap-2.5">
                      {product.size.map((s) => (
                        <div
                          key={s}
                          className="px-2 rounded-[0.25em] border-2 hover:bg-fuchsia-900 hover:text-white hover:border-white cursor-pointer"
                        >
                          {s}
                        </div>
                      ))}
                    </ul>
                  </td>
                ) : (
                  <td className="p-2">{product.size}</td>
                )}
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
