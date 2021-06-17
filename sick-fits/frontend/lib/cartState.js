import { useState, useContext, createContext } from 'react';

const LocalStateContext = createContext();

// eslint-disable-next-line react/prop-types
const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <LocalStateContext.Provider
      value={{ cartOpen, toggleCart, openCart, closeCart }}
    >
      {children}
    </LocalStateContext.Provider>
  );
};

export const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export default CartStateProvider;
