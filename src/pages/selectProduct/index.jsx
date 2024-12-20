import React, { useState } from 'react';
import { Bars3Icon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ProductForm from './ProductForm';

function SelectProduct() {
  const [cart, setCart] = useState([]);
  const [dimensions, setDimensions] = useState(null);
  const [photo, setPhoto] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-100 py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-3">
            <Bars3Icon className="w-6 h-6" />
            <h1
              className="text-2xl font-extrabold tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Virtual Try-On
            </h1>
          </div>

          
          <a
            href="/"
            className="flex items-center px-4 py-2 text-md font-semibold bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition duration-300 ease-in-out shadow-sm"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Learn More
            <ArrowUpRightIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </nav>

      <div className="py-8 px-4 sm:px-8">
        <div>
          <ProductForm onSubmit={(data) => setDimensions(data)} />
          {dimensions && photo && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Your Dimensions:
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800">
                {JSON.stringify(dimensions, null, 2)}
              </pre>
              <h3 className="text-2xl font-semibold text-gray-700 mt-6">
                Uploaded Photo:
              </h3>
              <img
                src={URL.createObjectURL(photo)}
                alt="Uploaded"
                className="w-48 h-auto mt-4 rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
        {/* <div className="mt-8">
          <ProductCatalog />
        </div> */}
      </div>
    </div>
  );
}

export default SelectProduct;
