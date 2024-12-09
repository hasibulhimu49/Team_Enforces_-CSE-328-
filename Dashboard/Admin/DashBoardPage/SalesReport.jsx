import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const SalesReport = () => {
    const data = {
        labels: ['Product Launched', 'Ongoing Product', 'Product Sold'],
        datasets: [
            {
                label: 'Sales',
                data: [233, 23, 482],
                backgroundColor: '#A3E635', // Light green color
                borderRadius: 5,
                barThickness: 10, // Makes bars thinner to fit in smaller height
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bar chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 500, // Adjust max value as needed to fit your data
                ticks: {
                    callback: (value) => `${value}`, // Display values as they are
                    font: {
                        size: 10, // Smaller font size to fit height
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 10, // Smaller font size to fit height
                    },
                },
            },
        },
    };

    return (
        <div className="bg-white p-2 mt-1 rounded-lg shadow w-full h-40">
            <div className="flex justify-between items-center mb-2 px-2">
                <h3 className="font-bold text-sm">Sales Report</h3>
                <span className="text-gray-400 text-xs cursor-pointer">•••</span>
            </div>
            <div className="w-full h-full">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default SalesReport;
