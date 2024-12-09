import React from 'react';
// You'll need to install react-google-maps or another map package and get an API key from Google
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationPage = () => {
    // Example coordinates for the main office and shops
    const mainLocation = { lat: 23.8103, lng: 90.4125 }; // Dhaka, Bangladesh (example)
    const shopLocations = [
        { lat: 23.7805, lng: 90.4074, name: "Shop 1", mobile: "+8801234567890" },
        { lat: 23.7508, lng: 90.3938, name: "Shop 2", mobile: "+8801234567891" },
        { lat: 23.7648, lng: 90.4282, name: "Shop 3", mobile: "+8801234567892" },
        { lat: 23.7912, lng: 90.4022, name: "Shop 4", mobile: "+8801234567893" },
        
    ];

    return (
        <div className=" mx-auto  z-10 relative lg:p-0 md:p-8 p-4">
            <h1 className="text-4xl font-bold text-center mb-8 mt-8">Our Locations</h1>
            
            {/* Main Location */}
            <div className="bg-green-50 max-w-7xl mx-auto p-6 shadow-lg rounded-lg mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Main Office</h2>
                <p className="text-lg">123, Main Road, Dhaka, Bangladesh</p>
                <p className="text-lg">Phone: +8801234567800</p>
            </div>

            {/* Shop Locations */}
            <div className="bg-green-50 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {shopLocations.map((shop, index) => (
                    <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold">{shop.name}</h3>
                        <p className="text-lg">Address: {shop.name} Road, Dhaka, Bangladesh</p>
                        <p className="text-lg">Mobile: {shop.mobile}</p>
                    </div>
                ))}
            </div>

            {/* Google Map Section */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-8">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1897417379964!2d90.35453857608024!3d23.81185098641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12015382851%3A0x3ceca92fcf1a72d2!2sBangladesh%20University%20of%20Business%20and%20Technology%20(BUBT)!5e0!3m2!1sen!2sbd!4v1729201292468!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
    ></iframe>
</div>
        </div>
    );
};

export default LocationPage;
