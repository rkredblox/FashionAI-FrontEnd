import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ProductCatalog from "./ProductCatalog";

const DimensionForm = ({ onSubmit }) => {
    const [dimensions, setDimensions] = useState({
        height: "",
        bust: "",
        waist: "",
        chest: "",
        photo: null,
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [cameraActive, setCameraActive] = useState(false);
    const [getResponse, setGetResponse] = useState([]);
    const [getResponseError, setGetResponseError] = useState("");
    const [shownResponse, setShownResponse] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        return () => {

            stopCamera();
            if (dimensions.userPhoto) {
                URL.revokeObjectURL(URL.createObjectURL(dimensions.userPhoto));
            }
        };
    }, []);

    // console.log("Updated dimensions:", dimensions);
    // if (dimensions.userPhoto) {
    //     console.log("Old photo URL revoked:", URL.createObjectURL(dimensions.userPhoto));
    // }


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            setDimensions({ ...dimensions, [name]: files[0] });
        } else {
            setDimensions({ ...dimensions, [name]: value });
        }
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

            const getResult = await response.data;
            console.log(getResult, "mmmmm");
            // setShownResponse(true)
            // setGetResponse(getResult)
            setShownResponse(true);
            setGetResponse(getResult);
            setGetResponseError("");
        } catch (error) {
            console.log("error", error.response.data.detail);
            // 
            setShownResponse(true);
            setGetResponseError(error.response?.data?.detail || "An error occurred");
            setGetResponse([]);
        } finally {
            setIsLoading(false); // Set loading state to false when done
        }
    };

    console.log(getResponse, "getResponse");
    console.log(getResponseError, "getResponseError", typeof getResponseError);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            // onSubmit(dimensions);
            submittedProduct()
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white shadow-xl rounded-xl p-4 sm:p-6 space-y-4"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 tracking-wide">
                        Enter Your Body Dimensions
                    </h3>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            </div>
                        ))}
                    </div>

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
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700"
                    >
                        Submit
                    </button>
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

                <canvas ref={canvasRef} className="hidden"></canvas>
            </div>
            {shownResponse && getResponseError === "" && <ProductCatalog />}
        </div>
    );
};

export default DimensionForm;





// import React, { useState, useRef } from "react";

// const DimensionForm = ({ onSubmit }) => {
//     const [dimensions, setDimensions] = useState({
//         height: "",
//         bust: "",
//         waist: "",
//         hips: "",
//         photo: null,
//     });

//     const [errorMessage, setErrorMessage] = useState("");
//     //Camera access
//     const [cameraActive, setCameraActive] = useState(false);
//     const videoRef = useRef(null);
//     const canvasRef = useRef(null);


//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (files && files[0]) {
//             setDimensions({ ...dimensions, [name]: files[0] });
//         } else {
//             setDimensions({ ...dimensions, [name]: value });
//         }
//     };

//     //Camera access
//     const startCamera = async () => {
//         setCameraActive(true);
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             if (videoRef.current) {
//                 videoRef.current.srcObject = stream;
//                 videoRef.current.play();
//             }
//         } catch (err) {
//             console.error("Camera access denied:", err);
//         }
//     };

//     const stopCamera = () => {
//         setCameraActive(false);
//         const stream = videoRef.current?.srcObject;
//         if (stream) {
//             const tracks = stream.getTracks();
//             tracks.forEach((track) => track.stop());
//         }
//     };

//     const capturePhoto = () => {
//         const canvas = canvasRef.current;
//         const video = videoRef.current;

//         if (canvas && video) {
//             const context = canvas.getContext("2d");
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             context.drawImage(video, 0, 0, canvas.width, canvas.height);

//             canvas.toBlob((blob) => {
//                 const file = new File([blob], "captured-photo.jpg", { type: "image/jpeg" });
//                 setDimensions({ ...dimensions, userPhoto: file });
//                 stopCamera();
//             }, "image/jpeg");
//         }
//     };

//     const formValidation = () => {
//         let errors = {};

//         if (!dimensions.height.trim()) {
//             errors.height = "Enter a valid height";
//         }
//         if (!dimensions.bust.trim()) {
//             errors.bust = "Enter a valid bust";
//         }
//         if (!dimensions.waist.trim()) {
//             errors.waist = "Enter a valid waist";
//         }
//         if (!dimensions.hips.trim()) {
//             errors.hips = "Enter a valid hips";
//         }
//         if (!dimensions.userPhoto) {
//             errors.userPhoto = "Upload a user photo";
//         }
//         if (!dimensions.clothPhoto) {
//             errors.clothPhoto = "Upload a cloth photo";
//         }

//         setErrorMessage(errors);

//         // Return true if no errors
//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(dimensions, "dimensions...");
//         if (formValidation()) {
//             onSubmit(dimensions);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen p-6">
//             <form
//                 onSubmit={handleSubmit}
//                 className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6"
//             >
//                 <h3 style={{ fontFamily: "'Merriweather', serif" }} className="text-2xl font-bold text-gray-800 text-center mb-6 tracking-wide">
//                     Enter Your Body Dimensions
//                 </h3>
//                 <div className="space-y-4">
//                     <div className="flex justify-between items-start gap-4">
//                         {/* User Photo Upload */}
//                         {/* <div className="w-1/2">
//                             <label
//                                 htmlFor="userPhoto"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Upload User Photo:
//                             </label>
//                             <div
//                                 className={`border-2 border-dashed border-gray-300 rounded-lg w-full h-40 flex flex-col items-center justify-center`}
//                             >
//                                 {dimensions.userPhoto ? (
//                                     <img
//                                         src={URL.createObjectURL(dimensions.userPhoto)}
//                                         alt="User Photo Preview"
//                                         className="h-24 w-24 object-cover rounded-lg mb-2"
//                                     />
//                                 ) : (
//                                     <p className="text-gray-400 text-sm mb-2">No image uploaded</p>
//                                 )}
//                                 <label
//                                     htmlFor="userPhoto-input"
//                                     className="inline-block px-4 py-2 border-2  border-gray-300 text-gray-600 font-semibold rounded-lg shadow-md hover:border-gray-400 focus:ring-2 focus:ring-gray-300 cursor-pointer transition-all text-sm"
//                                 >
//                                     Choose File
//                                 </label>

//                                 <input
//                                     id="userPhoto-input"
//                                     type="file"
//                                     name="userPhoto"
//                                     accept="image/*"
//                                     onChange={handleChange}
//                                     className="hidden"
//                                 />
//                             </div>
//                         </div> */}

//                         <div className="space-y-4">
//                             {/* User Photo Upload */}
//                             <div className="flex flex-col items-start mb-4">
//                                 <label
//                                     htmlFor="userPhoto"
//                                     className="block text-sm font-medium text-gray-700 mb-2"
//                                 >
//                                     Upload User Photo:
//                                 </label>
//                                 <div
//                                 className={`border-2 border-dashed border-gray-300 rounded-lg w-full h-40 flex flex-col items-center justify-center`}
//                             >
//                                 {dimensions.userPhoto ? (
//                                     <img
//                                         src={URL.createObjectURL(dimensions.userPhoto)}
//                                         alt="User Photo Preview"
//                                         className="h-24 w-24 object-cover rounded-lg mb-2"
//                                     />
//                                 ) : (
//                                     <p className="text-gray-400 text-sm mb-2">No image uploaded</p>
//                                 )}
//                                 </div>
//                                 {/* <label
//                                     htmlFor="userPhoto-input"
//                                     className="inline-block px-4 py-2 border-2 border-gray-300 text-gray-600 font-semibold rounded-lg shadow-md hover:border-gray-400 focus:ring-2 focus:ring-gray-300 cursor-pointer transition-all text-sm"
//                                 >
//                                     Choose File
//                                 </label> */}
//                                 <input
//                                     id="userPhoto-input"
//                                     type="file"
//                                     name="userPhoto"
//                                     accept="image/*"
//                                     onChange={handleChange}
//                                     className="hidden"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={startCamera}
//                                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
//                                 >
//                                     Open Camera
//                                 </button>
//                             </div>
//                             {/* Camera View */}
//                             {cameraActive && (
//                                 <div className="flex flex-col items-center">
//                                     <video ref={videoRef} className="w-full h-auto rounded-lg mb-4"></video>
//                                     <button
//                                         type="button"
//                                         onClick={capturePhoto}
//                                         className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
//                                     >
//                                         Capture Photo
//                                     </button>
//                                     <button
//                                         type="button"
//                                         onClick={stopCamera}
//                                         className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300"
//                                     >
//                                         Close Camera
//                                     </button>
//                                 </div>
//                             )}
//                         </div>



//                         {/* Cloth Photo Upload */}
//                         <div className="w-1/2">
//                             <label
//                                 htmlFor="clothPhoto"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Upload Cloth Photo:
//                             </label>
//                             <div
//                                 className={`border-2 border-dashed border-gray-300 rounded-lg w-full h-40 flex flex-col items-center justify-center`}
//                             >
//                                 {dimensions.clothPhoto ? (
//                                     <img
//                                         src={URL.createObjectURL(dimensions.clothPhoto)}
//                                         alt="Cloth Photo Preview"
//                                         className="h-24 w-24 object-cover rounded-lg mb-2"
//                                     />
//                                 ) : (
//                                     <p className="text-gray-400 text-sm mb-2">No image uploaded</p>
//                                 )}
//                                 <label
//                                     htmlFor="clothPhoto-input"
//                                     className="inline-block px-4 py-2 border-2  border-gray-300 text-gray-600 font-semibold rounded-lg shadow-md hover:border-gray-400 focus:ring-2 focus:ring-gray-300 cursor-pointer transition-all text-sm"
//                                 >
//                                     Choose File
//                                 </label>
//                                 <input
//                                     id="clothPhoto-input"
//                                     type="file"
//                                     name="clothPhoto"
//                                     accept="image/*"
//                                     onChange={handleChange}
//                                     className="hidden"
//                                 />
//                             </div>
//                         </div>

//                     </div>
//                     <div>
//                         <label
//                             htmlFor="height"
//                             className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                             Height (cm):
//                         </label>
//                         <input
//                             type="number"
//                             name="height"
//                             id="height"
//                             value={dimensions.height}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     {errorMessage.height && <p className="text-red-500 text-sm">* {errorMessage.height}</p>}
//                     <div>
//                         <label
//                             htmlFor="bust"
//                             className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                             Bust (cm):
//                         </label>
//                         <input
//                             type="number"
//                             name="bust"
//                             id="bust"
//                             value={dimensions.bust}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     {errorMessage.bust && <p className="text-red-500 text-sm">* {errorMessage.bust}</p>}
//                     <div>
//                         <label
//                             htmlFor="waist"
//                             className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                             Waist (cm):
//                         </label>
//                         <input
//                             type="number"
//                             name="waist"
//                             id="waist"
//                             value={dimensions.waist}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     {errorMessage.waist && <p className="text-red-500 text-sm">* {errorMessage.waist}</p>}
//                     <div>
//                         <label
//                             htmlFor="hips"
//                             className="block text-sm font-medium text-gray-700 mb-1"
//                         >
//                             Hips (cm):
//                         </label>
//                         <input
//                             type="number"
//                             name="hips"
//                             id="hips"
//                             value={dimensions.hips}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     {errorMessage.hips && <p className="text-red-500 text-sm">* {errorMessage.hips}</p>}
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
//                 >
//                     Submit
//                 </button>
//             </form>
//             <canvas ref={canvasRef} className="hidden"></canvas>
//         </div>
//     );
// };

// export default DimensionForm;











