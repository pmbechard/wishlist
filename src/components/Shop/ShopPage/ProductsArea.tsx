import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import Product from './ProductInterface';

interface Props {
  products: Product[];
}

const ProductsArea: React.FC<Props> = ({ products }) => {
  useEffect(() => {}, [products]);

  return (
    <div className='products-area'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsArea;
