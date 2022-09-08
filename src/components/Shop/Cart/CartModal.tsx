import React from 'react';

interface Props {
  getCartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal: React.FC<Props> = ({ getCartIsOpen, setCartIsOpen }) => {
  return (
    <div className={'cart-modal-container'}>
      <div
        className={`screen-cover ${getCartIsOpen || 'closed'}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
      <div
        className={`cart-modal-side-menu ${
          getCartIsOpen ? 'slide-in' : 'slide-out'
        }`}
      >
        CartModal
      </div>
    </div>
  );
};

export default CartModal;
