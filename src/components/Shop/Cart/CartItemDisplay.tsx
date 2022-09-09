import React from 'react';
import { BsFillNodeMinusFill, BsFillNodePlusFill } from 'react-icons/bs';
import Product from '../ShopPage/ProductInterface';
import CartTotalArea from './CartTotalArea';
import { ItemQuantities } from './ItemQuantitiesInterface';

interface Props {
  getQuantities: ItemQuantities[];
  setQuantities: React.Dispatch<
    React.SetStateAction<ItemQuantities[] | undefined>
  >;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getInCart: Product[];
  setInCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartItemDisplay: React.FC<Props> = ({
  getQuantities,
  setQuantities,
  setCartIsOpen,
  getInCart,
  setInCart,
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
    setInCart(
      getInCart.concat({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        purchaseAt: item.purchaseAt,
        tags: item.tags,
      })
    );
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

    const updatedCartItems: Product[] = [];
    for (let i = 0; i < updatedQuantities.length; i++) {
      for (let j = 0; j < updatedQuantities[i].quantity; j++) {
        updatedCartItems.push({
          id: updatedQuantities[i].id,
          name: updatedQuantities[i].name,
          price: updatedQuantities[i].price,
          img: updatedQuantities[i].img,
          purchaseAt: updatedQuantities[i].purchaseAt,
          tags: updatedQuantities[i].tags,
        });
      }
    }

    setQuantities(updatedQuantities);
    setInCart(updatedCartItems);
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
