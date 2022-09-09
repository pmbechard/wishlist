import React from 'react';
import { BsFillNodeMinusFill, BsFillNodePlusFill } from 'react-icons/bs';
import CartTotalArea from './CartTotalArea';
import { ItemQuantities } from './ItemQuantitiesInterface';

interface Props {
  getQuantities: ItemQuantities[];
  setQuantities: React.Dispatch<
    React.SetStateAction<ItemQuantities[] | undefined>
  >;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartItemDisplay: React.FC<Props> = ({
  getQuantities,
  setQuantities,
  setCartIsOpen,
}) => {
  const addItem = (item: ItemQuantities): void => {
    const updatedQuantities: ItemQuantities[] = getQuantities.map((product) => {
      if (product.id === item.id) {
        let newObj = { ...product };
        newObj.quantity++;
        return newObj;
      } else {
        return product;
      }
    });
    setQuantities(updatedQuantities);
  };

  const removeItem = (item: ItemQuantities): void => {
    let updatedQuantities: ItemQuantities[] = getQuantities.map((product) => {
      if (product.id === item.id) {
        let newObj = { ...product };
        newObj.quantity--;
        return newObj;
      } else {
        return product;
      }
    });
    updatedQuantities = updatedQuantities.filter((product) => {
      return product.quantity > 0;
    });
    setQuantities(updatedQuantities);
  };

  return (
    <div className='checkout-container'>
      {getQuantities.map((item) => (
        <div className='cart-item' key={item.id}>
          <div className='cart-thumbnail'>
            <img src={item.img} alt={item.name} />
            <div className='cart-item-quantity-btns'>
              <BsFillNodePlusFill
                className='quantity-btn'
                onClick={() => addItem(item)}
              />
              <BsFillNodeMinusFill
                className='quantity-btn'
                onClick={() => removeItem(item)}
              />
            </div>
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
