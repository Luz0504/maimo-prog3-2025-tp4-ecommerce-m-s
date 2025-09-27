"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/app/context/ShopContext";

const ProductGrid = () => {
  const { getAllProducts } = useAppContext();

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts(setData, setError, setLoading);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3">
      {!loading &&
        data.map((product) => (
          <ProductCard
            id={product._id}
            name={product.name}
            price={product.price}
            img={product.img}
            key={product._id}
            alt={product.name}
          />
        ))}

      {loading && "Loading..."}
      {error && "Hubo un error"}
    </div>
  );
};

export default ProductGrid;
