import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

interface Props {
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingCart: React.FC<Props> = ({ setCartIsOpen, setShopFade }) => {
  return (
    <div
      className='floating-cart'
      onClick={() => {
        setCartIsOpen(true);
        setShopFade(false);
      }}
    >
      <BsFillCartFill className='cart-icon' />
    </div>
  );
};

export default FloatingCart;
