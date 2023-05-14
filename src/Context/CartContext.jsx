import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    let total;
    const newCart = [...cart];
    if (cart.length === 0) {
      total = 0;
    } else {
      total = newCart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
    setTotal(total);
  }, [cart]);

  const addToCart = (product) => {
    let newProduct = product;
    const newCart = [...cart];
    const productInCartIndex = newCart.findIndex((product) => {
      return product.id === newProduct.id;
    });
    if (productInCartIndex === -1) {
      setCart([...newCart, { ...newProduct, quantity: 1 }]);
    } else {
      let newProduct = newCart[productInCartIndex];
      newCart[productInCartIndex] = {
        ...newCart[productInCartIndex],
        quantity: newProduct.quantity + 1,
      };
      setCart([...newCart]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart([...newCart]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
