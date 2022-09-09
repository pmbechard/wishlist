import React from 'react';
import { ItemQuantities } from './ItemQuantitiesInterface';

interface Props {
  getQuantities: ItemQuantities[];
}

const CartItemDisplay: React.FC<Props> = ({ getQuantities }) => {
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
    </div>
  );
};

export default CartItemDisplay;
