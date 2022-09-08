import React from 'react';
import { BsExclamationSquareFill } from 'react-icons/bs';
import Product from '../ShopPage/ProductInterface';

interface Props {
  getCartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
  getInCart: Product[];
}

const CartModal: React.FC<Props> = ({
  getCartIsOpen,
  setCartIsOpen,
  setShopFade,
  getInCart,
}) => {
  return (
    <div className={'cart-modal-container'} onClick={() => setShopFade(false)}>
      <div
        className={`screen-cover ${getCartIsOpen || 'closed'}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
      <div
        className={`cart-modal-side-menu ${
          getCartIsOpen ? 'slide-in' : 'closed slide-out'
        }`}
      >
        {getInCart.length > 0
          ? getInCart.map((item) => (
              <div className='cart-item'>{item.name}</div>
            ))
          : 'Cart is empty'}
      </div>
    </div>
  );
};

export default CartModal;
