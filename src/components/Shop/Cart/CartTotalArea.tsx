import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemQuantities } from './ItemQuantitiesInterface';

interface Props {
  getQuantities: ItemQuantities[];
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartTotalArea: React.FC<Props> = ({ getQuantities, setCartIsOpen }) => {
  const [getTotal, setTotal] = useState<number>(0);

  useEffect(() => {
    let total: number = 0;
    for (let i = 0; i < getQuantities.length; i++) {
      total += parseInt(getQuantities[i].price) * getQuantities[i].quantity;
    }
    setTotal(total);
  }, [getQuantities]);

  return (
    <div className='totals-area'>
      <p>Subtotal: {getTotal} USD</p>
      <Link to='/' onClick={() => setCartIsOpen(false)}>
        <button className='checkout-btn'>Proceed to checkout</button>
      </Link>
    </div>
  );
};

export default CartTotalArea;
