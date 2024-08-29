import React from 'react';
import Bisimg4 from '../Images/Bisimg4.jpg'; // Ensure the image path is correct

const Hero = () => {
  return (
    <div
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center" // Changed height to 50% of the viewport
      style={{ backgroundImage: `url(${Bisimg4})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          Wholesale Biscuits for Every Taste
        </h1>
        <p className="text-base md:text-lg lg:text-2xl mb-8 drop-shadow-lg">
          Supplying the best biscuits to shops and stores
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Explore Our Products
        </a>
      </div>
    </div>
  );
};

export default Hero;
