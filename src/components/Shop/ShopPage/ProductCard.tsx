import React from 'react';
import Product from './ProductInterface';
import ProductBtnRibbon from './ProductBtnRibbon';

interface Props {
  product: Product;
  handleAddToCart: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, handleAddToCart }) => {
  return (
    <div className='product-card' id={`pc-${product.id}`}>
      <h1>
        {product.name.length < 35
          ? product.name
          : `${product.name.slice(0, 40)}...`}
      </h1>
      <div className='product-img-container'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='product-footer'>
        <h2>{product.price}USD</h2>
        <ProductBtnRibbon product={product} handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
