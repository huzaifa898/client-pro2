import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Upper Part of Footer */}
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Biscuit Agency</h3>
            <p className="text-gray-400">Supplying the best biscuits to shops and stores worldwide. Quality you can trust, taste you will love.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@biscuitagency.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Biscuit Lane, Sweet Town</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.6-2.46.7a4.3 4.3 0 001.9-2.4 8.5 8.5 0 01-2.7 1A4.3 4.3 0 0016.22 4c-2.35 0-4.27 1.92-4.27 4.27 0 .33.04.65.11.96A12.1 12.1 0 013 5.8c-.36.62-.56 1.34-.56 2.1 0 1.45.74 2.73 1.86 3.48a4.2 4.2 0 01-1.93-.53v.05c0 2 1.41 3.7 3.29 4.08-.35.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.94 2.98a8.6 8.6 0 01-5.3 1.83c-.34 0-.68-.02-1.02-.06A12.2 12.2 0 006.74 21c7.86 0 12.16-6.5 12.16-12.16 0-.19-.01-.39-.02-.58a8.66 8.66 0 002.12-2.22z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8a1 1 0 000 2h3v6a1 1 0 001 1h2a1 1 0 001-1v-6h3a1 1 0 000-2h-3V6a1 1 0 011-1h2a1 1 0 001-1z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm0 17.92c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13h1v6l5 3-1 1.7-4.5-2.7v-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Part of Footer */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Biscuit Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
