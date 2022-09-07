import React from 'react';
import Product from '../ShopPage/ProductInterface';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill, BsFillCartPlusFill } from 'react-icons/bs';

interface Props {
  product: Product;
}

const LargeProductView: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className='product-page-container'>
        <div className='large-product-view-info'>
          <h1>{product.name}</h1>
          <h2>Price: {product.price}USD</h2>
          <h2>
            <a href={product.purchaseAt} target='_blank' rel='noreferrer'>
              Buy it here
            </a>
          </h2>
          <p>
            Tags:{' '}
            {product.tags.map((tag) => {
              if (product.tags.indexOf(tag) === product.tags.length - 1)
                return tag;
              return tag + ', ';
            })}
          </p>
          <div className='product-page-btns'>
            <Link to='/shop/'>
              <BsFillArrowLeftSquareFill className='product-page-icon' />
            </Link>
            <BsFillCartPlusFill className='product-page-icon' />
          </div>
        </div>
        <img src={product.img} alt={product.name} />
      </div>
    </>
  );
};

export default LargeProductView;
