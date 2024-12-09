import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";



const SummaryCards = () => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{/* 
            <HiMiniArrowTrendingUp />
            <HiArrowTrendingDown /> 
            */}


            <div className="p-4 bg-green-900 text-white rounded-3xl shadow-lg w-full">

                <div className='flex items-center gap-1 '>
                    
                    <input type="radio" name="radio-8" className="radio scale-75 radio-error " defaultChecked />
                

                    <p className="text-sm font-bold">

                        Update</p>
                </div>
                <p className="mt-4 text-xs">Feb 12th 2024</p>
                <h2 className=" text-xl font-bold">Sales revenue increased</h2>
                <h3 className="text-2xl font-bold text-yellow-300">40% <small className='text-white'>in 1 week</small></h3>
                <a href="#" className="mt-4 inline-block text-white underline underline-offset-4 ">See Statistics &gt;</a>
            </div>

            <div className="p-4 bg-green-50 rounded-3xl shadow-lg w-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <p className="text-sm font-semibold text-gray-500">Net Income</p>
                    <FaEllipsisH className="text-gray-400" />
                </div>
                <h2 className="text-5xl font-bold mt-2"><sup className='text-gray-400'>$</sup> 193.000</h2>
                <p className=" mt-2 flex items-center">
                <HiMiniArrowTrendingUp  className='me-2 text-green-600'/>
                    <span className="text-sm font-semibold text-green-600 pe-2">  +35%</span> from last month
                </p>
            </div>

            <div className="p-4 bg-white rounded-3xl shadow-lg w-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <p className="text-sm font-semibold text-gray-500">Total Return</p>
                    <FaEllipsisH className="text-gray-400" />
                </div>
                <h2 className="text-5xl font-bold mt-2"><sup className='text-gray-400'>$</sup> 32.000</h2>
                <p className=" mt-2 flex items-center">
                <HiMiniArrowTrendingUp  className='me-2 text-red-600'/>
                    <span className="text-sm font-semibold text-red-600 pe-2">  -24%</span> from last month
                </p>
            </div>
        </div>
    );
};

export default SummaryCards;
