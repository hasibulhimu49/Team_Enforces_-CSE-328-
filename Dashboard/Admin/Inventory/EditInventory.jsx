import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner"
import updatedImage from "/Assets/dashboard/updated3.png"

const EditInventoryModal = ({ productId, isOpen, onClose ,onProductUpdate }) => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [previewImages, setPreviewImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]); // For images already in the database

    // Fetch product details
    useEffect(() => {
        if (productId && isOpen) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/v1/products/${productId}`);
                    const data = await response.json();

                    if (data?.data) {
                        reset({
                            name: data.data.name,
                            description: data.data.description,
                            price: data.data.price,
                            discountPrice: data.data.discountPrice,
                            quantity: data.data.quantity,
                            category: data.data.category,
                            subcategory: data.data.subcategory,
                            productCode: data.data.productCode,
                            status: data.data.status,
                            level: data.data.level,
                        });

                        // Separate existing images from newly uploaded ones
                        setExistingImages(data.data.images || []);
                        setLoading(false);
                    } else {
                        toast.error("Failed to fetch product details.");
                        setLoading(false);
                    }
                } catch (error) {
                    console.error("Error fetching product details:", error);
                    toast.error("Error fetching product details.");
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [productId, reset, isOpen]);

    // Handle form submission
    const onSubmit = async (data) => {
        const formData = new FormData();

        // Upload new images to ImgBB
        const imgBBKey = "d23f6d59c28d5f1eb526e5d2f6dc56da"; // Replace with your ImgBB API key
        const uploadedImageURLs = await Promise.all(
            previewImages.map(async (file) => {
                const uploadFormData = new FormData();
                uploadFormData.append("image", file);

                const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, {
                    method: "POST",
                    body: uploadFormData,
                });

                const result = await response.json();
                if (result.success) {
                    return result.data.url;
                } else {
                    toast.error("Failed to upload an image.");
                    return null;
                }
            })
        );

        const validImageURLs = uploadedImageURLs.filter((url) => url !== null);

        // Combine existing and newly uploaded images
        const finalImageURLs = [...existingImages, ...validImageURLs];

        // Prepare the form data
        const updatedData = {
            ...data,
            images: finalImageURLs, // Send all images (existing + new) to the database
        };

        try {
            const response = await fetch(`http://localhost:5000/api/v1/products/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                const updatedProduct = await response.json();
                if (onProductUpdate) {
                    onProductUpdate(updatedProduct.data);
                } // Notify parent

                toast.success("Product updated successfully!");
                onClose(); // Close the modal after updating
            } else {
                toast.error("Failed to update the product.");
            }
        } catch (error) {
            console.error("Error updating the product:", error);
            toast.error("Error updating the product.");
        }
    };

    // Handle image preview and removal
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setPreviewImages((prev) => [...prev, ...files]); // Store files for ImgBB upload
    };

    const handleRemoveImage = (index, isExisting = false) => {
        if (isExisting) {
            setExistingImages((prev) => prev.filter((_, i) => i !== index));
        } else {
            setPreviewImages((prev) => prev.filter((_, i) => i !== index));
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="fixed inset-0 bg-black bg-opacity-30 "></div>
            <div





                className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-6 z-10 relative">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 uppercase">Edit Product</h1>

               
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Grid-based layout */}
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                            {/* Product Name */}
                            <div>
                                <label className="block font-medium text-black">Product Name</label>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Product name is required' })}
                                    className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block font-medium text-black">Category</label>
                                <input
                                    type="text"
                                    {...register('category', { required: 'Category is required' })}
                                    className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                />
                                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                            </div>

                            {/* Subcategory */}
                            <div>
                                <label className="block font-medium text-black">Subcategory</label>
                                <input
                                    type="text"
                                    {...register('subcategory')}
                                    className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block font-medium text-black">Price</label>
                                <input
                                    type="number"
                                    {...register('price', { required: 'Price is required', min: 1 })}
                                    className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                />
                                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                            </div>

                            {/* Discount Price */}
                            <div>
                                <label className="block font-medium text-black">Discount Price</label>
                                <input
                                    type="number"
                                    {...register('discountPrice')}
                                    className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block font-medium text-black">Quantity</label>
                                <input
                                    type="number"
                                    {...register('quantity', { required: 'Quantity is required', min: 0 })}
                                    className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                />
                                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                            </div>


                        </div>

                        <div className="grid grid-cols-3">

                            {/* Status */}
                            <div className="grid grid-cols-3 col-span-2 gap-4">
                                <div>
                                    <label className="block font-medium text-black">Status</label>
                                    <select
                                        {...register('status', { required: 'Status is required' })}
                                        className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                                </div>

                                {/* Level */}
                                <div>
                                    <label className="block font-medium text-black">Level</label>
                                    <select
                                        {...register('level', { required: 'Level is required' })}
                                        className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="basic">Basic</option>
                                        <option value="premium">Premium</option>
                                    </select>
                                    {errors.level && <p className="text-red-500 text-sm">{errors.level.message}</p>}
                                </div>
                                {/* <div
                                className="flex justify-end "
                                style={{
                                    backgroundImage: `url(${image2})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "",
                                    filter: "blur(5px)", // Adjust the blur intensity
                                }}
                            >
                               
                            </div> */}

                            </div>

                            <div className="col-span-1 row-span-2">
                               <img className="h-72" src={updatedImage} alt="" />
                            </div>
                            {/* Images Section */}
                            <div className="col-span-2 mt-4">
                                <label className="block font-medium text-black mb-4">Product Images</label>

                                <div className="grid grid-cols-6  gap-4">
                                    {/* Existing Images */}
                                    {existingImages.map((url, index) => (
                                        <div key={`existing-${index}`} className="relative">
                                            <img src={url} alt={`Existing ${index}`} className="w-24 h-24 object-cover rounded-md border" />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index, true)}
                                                className="absolute -top-3 -right-2 bg-red-600 text-white p-1 px-2 rounded-full text-xs"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}

                                    {/* New Images */}
                                    {previewImages.map((file, index) => (
                                        <div key={`new-${index}`} className="relative">
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={`Preview ${index}`}
                                                className="w-24 h-24 object-cover rounded-md border"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index, false)}
                                                className="absolute -top-3 right-3 bg-red-600 text-white p-1 px-2 rounded-full text-xs"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mt-4" />

                            </div>
                        </div>
                        {/* Description */}
                        <div>
                            <label className="block font-medium text-black mb-2">Description</label>
                            <textarea
                                {...register('description', { required: 'Description is required' })}
                                className="w-full  p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                                rows="3"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Update Product
                        </button>
                    </form>
              
              

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-3xl  text-black hover:text-gray-800">
                    ✕
                </button>
            </div>
        </Dialog>
    );
};

export default EditInventoryModal;
