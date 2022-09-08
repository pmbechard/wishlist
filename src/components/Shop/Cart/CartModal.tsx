import React from 'react';

interface Props {
  getCartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal: React.FC<Props> = ({ getCartIsOpen, setCartIsOpen }) => {
  return (
    <div
      className={`cart-modal-container ${
        getCartIsOpen ? 'slide-in' : 'closed slide-out'
      }`}
    >
      <div className='screen-cover' onClick={() => setCartIsOpen(false)}></div>
      <div className='cart-modal-side-menu'>CartModal</div>
    </div>
  );
};

export default CartModal;
