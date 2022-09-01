import React from 'react';
import mainImg from '../img/home-img.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='homepage-container'>
      <img src={mainImg} alt='main-img' className='home-img' />
      <div className='buttons'>
        <Link to='about/'>
          <button>
            Learn more about our team <BsArrowRight />
          </button>
        </Link>
        <Link to='shop/'>
          <button>
            Check out the goods <BsArrowRight />
          </button>
        </Link>
      </div>
      <p className='img-credit'>
        <a href='https://www.pexels.com/@roman-ska-3453281/'>
          Photo by Roman Ska
        </a>
      </p>
    </div>
  );
};

export default HomePage;
