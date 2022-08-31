import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { BsFillPersonFill, BsBasketFill } from 'react-icons/bs';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className='logo-area'>
        <BsBasketFill className='logo' />
        <h1>Wishlist Shoppe</h1>
      </div>
      <ul className='nav-links'>
        <Link to='/' className='nav-link'>
          <li className='nav-link'>
            <AiFillHome className='icon' /> Home
          </li>
        </Link>
        <Link to='about' className='nav-link'>
          <li className='nav-link'>
            <BsFillPersonFill className='icon' />
            About Us
          </li>
        </Link>
        <Link to='shop' className='nav-link'>
          <li className='nav-link'>
            <AiFillShopping className='icon' />
            Shop
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
