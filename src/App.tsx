import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/shop' element={<ShopPage />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
