import React from 'react';
import { motion } from 'framer-motion';
import Bisimg1 from '../Images/Bisimg1.jpg'; // Ensure the image path is correct

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] md:h-[700px] flex items-center justify-center my-8 mx-4 md:mx-16 lg:mx-24"
      style={{ backgroundImage: `url(${Bisimg1})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 rounded-lg"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center text-white p-6 lg:p-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Discover Our Exclusive Range of Biscuits
        </motion.h2>

        {/* Animated Subheading */}
        <motion.p
          className="text-lg md:text-2xl mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
        >
          Freshly baked, deliciously packed!
        </motion.p>

        {/* Animated Button */}
        <motion.a
          href="#"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
};

export default Banner;
