import React from 'react';
import { BsFillCartPlusFill, BsBoxArrowUpRight } from 'react-icons/bs';
import Product from './ProductInterface';

interface Props {
  product: Product;
}

const ProductBtnRibbon: React.FC<Props> = ({ product }) => {
  const handleClickOut = () => {
    window.open(product.purchaseAt);
  };

  return (
    <div className='btn-ribbon'>
      <BsFillCartPlusFill className='btn-ribbon-icon' />
      <BsBoxArrowUpRight className='btn-ribbon-icon' onClick={handleClickOut} />
    </div>
  );
};

export default ProductBtnRibbon;
