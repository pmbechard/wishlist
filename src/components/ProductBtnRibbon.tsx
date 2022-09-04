import React from 'react';
import { BsFillCartPlusFill, BsBoxArrowUpRight } from 'react-icons/bs';

interface Props {
  productID: number;
}

const ProductBtnRibbon: React.FC<Props> = ({ productID }) => {
  return (
    <div className='btn-ribbon'>
      <BsFillCartPlusFill className='btn-ribbon-icon' />
      <BsBoxArrowUpRight className='btn-ribbon-icon' />
    </div>
  );
};

export default ProductBtnRibbon;
