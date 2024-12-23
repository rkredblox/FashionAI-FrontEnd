import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import './style.css';

function HomeComponent() {
  const navigate = useNavigate();

  const handleChange = () => {
    // navigate("/products")
    navigate("/selectproduct")
  }
  const handleChangeOne = () => {
    navigate("/products")
  }

  return (
    <div className="home-container">
      {/* Image */}
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg"
        alt="Beautify with AI"
        className="mb-6 rounded-full shadow-lg w-40 h-40 object-cover"
      />

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4">
        Beautify Anything with AI Power
      </h1>

      {/* Subheading */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto">
        AI-Fashion uses cutting-edge AI technology to enhance your photos, try on clothes virtually, create stunning product images, and more.
      </h3>

      {/* Button */}
      <button onClick={handleChange} className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300">
        Start Beautifying
      </button>
      <br />
      <br />
      {/* <button onClick={handleChangeOne} className="bg-gray-500 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300">
        Sample
      </button> */}
      <a
        href="/products"
        className="flex items-center px-4 py-2 text-md font-semibold bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition duration-300 ease-in-out shadow-sm"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        Old form
        <ArrowUpRightIcon className="ml-2 w-5 h-5" />
      </a>

    </div>
  );
}

export default HomeComponent;
