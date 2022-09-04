import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Product from './ProductInterface';
import products from './../data/products.json';
import ProductCard from './ProductCard';
import SortBar from './SortBar';

const ShopPage: React.FC = () => {
  const [getProducts, setProducts] = useState<Product[]>([]);
  // for future use if/when products are fetched from API call
  const [, setProductsAreLoading] = useState<boolean>(false);

  useEffect((): void => {
    const loadProducts = async () => {
      setProductsAreLoading(true);
      setProducts(products);
      setProductsAreLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <motion.div
      key={new Date().getTime()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{ opacity: 1 }}
      data-testid='shop-container'
      className='shop-container'
    >
      {/* TODO: ADD FLOATING SHOPPING CART MODAL OPTION */}
      {/* TODO: ADD SORT BY AND FILTER OPTIONS */}
      <SortBar products={products} />
      <div className='products-area'>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </motion.div>
  );
};

export default ShopPage;
