import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Footer from './components/Footer';
import Product from './components/ProductInterface';
import products from './data/products.json';

const App: React.FC = () => {
  const productsList: Product[] = structuredClone(products);
  const [getProducts, setProducts] = useState<Product[]>([]);
  const [getSortBy, setSortBy] = useState<string>('name-az');
  const [getActiveTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    const getSortedProducts = (): Product[] => {
      if (getSortBy === 'name-az') {
        return productsList.sort((a: Product, b: Product) => {
          return a.name >= b.name ? 1 : -1;
        });
      } else if (getSortBy === 'name-za') {
        return productsList.sort((a: Product, b: Product) => {
          return a.name >= b.name ? -1 : 1;
        });
      } else if (getSortBy === 'price-lh') {
        return productsList.sort((a: Product, b: Product) => {
          return parseInt(a.price) >= parseInt(b.price) ? 1 : -1;
        });
      } else {
        return productsList.sort((a: Product, b: Product) => {
          return parseInt(a.price) <= parseInt(b.price) ? 1 : -1;
        });
      }
    };
    setProducts(getSortedProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSortBy]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/shop'
              element={
                <ShopPage
                  getProducts={getProducts}
                  getSortBy={getSortBy}
                  setSortBy={setSortBy}
                  getActiveTags={getActiveTags}
                  setActiveTags={setActiveTags}
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
