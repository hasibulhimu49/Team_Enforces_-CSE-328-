import React, { useState } from "react";

const ImageUpload = ({ register, setValue, errors }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle file input change and update image previews
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5 - imagePreviews.length); // Limit to 5 images total
    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);

    // Update React Hook Form with the selected files
    setValue("images", [...(register("images").value || []), ...files]);
  };

  return (
    <div className="p-6 rounded-lg max-w-lg mx-auto">
      <div className="flex mt-6">
        {/* Main Image Preview */}
        <div className="w-1/2 h-48 border rounded-lg flex items-center justify-center bg-white overflow-hidden mr-4">
          {imagePreviews.length > 0 ? (
            <img
              src={imagePreviews[0]}
              alt="Main Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-500">Image Preview</span>
          )}
        </div>

        {/* Thumbnails and "+" icon */}
        <div className="grid grid-cols-2 gap-2 w-1/2">
          {imagePreviews.slice(1).map((preview, index) => (
            <div
              key={index}
              className="w-full h-24 border rounded-lg overflow-hidden bg-white"
            >
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          {imagePreviews.length < 5 && (
            <div className="w-full h-24 border rounded-lg flex items-center justify-center text-gray-400 cursor-pointer bg-white hover:bg-gray-100 transition">
              <label
                htmlFor="image-upload"
                className="w-full h-full flex items-center justify-center text-2xl font-bold"
              >
                +
                <input
                  {...register("images", { required: "At least one image is required" })}
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {errors.images && (
        <span className="text-red-500 text-sm">{errors.images.message}</span>
      )}
    </div>
  );
};

export default ImageUpload;
