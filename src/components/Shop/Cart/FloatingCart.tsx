import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

const FloatingCart: React.FC = () => {
  return (
    <div className='floating-cart'>
      <BsFillCartFill className='cart-icon' />
    </div>
  );
};

export default FloatingCart;
