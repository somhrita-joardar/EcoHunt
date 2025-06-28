// src/pages/SubmitFlag.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const SubmitFlag = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Sidebar>
      <div className="w-full max-w-3xl bg-white rounded-xl p-8 shadow mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Mission: Reduce Plastic Waste</h2>
        <p className="text-gray-600 mb-6">
          Take a photo of your efforts to reduce plastic waste, such as using reusable bags, water bottles, or containers. Share your actions with the community!
        </p>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
          <p className="font-semibold mb-2">Upload Proof</p>
          <p className="text-sm text-gray-600 mb-4">Drag and drop or click to upload your photo</p>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-6 py-2 bg-gray-100 rounded-full inline-block hover:bg-gray-200"
          >
            Choose File
          </label>
          <p className="text-sm mt-2 text-gray-500">{fileName}</p>
        </div>

        {/* Optional Comment */}
        <textarea
          rows="4"
          placeholder="Add a comment (optional)"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
        ></textarea>

        {/* Submit Button */}
        <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition">
          Submit Flag
        </button>
      </div>
    </Sidebar>
  );
};

export default SubmitFlag;
