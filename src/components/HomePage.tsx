import React from 'react';
import mainImg from '../img/home-img.jpg';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='homepage-container'>
      <img src={mainImg} alt='main-img' className='home-img' />
      <div className='buttons'>
        <Link to='about/'>
          <button>
            <span>Learn more about our team</span>{' '}
            <BsFillArrowRightSquareFill />
          </button>
        </Link>
        <Link to='shop/'>
          <button>
            <span>Check out the goods</span> <BsFillArrowRightSquareFill />
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
