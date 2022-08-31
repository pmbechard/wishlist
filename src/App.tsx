import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<h3>Home</h3>} />
          <Route path='/about' element={<h3>About</h3>} />
          <Route path='/shop' element={<h3>Shop</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
