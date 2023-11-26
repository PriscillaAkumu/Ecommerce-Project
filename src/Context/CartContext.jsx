import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const addToCart = (product, selectedSize, selectedColor, quantity) => {
    const itemInCart = cart.find(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor,
    );

    if (itemInCart) {
      // If the item is already in the cart, update the quantity
      const updatedCart = cart.map((item) => {
        if (
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        ) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      setCart(updatedCart);

      // Use the updatedCart directly when storing in localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // If the item is not in the cart, add it
      const newCartItem = {
        product: product,
        selectedSize: selectedSize,
        selectedColor: selectedColor,
        quantity: quantity,
      };

      // Update the cart state and use the callback form to ensure the correct order of operations
      setCart((prevCart) => [...prevCart, newCartItem]);

      // Use the updatedCart directly when storing in localStorage
      localStorage.setItem('cart', JSON.stringify([...cart, newCartItem]));
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(
      (item) =>
        !(
          item.product.id === itemToRemove.product.id &&
          item.selectedSize === itemToRemove.selectedSize &&
          item.selectedColor === itemToRemove.selectedColor
        ),
    );
    setCart(updatedCart);

    // Use the updatedCart directly when storing in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
