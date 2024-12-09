import React from 'react';

const Profile = () => {
    return (
        <div className="max-w-7xl mx-auto p-8 z-10 relative">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 text-center lg:text-left">
                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/013/563/701/small_2x/quick-chat-with-business-partner-serious-young-man-in-full-suit-typing-text-message-using-his-smart-phone-while-standing-against-white-background-photo.jpg"
                            alt="User"
                            className="w-64 h-64 rounded-full object-cover shadow-lg mx-auto lg:mx-0 mb-4 border-4 border-green-500"
                        />
                    </div>

                    {/* User Details */}
                    <div className='space-y-3 text-gray-800'>
                        <h2 className="text-4xl font-bold text-green-600">Eshtiaque Ahmed</h2>
                        <p className="text-lg">Email: <span className="font-medium text-gray-700">john.doe@example.com</span></p>
                        <p className="text-lg">Phone: <span className="font-medium text-gray-700">+8801234567890</span></p>
                    </div>

                    {/* Edit and Logout Buttons */}
                    <div className="flex gap-4 justify-center lg:justify-start mt-6">
                        <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:scale-105 transform transition">
                            Edit Profile
                        </button>
                        <button className="px-6 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-lg hover:scale-105 transform transition">
                            Logout
                        </button>
                    </div>
                </div>

                {/* Transaction History and Delivery Address */}
                <div className="lg:w-2/3 bg-white shadow-xl rounded-lg p-8 relative overflow-hidden">
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-green-100 opacity-60 pointer-events-none"></div>

                    {/* Delivery Address */}
                    <h3 className="text-2xl font-bold text-green-600 relative z-10 mb-4">Delivery Address</h3>
                    <div className="border border-gray-200 p-5 rounded-lg bg-gray-50 relative z-10  justify-between items-start">

                        <div className='flex lg:flex-row md:flex-row flex-col  justify-between'>

                            <div>
                                <p className="text-gray-600">House: 123, Road: ABC, Area: XYZ</p>
                                <p className="text-gray-600">City: Your City, Postal Code: 1234</p>
                            </div>

                            <div className='flex gap-2 mt-4 md:mt-0 lg:mt-0'>
                                <button className=" btn btn-sm px-6 py-2 bg-gradient-to-r from-green-400 to-green-600  font-semibold rounded-lg hover:scale-105 transform transition text-white ">
                                    Edit
                                </button>
                                <button className="btn btn-sm px-4 py-2 bg-gradient-to-r from-red-400 to-red-600  font-semibold rounded-lg hover:scale-105 transform transition text-white ">
                                    Delete
                                </button>
                            </div>
                        </div>



                    </div>

                    {/* Transaction History */}
                    <h3 className="text-2xl font-bold text-green-600 relative z-10 mt-8 mb-4">Transaction History</h3>
                    <div className="space-y-4 relative z-10">
                        {/* Transaction Item */}
                        <div className="border border-gray-200 p-5 rounded-lg bg-gray-50">
                            <p className="text-lg font-semibold text-gray-700">Order #12345</p>
                            <p className="text-gray-600">Total: $99.99</p>
                            <p className="text-gray-600">Date: 2024-10-17</p>
                            <p className="text-gray-600">Status: <span className="font-medium text-green-500">Delivered</span></p>
                        </div>
                        <div className="border border-gray-200 p-5 rounded-lg bg-gray-50">
                            <p className="text-lg font-semibold text-gray-700">Order #12346</p>
                            <p className="text-gray-600">Total: $59.99</p>
                            <p className="text-gray-600">Date: 2024-10-10</p>
                            <p className="text-gray-600">Status: <span className="font-medium text-yellow-500">In Progress</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
