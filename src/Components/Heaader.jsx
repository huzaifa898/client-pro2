import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Biscuit Agency</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">About Us</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Products</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
