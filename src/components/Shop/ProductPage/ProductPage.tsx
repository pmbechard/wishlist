import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../ShopPage/ProductInterface';

interface Props {
  products: Product[];
}

const ProductPage: React.FC<Props> = ({ products }) => {
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
    <div className='product-page-container'>
      {getProduct ? (
        <img src={getProduct.img} alt={getProduct.name} />
      ) : (
        'Product not found...'
      )}
    </div>
  );
};

export default ProductPage;
