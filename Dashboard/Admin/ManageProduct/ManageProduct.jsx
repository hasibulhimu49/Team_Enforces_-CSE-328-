import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiDraftLine } from "react-icons/ri";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import ImageUpload from "./ImageUpload"; // Assuming ImageUpload component is in the same directory
import managePhoto from "/Assets/dashboard/managePhoto.png";
import { toast } from "sonner";

const ManageProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
      } = useForm();
      const [uploadedImages, setUploadedImages] = useState([]);
      const [imagePreviews, setImagePreviews] = useState([]);
    
      const quantity = watch("quantity", 0);
    
      // Handle file input change and update image previews
      const handleImageChange = async (e) => {
        const files = Array.from(e.target.files).slice(0, 5 - imagePreviews.length); // Limit to 5 images total
        const newImagePreviews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
    
        // Upload images to ImageBB
  const uploadedImageUrls = await uploadImages(files);
  setUploadedImages((prevImages) => [...prevImages, ...uploadedImageUrls]);
  setValue("images", [...uploadedImages, ...uploadedImageUrls]);  // Update images in form state
      };
    
      // Upload images to ImageBB API
      const uploadImages = async (files) => {
        const imgbbAPIKey = "d23f6d59c28d5f1eb526e5d2f6dc56da";  // Replace with your actual API key
        const uploadedImageUrls = [];
    
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("image", files[i]);
    
          const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
            {
              method: "POST",
              body: formData,
            }
          );
    
          const data = await response.json();
          if (data.success) {
            uploadedImageUrls.push(data.data.url);
          }
        }
        return uploadedImageUrls;
      };
    
      // Submit the form data
      const onSubmit = async (data) => {
        try {
          console.log("Form Data Before Submission:", data);
          console.log("Uploaded Images State:", uploadedImages);
      
          if (uploadedImages.length > 0) {
            data.images = uploadedImages;
          }
      
          const response = await fetch(
            "http://localhost:5000/api/v1/products/create-product",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
      
          console.log("Server Response Status:", response.status);
      
          const result = await response.json();
          console.log("Server Response Body:", result);
      
          if (result.success) {
            toast.success("Product has been created!");
            reset(); // Reset the form fields
            setUploadedImages([]); 
            setImagePreviews([]);
          } else {
            console.error("Error adding product:", result.message);
            toast.error(result.message || "Failed to add product. Please try again.");
          }
        } catch (error) {
          console.error("Submission Error:", error);
          toast.error("Something went wrong. Please try again.");
        }
      };
    

    return (
        <div className="flex flex-col gap-2 md:flex-row justify-center items-start space-x-0 md:space-x-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 md:flex-row justify-center items-start space-x-0 md:space-x-8 w-full"
            >
                {/* Left Side: Form Section */}
                <div className="w-full md:w-3/5 lg:w-1/2 p-8 rounded-lg">
                    <h2 className="text-3xl font-black uppercase mb-6">Add New Product</h2>

                    <div className="rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">General Information</h3>
                        <div>
                            <input
                                {...register("name", { required: "Product name is required" })}
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full mb-4"
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                            <textarea
                                {...register("description")}
                                placeholder="Product Description"
                                className="textarea textarea-bordered w-full h-32 mb-4"
                            ></textarea>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block mt-8 mb-4 font-semibold text-lg">Product Code</label>
                                    <input
                                        {...register("productCode", { required: "Product code is required" })}
                                        type="text"
                                        placeholder="Product Code"
                                        className="input input-bordered w-3/4 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2 text-lg">Quantity</label>
                                    <p className="text-sm mb-4">Slide to select quantity (0-100)</p>

                                    <input
                                        type="range"
                                        {...register("quantity", { min: 0, max: 100 })}
                                        onChange={(e) => setValue("quantity", parseInt(e.target.value) || 0)}
                                        className="range range-success w-full"
                                        min="0"
                                        max="100"
                                        step="1"
                                    />
                                    <progress
                                        className="progress progress-success w-full mt-3"
                                        value={quantity}
                                        max="100"
                                    ></progress>
                                    <p className="text-sm text-gray-600 mt-1 text-center">
                                        Selected Quantity: <span className="font-medium">{quantity}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-4 text-lg">Base Price</label>
                                <input
                                    {...register("price", { required: "Price is required" })}
                                    type="number"
                                    placeholder="Base Price"
                                    className="input input-bordered w-full"
                                />
                                {errors.price && (
                                    <span className="text-red-500 text-sm">{errors.price.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block font-semibold mb-4 text-lg">Discount Price</label>
                                <input
                                    {...register("discountPrice")}
                                    type="number"
                                    placeholder="Original Price"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-4 text-lg">Level</label>
                                <select
                                    {...register("level", { required: "Product status is required" })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="basic">Basic</option>
                                    <option value="premium">Premium</option>
                                    <option value="exclusive">Exclusive</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-semibold mb-4 text-lg">Status</label>
                                <select
                                    {...register("status", { required: "Product status is required" })}
                                    className="select select-bordered w-full"
                                    defaultValue={"active"}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Upload Image and Category Section */}
                <div className="w-full md:w-2/5 lg:w-1/2 mt-12 p- rounded-lg space-y-6 flex flex-col">
                    {/* Submit Button */}
                    <div className="flex justify-end gap-2 mt-4 w-full">
                        <button
                            type="button"
                            className="btn text-md font-semibold rounded-lg hover:scale-105 transform transition"
                        >
                            <RiDraftLine className="text-lg" />
                            Draft
                        </button>
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:scale-105 transform transition font-black"
                        >
                            <IoCheckmarkDoneOutline className="text-xl" />
                            Add Products
                        </button>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">Upload Images</h3>
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
                    </div>

                    <div className="grid grid-cols-2 rounded-lg">
                        <div className="lg:pt-24 gap-4">
                            <div>
                                <label className="block font-semibold mb-4 text-lg">Category</label>
                                <input
                                    {...register("category", { required: "Product category is required" })}
                                    type="text"
                                    placeholder="Product Category"
                                    className="input input-bordered w-3/4 mb-8"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-4 text-lg">Subcategory</label>
                                <input
                                    {...register("subcategory")}
                                    type="text"
                                    placeholder="Product Subcategory"
                                    className="input input-bordered w-3/4"
                                />
                            </div>
                        </div>
                        <div>
                            <img className="w-96 absolute bottom-0" src={managePhoto} alt="" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ManageProduct;
