import React, { useEffect, useState } from 'react';
import { MdAutoDelete } from "react-icons/md";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [expandedReviews, setExpandedReviews] = useState({});

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('/review.json')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error("Error fetching reviews:", error));
    }, []);

    const handleDelete = (id) => {
        console.log(`Deleted review with ID: ${id}`);
        setReviews(reviews.filter(review => review.id !== id));
    };

    const toggleExpand = (id) => {
        setExpandedReviews(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const cardColors = [
    'bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50',
    'bg-gradient-to-r from-green-200 via-green-100 to-green-50',
    'bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50',
    'bg-gradient-to-r from-red-200 via-red-100 to-red-50',
    'bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50',
    'bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-50',
    'bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50',
    'bg-gradient-to-r from-teal-200 via-teal-100 to-teal-50',
    'bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50',
    'bg-gradient-to-r from-cyan-200 via-cyan-100 to-cyan-50',
    'bg-gradient-to-r from-amber-200 via-amber-100 to-amber-50',
    'bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-50',
    'bg-gradient-to-r from-lime-200 via-lime-100 to-lime-50',
    'bg-gradient-to-r from-fuchsia-200 via-fuchsia-100 to-fuchsia-50',
    'bg-gradient-to-r from-sky-200 via-sky-100 to-sky-50',
    'bg-gradient-to-r from-rose-200 via-rose-100 to-rose-50',
    'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50',
];


    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * cardColors.length);
        return cardColors[randomIndex];
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-black mb-8 uppercase text-gray-800">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className={`${getRandomColor()} shadow-xl rounded-xl overflow-hidden transform transition-transform hover:scale-105 `}
                    >
                        <div className="p-6 ">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        className="rounded-full w-14 h-14 border-2 border-gray-300 shadow-sm"
                                        src="/avatar.png"
                                        alt=""
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{review.customerName}</h3>
                                        <p className="text-sm text-gray-500">{review.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(review.id)}
                                    className="text-red-400 hover:text-red-700 transition duration-200"
                                    title="Delete Review"
                                >
                                    <MdAutoDelete className="text-2xl" />
                                </button>
                            </div>
                            <div className=" mt-4">
                                <div className="text-gray-800 leading-relaxed">
                                    {expandedReviews[review.id]
                                        ? review.content
                                        : `${review.content.slice(0, 100)}...`}
                                </div>
                                <button
                                    onClick={() => toggleExpand(review.id)}
                                    className="mt-2 flex items-center gap-1 text-blue-600 hover:text-blue-800 transition duration-200"
                                >
                                    {expandedReviews[review.id] ? (
                                        <>
                                            <MdExpandLess className="text-lg h-2 " />
                                            Show Less
                                        </>
                                    ) : (
                                        <>
                                            <MdExpandMore className="text-lg " />
                                            Show More
                                        </>
                                    )}
                                </button>
                            </div>
                            <div className=" text-end border-t pt-1">
                                <h4 className="text-lg font-semibold text-gray-800">{review.productName || "Unknown Product"}</h4>
                                <p className="text-sm text-gray-500">{review.productCode}</p>
                                <div className="mt- flex justify-end items-center text-yellow-500 text-xl">
                                    {'⭐'.repeat(review.rating)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
