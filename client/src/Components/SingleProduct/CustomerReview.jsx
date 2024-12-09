import React, { useEffect, useState } from "react";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const mockReviews = [
      {
        username: "Ana Rhodes",
        platform: "Google",
        rating: 4.7,
        comment: "Amazing Template clean and commented code, beautiful design, and really not hard to work with.",
        bgColor: "bg-yellow-100",
        profileImage: "https://via.placeholder.com/50",
      },
      {
        username: "Morris Clarke",
        platform: "IBM",
        rating: 5.0,
        comment: "Amazing Template clean and commented code, beautiful design, and really not hard to work with.",
        bgColor: "bg-white",
        profileImage: "https://via.placeholder.com/50",
      },
      {
        username: "Jane Doe",
        platform: "Google",
        rating: 4.7,
        comment: "Amazing Template clean and commented code, beautiful design, and really not hard to work with.",
        bgColor: "bg-pink-200",
        profileImage: "https://via.placeholder.com/50",
      },
      {
        username: "John Smith",
        platform: "Google",
        rating: 4.9,
        comment: "Amazing Template clean and commented code, beautiful design, and really not hard to work with.",
        bgColor: "bg-red-300",
        profileImage: "https://via.placeholder.com/50",
      },
    ];

    setReviews(mockReviews);
  }, []);

  return (
    <div className="container max-w-7xl mx-auto p-6 mt-12">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Customers Review</h2>
      <p className="text-gray-500 mb-6 text-center">What our customers say about our service</p>

      {/* Reviews Section */}
      <div className="flex space-x-6 overflow-x-auto py-4">
        {reviews.slice(0,4).map((review, index) => (
          <div
            key={index}
            className={`w-80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${review.bgColor}`}
          >
            {/* User Info */}
            <div className="flex items-center mb-4">
              <img
                src={review.profileImage}
                alt={`${review.username}'s profile`}
                className="h-12 w-12 rounded-full border border-gray-300"
              />
              <div className="ml-3">
                <h4 className="font-bold text-gray-800">{review.username}</h4>
                <p className="text-sm text-gray-500">{review.platform}</p>
              </div>
            </div>
            {/* Review Content */}
            <p className="text-gray-700 font-medium mb-2">{review.comment}</p>
            {/* Rating */}
            <div className="flex items-center space-x-1 ">
              <span className="text-xl font-semibold">{review.rating}</span>
              <span>⭐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
