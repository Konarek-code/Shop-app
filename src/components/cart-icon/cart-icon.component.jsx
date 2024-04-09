import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import {CartIconContainer, ShoppingIconcostyle, ItemCount  } from './cart-icon.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

 
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconcostyle />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
