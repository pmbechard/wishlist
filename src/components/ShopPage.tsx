import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import products from './../data/products.json';

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  purchaseAt: string;
  tags: string[];
}

const ShopPage: React.FC = () => {
  const [getProducts, setProducts] = useState<Product[]>([]);
  const [productsAreLoading, setProductsAreLoading] = useState<boolean>(false);

  useEffect((): void => {
    const loadProducts = async () => {
      setProductsAreLoading(true);
      setProducts(products);
      setProductsAreLoading(false);
    };
    loadProducts();
  }, []);

  console.log(getProducts);

  return (
    <motion.div
      key={new Date().getTime()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{ opacity: 1 }}
      className='homepage-container'
    >
      <div data-testid='shop-container' className='shop-container'>
        {products.map((product) => {
          return (
            <div key={product.id} className='product-card'>
              <div>{product.name}</div>
              <img src={product.img} alt={product.name} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ShopPage;
