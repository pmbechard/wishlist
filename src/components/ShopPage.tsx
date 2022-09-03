import React from 'react';
import { motion } from 'framer-motion';

const ShopPage: React.FC = () => {
  return (
    <motion.div
      key={new Date().getTime()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{ opacity: 1 }}
      className='homepage-container'
    >
      <div data-testid='shop-container'>Shop</div>
    </motion.div>
  );
};

export default ShopPage;
