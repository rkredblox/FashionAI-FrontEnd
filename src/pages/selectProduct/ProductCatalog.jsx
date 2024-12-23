import React from "react";
import imagePath from "../../components/imagePath";
import "./style.css"

const ProductCatalog = ({ getResponse }) => {
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
            image: "http://assets.myntassets.com/v1/images/style/properties/ce424f00da35e5aaf200393b1bf7d9dd_images.jpg",
        },
        {
            id: 7,
            name: "Peter England Elite",
            description: "Men Printed Bandhgala Slim-Fit.",
            price: 106.69,
            image: "http://assets.myntassets.com/v1/images/style/properties/5fd41c8046d45cbdc8b3b9690a6fd6be_images.jpg",
        },
        {
            id: 8,
            name: "Peter England Elite",
            description: "Men Printed Bandhgala Slim-Fit.",
            price: 106.69,
            image: "http://assets.myntassets.com/v1/images/style/properties/bfa6bc3cf0134934aefc6abfa07486dc_images.jpg",
        },
        {
            id: 9,
            name: "nine",
            image: "http://assets.myntassets.com/v1/images/style/properties/Nike-Sahara-Team-India-Fanwear-Round-Neck-Jersey_2d27392cc7d7730e8fee0755fd41d30c_images.jpg",
        },
        {
            id: 10,
            name: "Ten",
            image: "http://assets.myntassets.com/assets/images/1165/2018/2/28/11519814282010-Nike-Mean-Team-India-Cricket-Jersey-6241519814281812-1.jpg",
        },
        {
            id: 11,
            name: "Eleven",
            image: "http://assets.myntassets.com/v1/images/style/properties/1338763a483e61bccc60b62c7a9026c6_images.jpg",
        },
        {
            id: 12,
            name: "Twealth",
            image: "http://assets.myntassets.com/v1/images/style/properties/aa0b42f2cdd16107a56b7190b4a1f542_images.jpg",
        },
        {
            id: 13,
            name: "Thirteen",
            image: "http://assets.myntassets.com/v1/images/style/properties/470f495a596697306cc22fe87b8c5916_images.jpg",
        },
        {
            id: 14,
            name: "Fourteen",
            image: "http://assets.myntassets.com/v1/images/style/properties/6646ae2e4751cf5b135c233ad900f333_images.jpg",
        },
        {
            id: 15,
            name: "Fifteen",
            image: "http://assets.myntassets.com/v1/images/style/properties/5fd41c8046d45cbdc8b3b9690a6fd6be_images.jpg",
        },
        {
            id: 16,
            name: "Sixteen",
            image: "http://assets.myntassets.com/v1/images/style/properties/ce424f00da35e5aaf200393b1bf7d9dd_images.jpg",
        },
        {
            id: 17,
            name: "Seventeen",
            image: "http://assets.myntassets.com/v1/images/style/properties/c1fb30361762f0d1e5d553422eb718e8_images.jpg",
        },
        {
            id: 18,
            name: "Eighteen",
            image: "http://assets.myntassets.com/v1/images/style/properties/ce424f00da35e5aaf200393b1bf7d9dd_images.jpg",
        },
        {
            id: 19,
            name: "Nighteen",
            image: "http://assets.myntassets.com/v1/images/style/properties/20a4bd409d2f3d7d03f73d271870ec43_images.jpg",
        },
        {
            id: 20,
            name: "Twenty",
            image: "http://assets.myntassets.com/v1/images/style/properties/2c88e0246d886c8e25ee48051415d29a_images.jpg",
        },
        {
            id: 21,
            name: "Twentyone",
            image: "http://assets.myntassets.com/v1/images/style/properties/1f978791c85838728fdd3140592da89a_images.jpg",
        },
        {
            id: 22,
            name: "Twentytwo",
            image: "http://assets.myntassets.com/v1/images/style/properties/de56aa695dee85e52940259ae95026cc_images.jpg",
        },
        {
            id: 23,
            name: "Twentythree",
            image: "http://assets.myntassets.com/v1/images/style/properties/f64b458800bc9aff9805bb53ea1d01e3_images.jpg",
        },
        {
            id: 24,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/9fde418adaf266ebb1b66bfe9640bd61_images.jpg",
        },
        {
            id: 25,
            name: "twofive",
            image: "http://assets.myntassets.com/v1/images/style/properties/09a1078b51c583bdb9bd4f54c6a10e75_images.jpg",
        },
        {
            id: 26,
            name: "twosix",
            image: "http://assets.myntassets.com/v1/images/style/properties/e5bbf781372cc7f852f7346c89eb2924_images.jpg",
        },
        {
            id: 27,
            name: "twoseven",
            image: "http://assets.myntassets.com/v1/images/style/properties/e4aec9cca8e2b2f1f4e1957c22d28f1e_images.jpg",
        },
        {
            id: 28,
            name: "twoeight",
            image: "http://assets.myntassets.com/v1/images/style/properties/9fde418adaf266ebb1b66bfe9640bd61_images.jpg",
        },
        {
            id: 29,
            name: "twonine",
            image: "http://assets.myntassets.com/v1/images/style/properties/51ab8d8d88276ff2d28ec56d35924083_images.jpg",
        },
        {
            id: 30,
            name: "threezero",
            image: "http://assets.myntassets.com/v1/images/style/properties/4ed9caa5bcfa7c21903551be139494c8_images.jpg",
        },
        {
            id: 31,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/a49d13348e9ba3088fb82e43ea059391_images.jpg",
        },
        {
            id: 32,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/9489239f68c0eff77a204ba9f6bc18fd_images.jpg",
        },
        {
            id: 33,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/7042626a26ad0a3a00a087a4f249b81a_images.jpg",
        },
        {
            id: 34,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/7ef5127388be765faf04dad2d78903c8_images.jpg",
        },
        {
            id: 35,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/cfcc721cdc48cc2d913e19988972066c_images.jpg",
        },
        {
            id: 36,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/cf402a4495f34da7b778eb6b998232cd_images.jpg",
        },
        {
            id: 37,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/9fde418adaf266ebb1b66bfe9640bd61_images.jpg",
        },
        {
            id: 38,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/f5c0932dbfb3f6b11292de54225c8fc5_images.jpg",
        },
        {
            id: 39,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/1e91b2c8dbfbe44174871ec3cf1cf314_images.jpg",
        },
        {
            id: 40,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/7233b46682d780c87b390552c4ac9c50_images.jpg",
        },
        {
            id: 41,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/564c1317c204066e6e7c440cfb69e7f5_images.jpg",
        },
        {
            id: 42,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/94de00f5c102026ccf319360ae23bd3a_images.jpg",
        },
        {
            id: 43,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/6b6acd9a9543e1f1c9c40af34dc1060d_images.jpg",
        },
        {
            id: 44,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/c17c1c3db552b6572ac65a7da9015e97_images.jpg",
        },
        {
            id: 45,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/3ad30506d9eb990e98e6268f916ab507_images.jpg",
        },
        {
            id: 46,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/72fe4b02d02bbc90015f42b89e657cdc_images.jpg",
        },
        {
            id: 47,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/cf289bb7bc9dfa25dfdfeeb1f34aab73_images.jpg",
        },
        {
            id: 48,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/809975ee7971d8a9faa437db7460eb9c_images.jpg",
        },
        {
            id: 49,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/977b2d350edf51bf7875066e3c54b0b8_images.jpg",
        },
        {
            id: 50,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/e5a36d93c76a5b336d60a125cb812904_images.jpg",
        },
        {
            id: 51,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/eead597be9188766bd6703e5bca0c7b6_images.jpg",
        },
        {
            id: 52,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/60311352abfe03e7e3a351a9a9c1b7c6_images.jpg",
        },
        {
            id: 53,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/daa6b5b46f0c9dbf02c1edf0377b9b4a_images.jpg",
        },
        {
            id: 54,
            name: "Twentyfour",
            image: "http://assets.myntassets.com/v1/images/style/properties/Kipsta-Men-Sports-White-T-shirt_079739496595d1f7110903caccce6619_images.jpg",
        },
    ];

    console.log(getResponse.size , "getResponse...m");
    console.log("getResponse...m");

    let displayedProducts = [];
    if (getResponse.size === "XS") {
        displayedProducts = productsLists.slice(0, 6);
    } else if (getResponse.size === "S") {
        displayedProducts = productsLists.slice(6, 12);
    } else if (getResponse.size === "M") {
        displayedProducts = productsLists.slice(12, 18);
    } else if (getResponse.size === "L") {
        displayedProducts = productsLists.slice(18, 24);
    } else if (getResponse.size === "XL") {
        displayedProducts = productsLists.slice(24, 30);
    } else if (getResponse.size === "2XL") {
        displayedProducts = productsLists.slice(36, 42);
    } else if (getResponse.size === "3XL") {
        displayedProducts = productsLists.slice(48, 54);
    } else if (getResponse.size === "4XL") {
        displayedProducts = productsLists.slice(36, 42);
    } else if (getResponse.size === "5XL") {
        displayedProducts = productsLists.slice(12, 18);
    }

    console.log("getResponse", getResponse.size);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
            <h3 className="product-heading">
                Product Catalog
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {/* First grid */}
                <div
                    className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
                >

                    {getResponse.size == undefined && (
                        productsLists?.slice(10,22)?.map((product, index) => (
                            <div
                                key={product.id}
                                className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                                style={{
                                    animation: `screenOpen 0.8s ease-in-out`,
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: "forwards",
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full max-w-[150px] h-auto max-h-[150px] object-cover rounded-lg mx-auto"
                                />
                            </div>
                        ))
                    )}
                    {displayedProducts?.map((product, index) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                            style={{
                                animation: `screenOpen 0.8s ease-in-out`,
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-[150px] h-auto max-h-[150px] object-cover rounded-lg mx-auto"
                            />
                        </div>
                    ))}
                </div>

                {/* Second grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {/* {displayedProducts?.map((product, index) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                            style={{
                                animation: `screenOpen 0.8s ease-in-out`,
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-[150px] h-auto max-h-[150px] object-cover rounded-lg mx-auto"
                            />
                        </div>
                    ))} */}
                </div>

                {/* Third grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {/* {displayedProducts?.map((product, index) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                            style={{
                                animation: `screenOpen 0.8s ease-in-out`,
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-[150px] h-auto max-h-[150px] object-cover rounded-lg mx-auto"
                            />
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;
