import React, { useState, useEffect } from 'react';

// Sample customer reviews data
const reviews = [
  {
    id: 1,
    name: 'John Doe',
    text: 'The biscuits from Biscuit Agency are absolutely delicious! My customers love them.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Amazing variety and top-notch quality. Highly recommend!',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    text: 'Fantastic customer service and great product range. Five stars!',
  },
  // Add more reviews as needed
];

const Rev = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000); // Change every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % reviews.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto mt-16 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Customer Satisfaction</h2>

        <div className="relative flex flex-col items-center">
          {/* Review Content */}
          <div className="text-center">
            <p className="text-lg italic text-gray-300 mb-4">{reviews[currentIndex].text}</p>
            <h3 className="text-xl font-semibold text-white">{reviews[currentIndex].name}</h3>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full mt-6">
            <button
              onClick={handlePrevClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rev;
