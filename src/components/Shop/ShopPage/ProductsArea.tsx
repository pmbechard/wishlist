import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import Product from './ProductInterface';

interface Props {
  products: Product[];
  handleProductView: (product: Product) => void;
}

const ProductsArea: React.FC<Props> = ({ products, handleProductView }) => {
  useEffect(() => {}, [products]);

  return (
    <div className='products-area'>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            handleProductView={handleProductView}
          />
        );
      })}
    </div>
  );
};

export default ProductsArea;
