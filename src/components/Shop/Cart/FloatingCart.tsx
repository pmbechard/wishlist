import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

interface Props {
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingCart: React.FC<Props> = ({ setCartIsOpen }) => {
  return (
    <div className='floating-cart' onClick={() => setCartIsOpen(true)}>
      <BsFillCartFill className='cart-icon' />
    </div>
  );
};

export default FloatingCart;
