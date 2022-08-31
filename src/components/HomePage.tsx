import React from 'react';
import mainImg from '../img/home-img.jpg';

const HomePage: React.FC = () => {
  return (
    <div>
      <img src={mainImg} alt='main-img' className='home-img' />
      {/* Photo by Roman Ska */}
    </div>
  );
};

export default HomePage;
