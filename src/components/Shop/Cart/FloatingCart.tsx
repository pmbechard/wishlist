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
        <div
          id='cart-item-counter'
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            left: '-3px',
            top: '-3px',
            paddingBottom: '1px',
            paddingRight: '1px',
            height: '15px',
            width: '15px',
            textAlign: 'center',
            borderRadius: '50%',
            color: '#eee',
          }}
        >
          {getInCart.length}
        </div>
      )}
      <BsFillCartFill className='cart-icon' />
    </div>
  );
};

export default FloatingCart;
