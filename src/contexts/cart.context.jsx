import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemCart = (cartItems, cartItemtoRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemtoRemove.id
    );
      if(existingCartItem.quantity===1){
        return cartItems.filter(cartItems=>cartItems.id !== cartItemtoRemove.id);
      }

      return cartItems.map((cartItem) =>
      cartItem.id === cartItemtoRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const removeProductCart = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};



export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: ()=>{},
  removeProductFromCart: ()=>{},
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [ cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  },[cartItems])


  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price, 
      0
    )
    setCartTotal(newCartTotal);
  },[cartItems])

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const removeItemFromCart = (cartItemtoRemove) =>
    setCartItems(removeItemCart(cartItems, cartItemtoRemove));
    
    const removeProductFromCart = (productToRemove) =>
    setCartItems(removeProductCart(cartItems, productToRemove));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, removeProductFromCart, cartTotal, };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
