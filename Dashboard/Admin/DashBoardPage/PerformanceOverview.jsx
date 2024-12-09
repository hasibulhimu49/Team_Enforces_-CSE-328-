import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceOverview = () => {
    const data = {
        labels: ['View Count', 'Percentage', 'Sales', 'Return'],
        datasets: [
            {
                data: [16, 23, 45, 16], // Four percentage values
                backgroundColor: ['#F97316', '#14B8A6', '#10B981', '#EAB308'],
                hoverBackgroundColor: ['#FB923C', '#2DD4BF', '#34D399', '#FACC15'],
            },
        ],
    };

    const options = {
        cutout: '70%', // Creates a donut effect by making the center hollow
        plugins: {
            legend: {
                display: false, // Hide the default legend
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <h3 className="font-bold text-lg text-center mb-4">Total View Performance</h3>

            {/* Donut Chart */}
            <div className="relative flex items-center justify-center mx-auto h-40 w-40">
                <Doughnut data={data} options={options} />
                <div className="absolute h-20 w-20 rounded-full bg-white flex flex-col font-black items-center justify-center">
                    <p className='text-sm text-gray-400'>Total Count</p>
                    <h1 className='text-2xl'>565K</h1> 
                </div>

                {/* Outside Labels */}
                <div className="absolute top-0 -right-4 text-xs font-semibold bg-orange-500 text-white px-2 py-1 rounded-full">
                    16%
                </div>
                <div className="absolute bottom-4 -right-8 text-xs font-semibold bg-teal-600 text-white px-2 py-1 rounded-full">
                    23%
                </div>
                <div className="absolute bottom-8 -left-10 text-xs font-semibold bg-green-600 text-white px-2 py-1 rounded-full">
                    45%
                </div>
                <div className="absolute top-0 -left-4 text-xs font-semibold bg-yellow-500 text-white px-2 py-1 rounded-full">
                    16%
                </div>
            </div>

            <p className="text-center text-gray-600 mt-4">Here are some tips on how to improve your score.</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg 
             bg-gradient-to-r from-green-400 to-green-600  font-semibold  hover:scale-105 transform transition">Guide Views</button>

            {/* Legend below the button */}
            <div className="grid grid-cols-2 gap-2 justify-around mt-4 text-sm">
                <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-orange-500 inline-block mr-2"></span>
                    <span>View Count</span>
                </div>
                <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-teal-600 inline-block mr-2"></span>
                    <span>Percentage</span>
                </div>
                <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-green-600 inline-block mr-2"></span>
                    <span>Sales</span>
                </div>
                <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block mr-2"></span>
                    <span>Return</span>
                </div>
            </div>
        </div>
    );
};

export default PerformanceOverview;
