import React from 'react';
import { motion } from 'framer-motion';
import Product from './Products/ProductInterface';
import SortBar from './Products/SortBar';
import ProductsArea from './Products/ProductsArea';
import FloatingCart from './Cart/FloatingCart';

interface Props {
  getProducts: Product[];
  getSortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  getAllTags: string[];
  getActiveTags: string[];
  toggleTag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  getShopFade: boolean;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
  handleProductView: (product: Product) => void;
}

const ShopPage: React.FC<Props> = ({
  getProducts,
  getSortBy,
  setSortBy,
  getAllTags,
  getActiveTags,
  toggleTag,
  getShopFade,
  setShopFade,
  handleProductView,
}) => {
  return (
    <motion.div
      key={new Date().getTime()}
      initial={{ opacity: `${getShopFade ? 0 : 1}` }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{ opacity: 1 }}
      data-testid='shop-container'
      className='shop-container'
    >
      <FloatingCart />
      <SortBar
        products={getProducts}
        getSortBy={getSortBy}
        setSortBy={setSortBy}
        getAllTags={getAllTags}
        getActiveTags={getActiveTags}
        toggleTag={toggleTag}
        setShopFade={setShopFade}
      />
      <ProductsArea
        products={getProducts}
        handleProductView={handleProductView}
      />
    </motion.div>
  );
};

export default ShopPage;
