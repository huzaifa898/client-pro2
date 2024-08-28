import React from 'react';
import Bisimg4 from '../Images/Bisimg4.jpg'; // Ensure the image path is correct

const Hero = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${Bisimg4})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Wholesale Biscuits for Every Taste</h1>
        <p className="text-lg md:text-2xl mb-8">Supplying the best biscuits to shops and stores</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Explore Our Products
        </a>
      </div>
    </div>
  );
};

export default Hero;
