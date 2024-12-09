import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PostReview = ({ onSubmitReview }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

  // Handle form submission
  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      rating: selectedRating, // Include the star rating
    };

    onSubmitReview(reviewData); // Pass data to the parent component or API
    reset(); // Clear the form
    setSelectedRating(null); // Reset the star rating
  };

  return (
    <div className="bg-white p-6 max-w-3xl mx-auto rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
            {...register("username", { required: "Name is required" })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Star Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <div className="flex space-x-2 mt-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  className="hidden"
                  checked={selectedRating === value}
                  onChange={() => handleRatingChange(value)}
                />
                <svg
                  className={`w-6 h-6 ${
                    selectedRating >= value
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </label>
            ))}
          </div>
          {!selectedRating && (
            <p className="text-red-500 text-sm mt-2">Rating is required</p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Comment
          </label>
          <textarea
            id="comment"
            placeholder="Share your experience"
            rows="4"
            className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 ${
              errors.comment ? "border-red-500" : "border-gray-300"
            }`}
            {...register("comment", { required: "Comment is required" })}
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-sm">{errors.comment.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedRating}
          className={`w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-400 ${
            !selectedRating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default PostReview;
