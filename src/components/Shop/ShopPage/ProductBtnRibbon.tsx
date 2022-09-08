import React from 'react';
import {
  BsFillCartPlusFill,
  BsBoxArrowUpRight,
  BsFillEyeFill,
} from 'react-icons/bs';
import Product from './ProductInterface';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
  handleAddToCart: (id: number) => void;
}

const ProductBtnRibbon: React.FC<Props> = ({ product, handleAddToCart }) => {
  const handleClickOut = () => {
    window.open(product.purchaseAt);
  };

  return (
    <div className='btn-ribbon'>
      <Link className='view-btn' to={`/shop/${product.id}`}>
        <BsFillEyeFill className='btn-ribbon-icon' />
      </Link>
      <BsFillCartPlusFill
        className='btn-ribbon-icon'
        onClick={() => handleAddToCart(product.id)}
      />
      <BsBoxArrowUpRight className='btn-ribbon-icon' onClick={handleClickOut} />
    </div>
  );
};

export default ProductBtnRibbon;
