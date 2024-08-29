import React from 'react';
import Bisimg4 from '../Images/Bisimg4.png'; // Ensure the image path is correct

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Flex Container for Text and Image */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-8 gap-12">
        
        {/* Left Side Content */}
        <div className="text-white px-4 md:w-1/2 lg:w-2/5 text-center md:text-left mx-4 md:mx-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            Wholesale Biscuits for Every Taste
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 drop-shadow-lg">
            Supplying the best biscuits to shops and stores
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:bg-orange-600 hover:shadow-2xl"
          >
            Explore Our Products
          </a>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center md:justify-end mx-4 md:mx-8">
          <img src={Bisimg4} alt="Biscuits" className="w-4/5 md:w-full h-auto object-contain rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
