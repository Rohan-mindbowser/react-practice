import React, { createContext, useState } from "react";

export const cart = createContext();

const CartContext = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <cart.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </cart.Provider>
  );
};

export default CartContext;
