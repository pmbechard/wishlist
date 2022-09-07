import React from 'react';
import {
  BsFillCartPlusFill,
  BsBoxArrowUpRight,
  BsFillEyeFill,
} from 'react-icons/bs';
import Product from './ProductInterface';

interface Props {
  product: Product;
  handleProductView: (product: Product) => void;
}

const ProductBtnRibbon: React.FC<Props> = ({ product, handleProductView }) => {
  const handleClickOut = () => {
    window.open(product.purchaseAt);
  };

  return (
    <div className='btn-ribbon'>
      <BsFillEyeFill
        className='btn-ribbon-icon'
        onClick={(e) => handleProductView(product)}
      />
      <BsFillCartPlusFill
        className='btn-ribbon-icon'
        onClick={() => console.log('clicked')}
      />
      <BsBoxArrowUpRight className='btn-ribbon-icon' onClick={handleClickOut} />
    </div>
  );
};

export default ProductBtnRibbon;
