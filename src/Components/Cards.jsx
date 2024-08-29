import React from 'react';
import { motion } from 'framer-motion';
import Biscuits1 from '../Images/Biscuits1.jpg'; // Replace with actual images
import Biscuits2 from '../Images/Biscuits2.jpg';
import Biscuits3 from '../Images/Biscuits3.jpg';
import Biscuits4 from '../Images/Biscuits4.jpg';
import Biscuits5 from '../Images/Biscuits5.jpg';
import Biscuits6 from '../Images/Biscuits6.jpg';

const cardData = [
  { id: 1, title: 'Chocolate Chip Biscuits', image: Biscuits1 },
  { id: 2, title: 'Oatmeal Biscuits', image: Biscuits2 },
  { id: 3, title: 'Butter Biscuits', image: Biscuits3 },
  { id: 4, title: 'Ginger Biscuits', image: Biscuits4 },
  { id: 5, title: 'Shortbread Biscuits', image: Biscuits5 },
  { id: 6, title: 'Digestive Biscuits', image: Biscuits6 },
];

const Cards = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }} // Hover animation
              initial={{ opacity: 0, y: 50 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation on load
              transition={{ duration: 0.5, delay: card.id * 0.1 }} // Staggered entrance animation
            >
              {/* Card Image */}
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />

              {/* Card Content */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">Delicious and freshly baked biscuits perfect for any occasion.</p>
                <a href="#" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                  View More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
