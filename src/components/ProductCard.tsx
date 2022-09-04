import React from 'react';
import Product from './ProductInterface';
import ProductBtnRibbon from './ProductBtnRibbon';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className='product-card'>
      <h3>{product.name}</h3>
      <div className='product-img-container'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='product-footer'>
        <h4>{product.price}USD</h4>
        <ProductBtnRibbon product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
