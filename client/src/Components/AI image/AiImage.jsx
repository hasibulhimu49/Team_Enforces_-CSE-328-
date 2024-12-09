import React, { useState } from "react";

const AiImage = () => {
  const [image, setImage] = useState(null);
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [demoGuideline, setDemoGuideline] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const defaultGuidelines = [
    "Ensure the leaf is clear and well-lit in the image.",
    "Avoid uploading blurry or shadowy images.",
    "Use a plain background for better detection accuracy.",
  ];

  const staticDiseaseData = [
    {
      name: "Powdery Mildew",
      steps: [
        "Remove infected leaves immediately.",
        "Avoid overhead watering to reduce spread.",
        "Apply sulfur-based fungicide as per guidelines.",
      ],
    },
    {
      name: "Leaf Spot",
      steps: [
        "Prune away infected areas.",
        "Maintain proper air circulation around plants.",
        "Use neem oil or fungicide sprays.",
      ],
    },
    {
      name: "Rust Disease",
      steps: [
        "Remove and destroy affected leaves.",
        "Water plants at the base to avoid wetting leaves.",
        "Use a rust-specific fungicide.",
      ],
    },
  ];

  const handleFileChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        // Display demo guidelines after uploading
        setDemoGuideline(defaultGuidelines);
        // Clear previous disease information
        setDiseaseInfo(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const detectDisease = () => {
    if (!image) {
      alert("Please upload an image before detecting the disease.");
      return;
    }

    // Simulate random detection from static disease data
    const randomDisease =
      staticDiseaseData[Math.floor(Math.random() * staticDiseaseData.length)];
    setDiseaseInfo(randomDisease);

    // Clear demo guidelines once disease is detected
    setDemoGuideline(null);
  };

  return (
    <div className="min-h-screen relative z-40 flex flex-col items-center py-8 px-4 ">
      <h1 className="text-4xl font-extrabold text-green-800 mb-6">
        Leaf Disease Detection
      </h1>
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl p-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Drag-and-Drop + File Upload */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center w-full h-64 border-4 ${
              isDragging ? "border-green-500 bg-green-100" : "border-dashed border-green-400"
            } rounded-lg shadow-inner transition-all duration-300`}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded Leaf"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center text-center">
                <span className="text-gray-500">
                  Drag and drop an image here, or{" "}
                  <label
                    htmlFor="file-input"
                    className="text-green-600 font-semibold underline cursor-pointer"
                  >
                    browse
                  </label>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  className="hidden"
                  id="file-input"
                />
              </div>
            )}
          </div>

          {/* Demo Guidelines */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
               Guidelines
            </h2>
            {demoGuideline ? (
              <ul className="space-y-2">
                {demoGuideline.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 bg-green-50 p-3 rounded-lg shadow-md"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">
                Upload an image to see the demo guidelines.
              </p>
            )}
          </div>
        </div>

        {/* Detect Disease Button */}
        <div className="text-center mb-10">
          <button
            onClick={detectDisease}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            Detect Disease
          </button>
        </div>

        {/* Disease Info */}
        {diseaseInfo && (
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Disease Detected: <span>{diseaseInfo.name}</span>
            </h2>
            <ul className="space-y-2">
              {diseaseInfo.steps.map((step, index) => (
                <li
                  key={index}
                  className="text-gray-700 bg-green-50 p-3 rounded-lg shadow-md"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiImage;
