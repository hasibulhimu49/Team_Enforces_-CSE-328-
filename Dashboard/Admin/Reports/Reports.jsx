import React from 'react';
import { FaFileDownload, FaChartBar, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const Reports = () => {
    // Sample report data
    const reportData = {
        totalSales: 340,
        totalRevenue: "$25,000",
        totalUsers: 1200,
        newUsers: 120,
        productsSold: 500,
    };

    const salesReport = [
        { date: '2024-01-01', sales: 300, revenue: '$5,000' },
        { date: '2024-01-02', sales: 500, revenue: '$8,000' },
        { date: '2024-01-03', sales: 700, revenue: '$12,000' },
        { date: '2024-01-01', sales: 300, revenue: '$5,000' },
        { date: '2024-01-02', sales: 500, revenue: '$8,000' },
        { date: '2024-01-03', sales: 700, revenue: '$12,000' },
        { date: '2024-01-01', sales: 300, revenue: '$5,000' },
        { date: '2024-01-02', sales: 500, revenue: '$8,000' },
        { date: '2024-01-03', sales: 700, revenue: '$12,000' },
        { date: '2024-01-01', sales: 300, revenue: '$5,000' },
        { date: '2024-01-01', sales: 300, revenue: '$5,000' },

        
    ];

    // Handle download report
    const handleDownloadReport = () => {
        // Placeholder for downloading logic (e.g., generating a CSV or PDF report)
        alert('Downloading the report...');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Admin Reports</h2>

            {/* Report Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="p-4 bg-blue-100 border-l-4 border-blue-500 shadow rounded-lg flex items-center">
                    <FaShoppingCart className="text-blue-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Total Sales</h3>
                        <p className="text-gray-600 text-xl">{reportData.totalSales}</p>
                    </div>
                </div>
                <div className="p-4 bg-green-100 border-l-4 border-green-500 shadow rounded-lg flex items-center">
                    <FaDollarSign className="text-green-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Total Revenue</h3>
                        <p className="text-gray-600 text-xl">{reportData.totalRevenue}</p>
                    </div>
                </div>
                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 shadow rounded-lg flex items-center">
                    <FaUsers className="text-yellow-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Total Users</h3>
                        <p className="text-gray-600 text-xl">{reportData.totalUsers}</p>
                    </div>
                </div>
                <div className="p-4 bg-red-100 border-l-4 border-red-500 shadow rounded-lg flex items-center">
                    <FaChartBar className="text-red-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Products Sold</h3>
                        <p className="text-gray-600 text-xl">{reportData.productsSold}</p>
                    </div>
                </div>
            </div>

            {/* Report Data Table */}
            <div className="bg-white p-6 shadow rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Sales Report</h3>
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-700">Date</th>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-700">Sales</th>
                            <th className="px-4 py-2 text-left bg-gray-100 text-gray-700">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesReport.map((report, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2 text-gray-700">{report.date}</td>
                                <td className="px-4 py-2 text-gray-700">{report.sales}</td>
                                <td className="px-4 py-2 text-gray-700">{report.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Download Button */}
            <div className="text-right">
                <button
                    onClick={handleDownloadReport}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    <FaFileDownload className="inline-block mr-2" /> Download Full Report
                </button>
            </div>
        </div>
    );
};

export default Reports;
