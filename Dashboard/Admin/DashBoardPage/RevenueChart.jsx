import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueOverview = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ],
        datasets: [
            {
                label: 'Income',
                data: [120, 150, 100, 170, 130, 190, 140],
                backgroundColor: '#064E3B', // Dark green for Income
            },
            {
                label: 'Expenses',
                data: [80, 90, 60, 120, 95, 100, 85],
                backgroundColor: '#A3E635', // Light green for Expenses
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.dataset.label}: $${tooltipItem.raw}`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `$${value}`,
                },
            },
        },
    };

    return (
        <div className="bg-white mt-4  p-4 rounded-lg
         shadow-lg w-full">
            <h3 className="font-bold text-lg mb-4">Revenue</h3>

            {/* Revenue Summary */}
            <div className="text-3xl font-semibold text-gray-800">
                $193,000
                <span className="text-green-500 text-sm font-medium ml-2">
                    ▲ +35% from last month
                </span>
            </div>

            {/* Bar Chart */}
            <div className="mt-4 ">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default RevenueOverview;
