import React from 'react';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { BsFillPersonFill, BsBookmarkCheckFill } from 'react-icons/bs';

const NavBar = () => {
  return (
    <nav>
      <div className='logo-area'>
        <BsBookmarkCheckFill className='logo' />
        <h1>Wishlist Shoppe</h1>
      </div>
      <ul className='nav-links'>
        <li>
          <AiFillHome /> Home
        </li>
        <li>
          <BsFillPersonFill />
          About Us
        </li>
        <li>
          <AiFillShopping />
          Shop
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
