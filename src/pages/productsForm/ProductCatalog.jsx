import React, { useEffect, useState } from "react";
// import axios from "axios";
import productsLists from "./question.json";
import './style.css';

// console.log(productsLists.ProductsForWomen.map((item)=>) , "productsLists....");

// const res = productsLists.ProductsForWomen.map((item)=>{
//     console.log(item, "itemmmmmmmm");
// })
const ProductCatalog = () => {
    const [products, setProducts] = useState(["Sample data"]);

    useEffect(() => {
        // Fetch product data
        // axios.get("/api/products").then((response) => {
        //   setProducts(response.data);
        // });
    }, []);

    return (

        // <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
        //     <h3 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide leading-snug drop-shadow-md">
        //         Product Catalog
        //     </h3>
        //     <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        //         {productsLists.map((product) => (
        //             <div
        //                 key={product.id}
        //                 className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition duration-300 w-[300px]"
        //             >
        //                 <img
        //                     src={product.image}
        //                     alt={product.name}
        //                     className="w-40 h-40 object-cover rounded-lg mb-4"
        //                 />
        //                 <h4 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        //                     {product.name}
        //                 </h4>
        //                 <p className="text-gray-600 text-center mt-2 text-sm">
        //                     {product.description}
        //                 </p>
        //                 <p className="text-lg font-bold text-blue-600 mt-4">
        //                     ${product.price}
        //                 </p>
        //                 {/* <button
        //   className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
        // >
        //   Add to Cart
        // </button> */}
        //             </div>
        //         ))}
        //     </div>
        // </div>
        // <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
        //     <h3 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide leading-snug drop-shadow-md">
        //         Product Catalog
        //     </h3>
        //     <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        //         {productsLists.map((product) => (
        //             <div
        //                 key={product.id}
        //                 className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
        //             >
        //                 <img
        //                     src={product.image}
        //                     alt={product.name}
        //                     className="w-40 h-40 object-cover rounded-lg mb-4"
        //                 />
        //                 <h4 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        //                     {product.name}
        //                 </h4>
        //                 <p className="text-gray-600 text-center mt-2 text-sm">
        //                     {product.description}
        //                 </p>
        //                 <p className="text-lg font-bold text-blue-600 mt-4">
        //                     ${product.price}
        //                 </p>
        //                 {/* <button
        //   className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
        // >
        //   Add to Cart
        // </button> */}
        //             </div>
        //         ))}
        //     </div>
        // </div>
        //         <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
        //     <h3 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide leading-snug drop-shadow-md">
        //         Product Catalog
        //     </h3>
        //     <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        //         {productsLists.map((product) => (
        //             <div
        //                 key={product.id}
        //                 className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
        //             >
        //                 <img
        //                     src={product.image}
        //                     alt={product.name}
        //                     className="w-40 h-40 object-cover rounded-lg mb-4"
        //                 />
        //                 <h4 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        //                     {product.name}
        //                 </h4>
        //                 <p className="text-gray-600 text-center mt-2 text-sm">
        //                     {product.description}
        //                 </p>
        //                 <p className="text-lg font-bold text-blue-600 mt-4">
        //                     ${product.price}
        //                 </p>
        //                 {/* <button
        //           className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
        //         >
        //           Add to Cart
        //         </button> */}
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
            {/* <h3 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide leading-snug drop-shadow-md"> */}
            <h3 className="product-heading">
                Product Catalog
            </h3>
            <div className="product-grid">
                {productsLists.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-40 h-40 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                            {product.name}
                        </h4>
                        <p className="text-gray-600 text-center mt-2 text-sm">
                            {product.description}
                        </p>
                        <p className="text-lg font-bold text-blue-600 mt-4">
                            ${product.price}
                        </p>
                    </div>
                ))}
            </div>
            {/* <h3 className="product-heading">
                Cloth for men
            </h3>
            <div className="product-grid">
                {productsLists.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-40 h-40 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                            {product.name}
                        </h4>
                        <p className="text-gray-600 text-center mt-2 text-sm">
                            {product.description}
                        </p>
                        <p className="text-lg font-bold text-blue-600 mt-4">
                            ${product.price}
                        </p>
                    </div>
                ))}
            </div> */}
        </div>




    );
};

export default ProductCatalog;
