import React, { useState } from "react";

const PhotoUpload = ({ onPhotoUpload }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      onPhotoUpload(file);
    }
  };

  return (
    // <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
    // <div className="flex flex-col items-center bg-gray-100 h-auto p-4">
    //   <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
    //     <h3 className="text-2xl font-semibold text-gray-700 text-center">
    //       Upload Your Face Photo
    //     </h3>
    //     <input
    //       type="file"
    //       accept="image/*"
    //       onChange={handlePhotoChange}
    //       className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    //     />
    //     {photo && (
    //       <div className="mt-4">
    //         <img
    //           src={URL.createObjectURL(photo)}
    //           alt="Preview"
    //           className="w-48 h-48 object-cover rounded-md shadow-md mx-auto"
    //         />
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="flex flex-col items-center bg-gradient-to-br  p-6">
  <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-6">
    <h3 className="text-3xl font-bold text-gray-800 text-center">
      Upload Your Face Photo
    </h3>
    <input
      type="file"
      accept="image/*"
      onChange={handlePhotoChange}
      className="block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-5 file:border-0 file:rounded-lg file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-500 file:to-blue-600 file:text-white hover:file:from-blue-600 hover:file:to-blue-700 cursor-pointer"
    />
    {photo && (
      <div className="mt-6 flex flex-col items-center">
        <p className="text-sm text-gray-600 mb-2">Preview:</p>
        <img
          src={URL.createObjectURL(photo)}
          alt="Preview"
          className="w-48 h-48 object-cover rounded-full shadow-md"
        />
      </div>
    )}
  </div>
</div>


  );
};

export default PhotoUpload;
