import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <footer>
      <a
        className='gh-link'
        href='https://www.github.com/pmbechard'
        target='_blank'
      >
        <BsGithub />
        <small>Peyton Bechard &copy; 2022</small>
      </a>
    </footer>
  );
};

export default Footer;
