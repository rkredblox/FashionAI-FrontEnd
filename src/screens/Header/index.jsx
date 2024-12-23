import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function HeaderNavBar() {
  return (
    <header className="shadow-md py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Container for Navbar */}
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo with Website Name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvfdlSTWDeTPiHUgW6QCO8-syOtv9KmkE9g&s"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 style={{ color: "white" }} className="text-xl font-bold text-800">AI-Fashion</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center space-x-6 mt-4 sm:mt-0">
          {/* Products Dropdown */}
          <div className="relative group">
            {/* <button style={{color: "#a6adbb"}} className="flex items-center text-gray-600 hover:text-blue-600"> */}
            {/* <button style={{color: "#fff"}} className="flex items-center text-gray-600 hover:text-gray-600 font-bold">
              Products
              <img
                src="https://via.placeholder.com/10x10?text=↓"
                alt="Arrow Down"
                className="ml-1 w-3 h-3"
              />
            </button> */}
            <button
              style={{ color: "#fff" }}
              className="flex items-center text-gray-600 hover:text-gray-600 font-bold"
            >
              Products
              <ChevronDownIcon className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-md py-2 w-40">
              <a
                style={{
                  color: "#a6adbb", 
                }}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-600"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-600"
              >
                Extension
              </a>
            </div>
          </div>

          {/* Static Links */}
          {/* <a
            href="#"
            className="text-white-600 hover:text-gray-600 font-medium"
          >
            Pricing
          </a> */}
          <a
            href="#"
            className="text-white-600 hover:text-gray-600 font-medium"
          >
            Extension
          </a>
          <a
            href="#"
            className="text-white-600 hover:text-gray-600 font-medium"
          >
            API
          </a>
        </nav>
      </div>
    </header>
  );
}

export default HeaderNavBar;
