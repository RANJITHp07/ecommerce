import React, { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    try{
      if(JSON.parse(localStorage.getItem("Cart"))){
        setCart(JSON.parse(localStorage.getItem("Cart")))
      }
    }catch(err){
      console.log(err)
    }
  },[])
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
