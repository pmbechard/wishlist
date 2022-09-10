import React from 'react';
import { motion } from 'framer-motion';
import Product from './ProductInterface';
import SortBar from './SortBar';
import ProductsArea from './ProductsArea';
import FloatingCart from '../Cart/FloatingCart';

interface Props {
  getProducts: Product[];
  getSortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  getAllTags: string[];
  getActiveTags: string[];
  toggleTag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  getShopFade: boolean;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddToCart: (id: number) => void;
  getInCart: Product[];
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
  setCartIsOpen,
  handleAddToCart,
  getInCart,
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
      <FloatingCart
        setCartIsOpen={setCartIsOpen}
        setShopFade={setShopFade}
        getInCart={getInCart}
      />
      <SortBar
        products={getProducts}
        getSortBy={getSortBy}
        setSortBy={setSortBy}
        getAllTags={getAllTags}
        getActiveTags={getActiveTags}
        toggleTag={toggleTag}
        setShopFade={setShopFade}
      />
      <ProductsArea products={getProducts} handleAddToCart={handleAddToCart} />
    </motion.div>
  );
};

export default ShopPage;
