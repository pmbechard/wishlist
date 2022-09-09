import React from 'react';
import CartTotalArea from './CartTotalArea';
import { ItemQuantities } from './ItemQuantitiesInterface';

interface Props {
  getQuantities: ItemQuantities[];
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartItemDisplay: React.FC<Props> = ({ getQuantities, setCartIsOpen }) => {
  return (
    <div className='checkout-container'>
      {getQuantities.map((item) => (
        <div className='cart-item' key={item.id}>
          <div className='cart-thumbnail'>
            <img src={item.img} alt={item.name} />
          </div>
          <p>{item.quantity}x</p>
          <p>{item.name}</p>
          <p>{item.quantity * parseInt(item.price)}</p>
        </div>
      ))}
      <CartTotalArea
        getQuantities={getQuantities}
        setCartIsOpen={setCartIsOpen}
      />
    </div>
  );
};

export default CartItemDisplay;
