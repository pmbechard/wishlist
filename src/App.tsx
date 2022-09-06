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
  const productsList: Product[] = Array.from(products);
  const [getProducts, setProducts] = useState<Product[]>([]);
  const [getSortBy, setSortBy] = useState<string>('name-az');
  const [getAllTags, setAllTags] = useState<string[]>([]);
  const [getActiveTags, setActiveTags] = useState<string[]>([]);
  const [getShopFade, setShopFade] = useState<boolean>(true);

  // FIXME: products not appearing alphabetically on init load

  useEffect(() => {
    const fetchTags = (): string[] => {
      const tags: string[] = [];
      // eslint-disable-next-line array-callback-return
      products.map((product) => {
        for (let i = 0; i < product.tags.length; i++)
          if (!tags.includes(product.tags[i]))
            tags.push(product.tags[i].toLowerCase());
      });
      return tags.sort();
    };
    const currentTags = fetchTags();
    setAllTags(currentTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setActiveTags(getAllTags);
  }, [getAllTags]);

  useEffect(() => {
    const getSortedProducts = (): Product[] => {
      if (getSortBy === 'name-az') {
        return productsList.sort((a: Product, b: Product) => {
          return a.name.toLowerCase() >= b.name.toLowerCase() ? 1 : -1;
        });
      } else if (getSortBy === 'name-za') {
        return productsList.sort((a: Product, b: Product) => {
          return a.name.toLowerCase() >= b.name.toLowerCase() ? -1 : 1;
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

  useEffect(() => {
    setProducts(
      productsList.filter((product) => {
        for (let i = 0; i < product.tags.length; i++) {
          if (getActiveTags.includes(product.tags[i])) return product;
        }
      })
    );
  }, [getActiveTags]);

  const handleTagClick = (e: HTMLDivElement): void => {
    const tagName = e.textContent || '';
    const isEnabled = !e.classList.contains('disabled-tag');
    if (!isEnabled) {
      const index = getActiveTags.indexOf(tagName);
      setActiveTags(
        getActiveTags.slice(0, index).concat(getActiveTags.slice(index + 1))
      );
    } else {
      setActiveTags(getActiveTags.concat(tagName));
    }
  };

  const toggleTag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains('disabled-tag')) {
      e.currentTarget.classList.remove('disabled-tag');
    } else {
      e.currentTarget.classList.add('disabled-tag');
    }
    handleTagClick(e.currentTarget);
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar setShopFade={setShopFade} />
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
                  getAllTags={getAllTags}
                  getActiveTags={getActiveTags}
                  toggleTag={toggleTag}
                  getShopFade={getShopFade}
                  setShopFade={setShopFade}
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
