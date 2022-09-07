import React from 'react';
import Product from './ProductInterface';
import ProductBtnRibbon from './ProductBtnRibbon';

interface Props {
  product: Product;
  handleProductView: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, handleProductView }) => {
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
        <ProductBtnRibbon
          product={product}
          handleProductView={handleProductView}
        />
      </div>
    </div>
  );
};

export default ProductCard;
