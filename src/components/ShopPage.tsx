import React from 'react';
import { motion } from 'framer-motion';
import Product from './ProductInterface';
import SortBar from './SortBar';
import ProductsArea from './ProductsArea';

interface Props {
  getProducts: Product[];
  getSortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const ShopPage: React.FC<Props> = ({ getProducts, getSortBy, setSortBy }) => {
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
      <SortBar
        products={getProducts}
        getSortBy={getSortBy}
        setSortBy={setSortBy}
      />
      <ProductsArea products={getProducts} />
    </motion.div>
  );
};

export default ShopPage;
