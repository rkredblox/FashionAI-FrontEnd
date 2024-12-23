import React, { useState, useRef, useEffect } from 'react';
// import { Bars3Icon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import ProductCatalog from './ProductCatalog';

function SelectProduct() {
    const [dimensions, setDimensions] = useState({ chest: '', waist: '', height: '', bust: '' });
    const [personPhoto, setPersonPhoto] = useState(null);
    const [clothPhoto, setClothPhoto] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);
    const [errors, setErrors] = useState({});
    const videoRef = useRef(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [cameraActive, setCameraActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenLow, setModalOpenLow] = useState(false);
    const [shownResponse, setShownResponse] = useState(false);
    const [getResponse, setGetResponse] = useState([]);
    const [getResponseError, setGetResponseError] = useState("");
    const canvasRef = useRef(null);

    useEffect(() => {
        return () => {

            stopCamera();
            if (dimensions.userPhoto) {
                URL.revokeObjectURL(URL.createObjectURL(dimensions.userPhoto));
            }
        };

    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            setDimensions({ ...dimensions, [name]: files[0] });
        } else {
            setDimensions({ ...dimensions, [name]: value });
        }
    };

    // Validation
    const formValidation = () => {
        let errors = {};

        // if (!dimensions.height.trim()) {
        //     errors.height = "Enter a valid height";
        // }
        // if (!dimensions.bust.trim()) {
        //     errors.bust = "Enter a valid bust";
        // }
        if (!dimensions.waist.trim()) {
            errors.waist = "Enter a valid waist";
        }
        if (!dimensions.chest.trim()) {
            errors.chest = "Enter a valid chest";
        }
        // if (!dimensions.userPhoto) {
        //     errors.userPhoto = "Upload a user photo";
        // }
        // if (!dimensions.clothPhoto) {
        //     errors.clothPhoto = "Upload a cloth photo";
        // }

        setErrorMessage(errors);

        return Object.keys(errors).length === 0;
    };

    const submittedProduct = async () => {
        const payload = { chest: dimensions.chest, waist: dimensions.waist };
        setIsLoading(true);
        console.log("111");

        try {
            const response = await axios.post(
                "https://fashionai-grvw.onrender.com/api/demo/size_calculation/",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("222");
            const getResult = await response.data;
            console.log(getResult, "mmmmm");
            // setShownResponse(true)
            // setGetResponse(getResult)
            setShownResponse(true);
            setGetResponse(getResult);
            setGetResponseError("");
            // Scroll to the ProductCatalog component
            // if (productCatalogRef.current) {
            //     productCatalogRef.current.scrollIntoView({ behavior: "smooth" });
            // }
        } catch (error) {
            console.log("error", error.response?.data?.detail);

            setShownResponse(true);
            setGetResponseError(error.response?.data?.detail || "An error occurred");
            setGetResponse([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            // onSubmit(dimensions);
            submittedProduct()
        }
    };

    const lower_size_chart = {
        measurements: [
            { size: "XS", chest: [74, 84], waist: [64, 69] },
            { size: "S", chest: [85, 95], waist: [70, 80] },
            { size: "M", chest: [96, 105], waist: [81, 90] },
            { size: "L", chest: [106, 115], waist: [91, 100] },
            { size: "XL", chest: [116, 125], waist: [101, 108] },
            { size: "2XL", chest: [126, 136], waist: [109, 118] },
            { size: "3XL", chest: [137, 146], waist: [119, 130] },
            { size: "4XL", chest: [147, 156], waist: [131, 142] },
            { size: "5XL", chest: [157, 166], waist: [143, 156] },
        ],
    };
    // Submit Form
    // const handleSubmit = async () => {
    //     if (!validateForm()) return;
    //     const formData = new FormData();
    //     formData.append('chest', dimensions.chest);
    //     formData.append('waist', dimensions.waist);
    //     formData.append('height', dimensions.height);
    //     formData.append('bust', dimensions.bust);
    //     formData.append('personPhoto', personPhoto);
    //     formData.append('clothPhoto', clothPhoto);

    //     try {
    //         const response = await fetch('/api/try-on', {
    //             method: 'POST',
    //             body: formData,
    //         });
    //         const data = await response.json();
    //         setApiResponse(data);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    const size_chart = {
        men: [
            { size: "XS", waist: [28, 29, 30], hip: [34, 35, 36], inseam: [28, 29, 30] },
            { size: "S", waist: [30, 31, 32], hip: [36, 37, 38], inseam: [30, 31, 32] },
            { size: "M", waist: [32, 33, 34], hip: [38, 39, 40], inseam: [32, 33, 34] },
            { size: "L", waist: [34, 35, 36], hip: [40, 41, 42], inseam: [32, 33, 34] },
            { size: "XL", waist: [36, 37, 38], hip: [42, 43, 44], inseam: [34, 35, 36] },
            { size: "2XL", waist: [38, 39, 40], hip: [44, 45, 46], inseam: [34, 35, 36] },
            { size: "3XL", waist: [40, 41, 42], hip: [46, 47, 48], inseam: [36, 37, 38] },
        ],
        women: [
            { size: "XS", waist: [24, 25, 26], hip: [34, 35, 36], inseam: [28, 29, 30] },
            { size: "S", waist: [26, 27, 28], hip: [36, 37, 38], inseam: [28, 29, 30] },
            { size: "M", waist: [28, 29, 30], hip: [38, 39, 40], inseam: [30, 31, 32] },
            { size: "L", waist: [30, 31, 32], hip: [40, 41, 42], inseam: [30, 31, 32] },
            { size: "XL", waist: [32, 33, 34], hip: [42, 43, 44], inseam: [32, 33, 34] },
            { size: "2XL", waist: [34, 35, 36], hip: [44, 45, 46], inseam: [32, 33, 34] },
            { size: "3XL", waist: [36, 37, 38], hip: [46, 47, 48], inseam: [34, 35, 36] },
        ],
    };


    const startCamera = async () => {
        setCameraActive(true);
        setDimensions((prevDimensions) => ({
            ...prevDimensions,
            userPhoto: null,
        }));

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
        } catch (err) {
            console.error("Camera access denied:", err);
        }
    };

    const stopCamera = () => {
        setCameraActive(false);
        const stream = videoRef.current?.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
        }
    };

    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (canvas && video) {
            const context = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob((blob) => {
                const newPhoto = new File([blob], "captured-photo.jpg", { type: "image/jpeg" });


                if (dimensions.userPhoto) {
                    URL.revokeObjectURL(URL.createObjectURL(dimensions.userPhoto));
                }


                setDimensions((prevDimensions) => ({
                    ...prevDimensions,
                    userPhoto: newPhoto,
                }));

                stopCamera();
            }, "image/jpeg");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="py-8 px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* First Column: Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white shadow-xl rounded-xl p-4 sm:p-6 space-y-4"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 tracking-wide">
                            Enter Your Body Dimensions
                        </h3>


                        <div className="flex justify-end">
                            <h3
                                className="text-blue-600 cursor-pointer hover:underline"
                                onClick={() => setModalOpen(true)}
                            >
                                Upper size chart
                            </h3>
                        </div>
                        <div className="flex justify-end">
                            <h3
                                className="text-blue-600 cursor-pointer hover:underline"
                                onClick={() => setModalOpenLow(true)}
                            >
                                Lower size chart
                            </h3>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                            {["chest", "waist", "height", "bust"].map((field) => (
                                <div key={field}>
                                    <label
                                        htmlFor={field}
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        {`${field.charAt(0).toUpperCase() + field.slice(1)} (cm):`}
                                    </label>
                                    <input
                                        type="number"
                                        name={field}
                                        id={field}
                                        value={dimensions[field]}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errorMessage[field] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            * {errorMessage[field]}
                                        </p>
                                    )}
                                    {/* Add Save Button for "chest" and "waist" fields */}
                                    {["waist"].includes(field) && (
                                        <div className="flex justify-end mt-2">
                                            <button
                                                type="button"
                                                // onClick={() => handleSave(field)}
                                                onClick={handleSubmit}
                                                className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", }}>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                        {isLoading && (
                            <div className="flex justify-center items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce200"></div>
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce400"></div>
                            </div>
                        )}
                        {shownResponse && getResponseError === "" && (
                            <h2 className="text-green-500  mt-4">{getResponse.size} is available</h2>
                        )}
                        {shownResponse && getResponseError !== "" && (
                            <h2 className="text-red-500  mt-4">{getResponseError}</h2>
                        )}
                    </form>

                    {/* {shownResponse && getResponseError === "" && <ProductCatalog />} */}

                    {modalOpenLow && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold">Size Chart</h3>
                                    <button
                                        onClick={() => setModalOpenLow(false)}
                                        className="text-black-800 text-2xl hover:text-gray-700"
                                    >
                                        &times;
                                    </button>
                                </div>


                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">Size</th>
                                                <th className="border p-2">Chest (cm)</th>
                                                <th className="border p-2">Waist (cm)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lower_size_chart.measurements.map((row) => (
                                                <tr key={row.size}>
                                                    <td className="border p-2 text-center">{row.size}</td>
                                                    <td className="border p-2 text-center">
                                                        {`${row.chest[0]} - ${row.chest[1]}`}
                                                    </td>
                                                    <td className="border p-2 text-center">
                                                        {`${row.waist[0]} - ${row.waist[1]}`}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    {modalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                                {/* Modal Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg md:text-xl font-semibold">Size Chart</h3>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="text-black text-2xl hover:text-gray-700"
                                    >
                                        &times;
                                    </button>
                                </div>

                                {/* Men Size Chart */}
                                <div className="mb-6">
                                    <h4 className="text-md md:text-lg font-semibold mb-2">Men</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Size</th>
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Waist (in)</th>
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Hip (in)</th>
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Inseam (in)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {size_chart.men.map((row) => (
                                                    <tr key={row.size}>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.size}
                                                        </td>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.waist.join(" - ")}
                                                        </td>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.hip.join(" - ")}
                                                        </td>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.inseam.join(" - ")}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Women Size Chart */}
                                <div>
                                    <h4 className="text-md md:text-lg font-semibold mb-2">Women</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Size</th>
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Waist (in)</th>
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Hip (in)</th>
                                                    <th className="border p-1 md:p-2 text-sm md:text-base">Inseam (in)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {size_chart.women.map((row) => (
                                                    <tr key={row.size}>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.size}
                                                        </td>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.waist.join(" - ")}
                                                        </td>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.hip.join(" - ")}
                                                        </td>
                                                        <td className="border p-1 md:p-2 text-center text-sm md:text-base">
                                                            {row.inseam.join(" - ")}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Second Column: Upload Fields */}
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 tracking-wide">Upload or Capture Photos</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label
                                    htmlFor="userPhoto"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Upload User Photo:
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg w-full h-40 flex flex-col items-center justify-center relative">
                                    {dimensions.userPhoto ? (
                                        <img
                                            src={URL.createObjectURL(dimensions.userPhoto)}
                                            alt="User Photo Preview"
                                            className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-lg mb-2"
                                        />
                                    ) : (
                                        <p className="text-gray-400 text-sm mb-2">No image uploaded</p>
                                    )}

                                    {cameraActive && (
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                            {dimensions.userPhoto ? (
                                                <img
                                                    src={URL.createObjectURL(dimensions.userPhoto)}
                                                    alt="Captured Photo"
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            ) : (
                                                <video
                                                    ref={videoRef}
                                                    className="w-full h-full object-cover rounded-lg"
                                                    autoPlay
                                                    playsInline
                                                ></video>
                                            )}
                                            <div className="absolute bottom-4 flex space-x-4 w-full justify-center">
                                                <button
                                                    type="button"
                                                    onClick={capturePhoto}
                                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
                                                >
                                                    Capture Photo
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={stopCamera}
                                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={startCamera}
                                    className="mt-4 inline-block w-full px-4 py-2 border-2 border-gray-300 text-gray-600 text-center font-semibold rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white"
                                >
                                    Open Camera
                                </button>
                            </div>

                        </div>
                        <br />
                        <div className="flex-1">
                            <label
                                htmlFor="clothPhoto"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Upload Cloth Photo:
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg w-full h-40 flex flex-col items-center justify-center">
                                {dimensions.clothPhoto ? (
                                    <img
                                        src={URL.createObjectURL(dimensions.clothPhoto)}
                                        alt="Cloth Photo Preview"
                                        className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-lg mb-2"
                                    />
                                ) : (
                                    <p className="text-gray-400 text-sm mb-2">No image uploaded</p>
                                )}
                            </div>
                            <label
                                htmlFor="clothPhoto-input"
                                className="mt-4 inline-block w-full px-4 py-2 border-2 border-gray-300 text-gray-600 text-center font-semibold rounded-lg cursor-pointer"
                            >
                                Choose File
                            </label>
                            <input
                                id="clothPhoto-input"
                                type="file"
                                name="clothPhoto"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </div>
                        <canvas ref={canvasRef} className="hidden"></canvas>
                        {isCameraOpen && (
                            <div className="mt-4">
                                <video ref={videoRef} className="w-full rounded-lg" />
                                <button
                                    onClick={capturePhoto}
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                                >
                                    Capture Photo
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Third Column: Response Images */}
                    {/* <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Preview</h3>
                        {apiResponse ? (
                            <div>
                                <h4 className="text-md font-semibold mb-2">Response:</h4>
                                <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(apiResponse, null, 2)}</pre>
                            </div>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                Submit
                            </button>
                        )}
                    </div> */}
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 tracking-wide">Preview</h3>
                        {apiResponse ? (
                            <div>
                                <h4 className="text-md font-semibold mb-2">Response:</h4>
                                <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(apiResponse, null, 2)}</pre>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                {/* Large Image */}
                                <img
                                    src="https://via.placeholder.com/600x400" // Replace with your image URL
                                    alt="Preview"
                                    className="w-full h-96 object-cover rounded-md mb-4"
                                />
                                {/* Bottom "Run" Button */}

                            </div>
                        )}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-md text-md hover:bg-blue-600 hover:text-white transition hover:border-transparent w-full"
                            >
                                Run
                            </button>

                        </div>
                    </div>

                </div>
                {/* Conditional Product Catalog Display */}
                {/* {shownResponse && getResponseError === "" && (
                    <div className="col-span-3">
                        <ProductCatalog getResponse={getResponse}/>
                    </div>
                )} */}
                <ProductCatalog getResponse={getResponse} />
            </div>
        </div>
    );
}

export default SelectProduct;




