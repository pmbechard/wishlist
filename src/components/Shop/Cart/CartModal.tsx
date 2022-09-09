import React, { useEffect, useState } from 'react';
import { BsExclamationSquareFill } from 'react-icons/bs';
import Product from '../ShopPage/ProductInterface';

interface Props {
  getCartIsOpen: boolean;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
  getInCart: Product[];
}

interface ItemQuantities {
  id: number;
  name: string;
  quantity: number;
}

const CartModal: React.FC<Props> = ({
  getCartIsOpen,
  setCartIsOpen,
  setShopFade,
  getInCart,
}) => {
  const [getQuantities, setQuantities] = useState<ItemQuantities[]>();

  useEffect(() => {
    const processQuantities = () => {
      if (!getInCart) return;
      const quantitiesList: ItemQuantities[] = [];
      for (let i = 0; i < getInCart.length; i++) {
        for (let j = 0; j < quantitiesList.length; j++) {
          if (getInCart[i].name === quantitiesList[j].name) {
            quantitiesList[j].quantity++;
            break;
          }
          if (quantitiesList.length - 1 === j) {
            quantitiesList.push({
              id: getInCart[i].id,
              name: getInCart[i].name,
              quantity: 1,
            });
            break;
          }
        }
        if (quantitiesList.length === 0) {
          quantitiesList.push({
            id: getInCart[i].id,
            name: getInCart[i].name,
            quantity: 1,
          });
        }
      }
      return quantitiesList;
    };

    setQuantities(processQuantities);
  }, [getInCart]);

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
        {getQuantities
          ? getQuantities.map((item) => (
              <div className='cart-item'>
                {item.quantity}x - {item.name}
              </div>
            ))
          : 'Cart is empty'}
      </div>
    </div>
  );
};

export default CartModal;
