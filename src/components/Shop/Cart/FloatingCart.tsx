import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import Product from '../ShopPage/ProductInterface';

interface Props {
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
  getInCart: Product[];
}

const FloatingCart: React.FC<Props> = ({
  setCartIsOpen,
  setShopFade,
  getInCart,
}) => {
  return (
    <div
      className='floating-cart'
      onClick={() => {
        setCartIsOpen(true);
        setShopFade(false);
      }}
    >
      {getInCart.length > 0 && (
        <g className='cart-counter'>{getInCart.length}</g>
      )}
      <BsFillCartFill className='cart-icon' />
    </div>
  );
};

export default FloatingCart;
