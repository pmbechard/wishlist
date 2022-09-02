import React from 'react';
import aboutImg from '../img/about-img.jpg';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      key={new Date().getTime()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{ opacity: 1 }}
    >
      <img src={aboutImg} alt='about-img' className='home-img' />
      <div className='about-body'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nesciunt
          explicabo iure cumque perferendis quos quidem voluptatem est soluta
          sint quo recusandae magni obcaecati, hic consequuntur voluptas nisi ab
          unde provident repellendus illum. Est debitis ducimus perspiciatis
          quas. Accusamus, nesciunt! Eius consequatur et tempora architecto
          expedita perferendis, vero optio quam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          consequuntur dolorem nobis vero laborum, consequatur error repudiandae
          eum numquam, porro voluptate reiciendis atque, deserunt
          necessitatibus?
        </p>
      </div>
      <p className='img-credit'>
        <a href='https://www.pexels.com/photo/white-motor-scooter-near-open-door-219095/'>
          Photo by mali maeder
        </a>
      </p>
    </motion.div>
  );
};

export default AboutPage;
