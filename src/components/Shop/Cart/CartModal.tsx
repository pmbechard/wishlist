import React, { useEffect, useState } from 'react';
import {
  BsExclamationSquareFill,
  BsFillArrowLeftSquareFill,
  BsFillFileXFill,
} from 'react-icons/bs';
import Product from '../ShopPage/ProductInterface';
import CartItemDisplay from './CartItemDisplay';
import { ItemQuantities } from './ItemQuantitiesInterface';

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
              ...getInCart[i],
              quantity: 1,
            });
            break;
          }
        }
        if (quantitiesList.length === 0) {
          quantitiesList.push({
            ...getInCart[i],
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
          getCartIsOpen ? 'slide-in' : 'closed'
        }`}
      >
        <div className='cart-exit-btn-container'>
          <BsFillFileXFill
            className='close-cart-icon'
            onClick={() => setCartIsOpen(false)}
          />
        </div>
        {getQuantities && getQuantities.length > 0 ? (
          <CartItemDisplay getQuantities={getQuantities} />
        ) : (
          <div className='empty-cart-msg'>
            <BsExclamationSquareFill className='empty-cart-icon' />
            <h1>Cart is empty</h1>
            <h2>Get shopping!</h2>
            <BsFillArrowLeftSquareFill
              onClick={() => setCartIsOpen(false)}
              className='empty-cart-back'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
