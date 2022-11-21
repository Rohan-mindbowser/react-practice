import React, { createContext, useState } from "react";

export const cart = createContext();

const CartContext = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  return (
    <cart.Provider
      value={{ cartProducts, setCartProducts, wishList, setWishList }}
    >
      {children}
    </cart.Provider>
  );
};

export default CartContext;
