"use client";

import axios from "axios";
import { useState, useContext, createContext, useEffect, useCallback } from "react";

const ShopContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (name, price, img, id) => {
    const dupli = cart.find(cartitem => cartitem.id === id);

        if(!dupli) {
            setCart([...cart, { name, price, img, id }]);
        }
  };

  const removeFromCart = (id) => {
     const updateCart = cart.filter(cartitem => cartitem.id !== id);
            setCart(updateCart);
  };

  const cartQty = cart.length;

  const getAllProducts = (setData, setError, setLoading) => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://maimo-prog3-2025-api-blank.vercel.app/products"
        );
        const responseData = response.data.products;
        setData(responseData);
        setLoading(false);
        console.log("worked");
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("did not work");
      }
    };
    getData();
  };



  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{
        cart,
        removeFromCart,
        addToCart,
        cartQty,
        getAllProducts,
        //getOneProduct
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

//Obtener todos los productos
//Obtener un producto
//Obtener todos los productos de una categoria (useCallback)
//Home o en pag de categoria => USEEFFECT Y llamar a la funcion en el context (axios)
//Hay que capturar la URL del product
//Category/slug para hacer el axios
//PAGINA DE PRODUCTO, SINGLE. Customizar el producto. Cinco talles, con bullets, select, etc
//ADDPRODUCT BOTON. AGREGA EL PRODUCTO EN EL STATE DEL CONTEXT (cart)
//NO GENERAR COPIAS, SINO UNIDADES (EJ: Cuantity: 3)
//Checkout, trae del context el CART y un boton que diga comprar
//CREA EL PEDIDO EN BASE DE DATOS
//SEND GRID, TE MANDA UN MAIL GRATIS CON EL PEDIDO