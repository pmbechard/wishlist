import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import Product from './ProductInterface';

interface Props {
  products: Product[];
  handleAddToCart: (id: number) => void;
}

const ProductsArea: React.FC<Props> = ({ products, handleAddToCart }) => {
  useEffect(() => {}, [products]);

  return (
    <div className='products-area'>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsArea;
