"use client";

import axios from "axios";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

const ShopContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //${process.env.NEXT_PUBLIC_API_URL}
  
  const addToCart = (name, price, img, _id, qty) => {
    let productToAdd = { name, price, img, _id, qty };

    const dupli = cart.find((cartitem) => cartitem._id == _id);

    if (dupli) {
      dupli.qty += qty;
      productToAdd = dupli;
    }

    const filteredCart = cart.filter((cartitem) => cartitem._id !== _id);

    setCart([...filteredCart, productToAdd]);
  };

  const removeFromCart = (_id) => {
    const updateCart = cart.filter((cartitem) => cartitem._id !== _id);
    setCart(updateCart);
  };

  const cartQty = cart.length;

  const cartTotal = cart.reduce(
    (acc, product) => acc + product.qty * product.price,
    0
  );

  const getAllProducts = () => {
    const getData = async () => {
      try {
        const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        const responseData = response.data.products;
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getData();
  };

  const getOneProduct = (id) => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        setProduct(response.data.product);
        setLoading(false);
        console.log("worked");
      } catch (error) {
        setError(true);
        console.log("failed");
      }
    };
    getProduct();
    return product;
  };

  const getAllCategories = () => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getCategories();
  };

  const getCategoryProducts = (id) => {
    const getSlug = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}/products`
        );
        const responseData = response.data.products;
        setData(responseData);
        console.log("Worked");
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log("Did not");
      }
    };
    getSlug();
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addOrder = async (userValues) => {
    const reducedCart = cart.map((product) => {
      const prod = {
        name: product.name,
        _id: product._id,
        qty: product.qty,
      };

      return prod;
    });

    const orderValues = {
      user: userValues,
      products: reducedCart,
      total: cartTotal,
    };
    console.log("my order is", orderValues);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        orderValues
      );
      return response
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        removeFromCart,
        addToCart,
        cartQty,
        getAllProducts,
        getOneProduct,
        getAllCategories,
        getCategoryProducts,
        loading,
        error,
        categories,
        product,
        data,
        addOrder,
        cartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("use AppContext must be used within a AppContextProvider");
  }
  return context;
};

export default ShopContext;
