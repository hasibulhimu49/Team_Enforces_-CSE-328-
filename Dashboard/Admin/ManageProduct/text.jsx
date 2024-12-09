import React from 'react';

const text = () => {
    return (
        <div>
            <h3 className="font-semibold text-lg">Upload Images</h3>
            <div className="p-6 rounded-lg max-w-lg mx-auto">
                {/* Image Upload Section */}
                <div className="flex mt-6">
                    {/* Main Image Preview */}
                    <div className="w-1/2 pr-2">
                        {imagePreviews.length > 0 && (
                            <div className="h-32 overflow-hidden relative mb-2">
                                <img
                                    src={imagePreviews[0]}
                                    alt="Preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                    </div>

                    {/* Additional Images */}
                    <div className="w-1/2 pr-2">
                        <input
                            {...register("images")}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="file-input file-input-bordered w-full"
                            multiple
                        />
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {imagePreviews.map((image, index) => (
                                <div key={index} className="relative w-full h-20 overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Image Preview ${index}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default text;