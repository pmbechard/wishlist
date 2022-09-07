import React from 'react';
import Product from '../ShopPage/ProductInterface';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

interface Props {
  product: Product;
}

const LargeProductView: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className='product-page-container'>
        <div className='large-product-view-info'>
          <h2>{product.name}</h2>
          <h3>Price: {product.price}USD</h3>
          <h3>
            <a href={product.purchaseAt} target='_blank' rel='noreferrer'>
              Buy it here
            </a>
          </h3>
          <p>
            Tags:{' '}
            {product.tags.map((tag) => {
              if (product.tags.indexOf(tag) === product.tags.length - 1)
                return tag;
              return tag + ', ';
            })}
          </p>
          <Link to='/shop/'>
            <BsFillArrowLeftSquareFill />
          </Link>
        </div>
        <img src={product.img} alt={product.name} />
      </div>
    </>
  );
};

export default LargeProductView;
