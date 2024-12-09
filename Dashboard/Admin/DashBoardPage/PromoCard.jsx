import React from 'react';
import dashboardImage from "/Assets/dashboard/dashboard.webp"


const PromoCard = () => {
    return (
        <div className='mt-5'>
            <div className="w-full h-88  flex items-center justify-center rounded-lg overflow-hidden">
                <img className="w-full  h-full object-cover" src={dashboardImage} alt="Product" />
            </div>

            <div className="bg-green-50 p-4  rounded-lg shadow-xl  flex items-center justify-between">

                <div>
                    <h3 className="font-bold text-lg">Level up your sales</h3>
                    <p className='text-sm'>Managing to the next level.</p>
                </div>
                <button className="bg-green-600 text-white py-2 px-3 rounded-lg   bg-gradient-to-r from-green-400 to-green-600  font-semibold  hover:scale-105 transform transition">Upgrade  Pro</button>
            </div>


        </div>

    );
};

export default PromoCard;
