import React, { useEffect, useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillBagXFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import FloatingCart from '../Cart/FloatingCart';
import Product from '../ShopPage/ProductInterface';
import LargeProductView from './LargeProductView';

interface Props {
  products: Product[];
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddToCart: (id: number) => void;
  getInCart: Product[];
}

const ProductPage: React.FC<Props> = ({
  products,
  setCartIsOpen,
  setShopFade,
  handleAddToCart,
  getInCart,
}) => {
  const [getProduct, setProduct] = useState<Product>();
  const { id } = useParams<string>();

  useEffect(() => {
    const getItem = (): Product | undefined => {
      for (let i = 0; i < products.length; i++)
        if (String(products[i].id) === id) return products[i];
    };
    setProduct(getItem());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FloatingCart
        setCartIsOpen={setCartIsOpen}
        setShopFade={setShopFade}
        getInCart={getInCart}
      />
      {getProduct ? (
        <LargeProductView
          product={getProduct}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <div className='product-not-found-error'>
          <BsFillBagXFill className='error-icon' />
          <h2>Product not found...</h2>
          <Link to='/shop/' className='product-page-btns'>
            <BsFillArrowLeftSquareFill className='product-page-icon' />
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductPage;
