import React, { useEffect, useState } from "react";
// import axios from "axios";
// import productsLists from "./question.json";
import './style.css';
import imagePath from "../../components/imagePath";
// import imagePath from "../../components/imagePath";

// console.log(productsLists.ProductsForWomen.map((item)=>) , "productsLists....");

// const res = productsLists.ProductsForWomen.map((item)=>{
//     console.log(item, "itemmmmmmmm");
// })

const ProductCatalog = () => {
    const [products, setProducts] = useState(["Sample data"]);
console.log(imagePath.imageOne , "imageEight...");
    const productsLists = [
        {
            id: 1,
            name: "Red Dress",
            description: "A stylish red dress for any occasion.",
            price: 49.99,
            image: imagePath.imageOne, 
        },
        {
            id: 2,
            name: "Blue Jacket",
            description: "A cool blue jacket to keep you warm.",
            price: 79.99,
            image: imagePath.imageTwo, 
        },
        {
            id: 3,
            name: "Louis Philippe",
            description: "Long coat-like tunic, usually made of luxurious fabrics.",
            price: 86.69,
            image: imagePath.imageThree,
          },
          {
            id: 4,
            name: "ColorFul synthetic",
            description: "Stylish wall, shot with cotton.",
            price: 70.69,
            image: imagePath.imageFour,
          },
          {
            id: 5,
            name: "Fabric curts and jeans",
            description: "Blue wall, jean with long-fit.",
            price: 40.69,
            image: imagePath.imageFive,
          },
          {
            id: 6,
            name: "Peter England Elite",
            description: "Men Printed Bandhgala Slim-Fit.",
            price: 106.69,
            image: imagePath.imageSix,
          },
          {
            id: 7,
            name: "Peter England Elite",
            description: "Men Printed Bandhgala Slim-Fit.",
            price: 106.69,
            image: imagePath.imageSeven,
          },
          {
            id: 8,
            name: "Peter England Elite",
            description: "Men Printed Bandhgala Slim-Fit.",
            price: 106.69,
            image: imagePath.imageEight,
          },
    ];


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
            <h3 className="product-heading">
                Product Catalog
            </h3>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {productsLists.map((product, index) => (
                    <div
                        key={product.id}
                        className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover"
                        />
                    </div>
                ))}
            </div> */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {productsLists.map((product, index) => (
                    <div
                        key={product.id}
                        className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-300"
                        style={{ animation: 'fadeIn 1s ease-in-out', animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div> */}

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {productsLists.map((product, index) => (
                    <div
                        key={product.id}
                        className="overflow-hidden rounded-lg transform transition duration-300"
                        style={{
                            animation: `screenOpen 0.8s ease-in-out`,
                            animationDelay: `${index * 0.1}s`,
                            animationFillMode: 'forwards',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {productsLists.map((product, index) => (
                    <div
                        key={product.id}
                        className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                        style={{
                            animation: `screenOpen 0.8s ease-in-out`,
                            animationDelay: `${index * 0.1}s`,
                            animationFillMode: 'forwards',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover rounded-lg hover:scale-105"
                        />
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
