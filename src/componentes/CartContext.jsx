import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (producto, cantidad = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === producto.id);
      if (existing) {
        
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, quantity: p.quantity + cantidad }
            : p
        );
      } else {
        return [...prev, { ...producto, quantity: cantidad }];
      }
    });
  };


  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };


  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity } : p))
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
