import React from 'react';
import { FaUsers, FaChartLine, FaShoppingCart, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const Analytic = () => {
    // Placeholder data
    const analyticsData = {
        totalUsers: 1200,
        totalSales: 340,
        totalRevenue: "$25,000",
        conversionRate: "4.2%",
        newUsers: 120,
        returningUsers: 1080,
    };

    const salesPerformance = [
        { name: 'Jan', sales: 300 },
        { name: 'Feb', sales: 500 },
        { name: 'Mar', sales: 700 },
        { name: 'Apr', sales: 200 },
    ];

    const userEngagement = [
        { name: 'New Users', value: analyticsData.newUsers },
        { name: 'Returning Users', value: analyticsData.returningUsers },
    ];

    const pieColors = ['#4CAF50', '#FF9800' ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-black uppercase mb-6 text-gray-700">Analytics</h2>

            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-blue-100 border-l-4 border-blue-500 shadow rounded-lg flex items-center">
                    <FaUsers className="text-blue-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Total Users</h3>
                        <p className="text-gray-600 text-xl">{analyticsData.totalUsers}</p>
                        <p className="text-sm text-green-500 flex items-center">
                            <FaArrowUp className="mr-1" /> +15% this month
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-green-100 border-l-4 border-green-500 shadow rounded-lg flex items-center">
                    <FaShoppingCart className="text-green-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Total Sales</h3>
                        <p className="text-gray-600 text-xl">{analyticsData.totalSales}</p>
                        <p className="text-sm text-red-500 flex items-center">
                            <FaArrowDown className="mr-1" /> -5% this month
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 shadow rounded-lg flex items-center">
                    <FaDollarSign className="text-yellow-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Revenue</h3>
                        <p className="text-gray-600 text-xl">{analyticsData.totalRevenue}</p>
                        <p className="text-sm text-green-500 flex items-center">
                            <FaArrowUp className="mr-1" /> +20% this month
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-red-100 border-l-4 border-red-500 shadow rounded-lg flex items-center">
                    <FaChartLine className="text-red-500 text-3xl mr-4" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-700">Conversion Rate</h3>
                        <p className="text-gray-600 text-xl">{analyticsData.conversionRate}</p>
                        <p className="text-sm text-green-500 flex items-center">
                            <FaArrowUp className="mr-1" /> +0.5% this month
                        </p>
                    </div>
                </div>
            </div>

            {/* Descriptive Text */}
            <div className="mt-8">
                <p className="text-gray-700 mb-4">
                    As the admin of this platform, it's important to have a comprehensive understanding of key performance metrics. In this section, you can quickly glance at important KPIs like <strong>Total Users</strong>, <strong>Total Sales</strong>, <strong>Total Revenue</strong>, and <strong>Conversion Rate</strong>. 
                    These metrics will help you track the overall health of your business, the performance of user engagement, and sales growth over time.
                </p>

                <p className="text-gray-700 mb-4">
                    The <strong>Sales Performance</strong> chart below provides an overview of your sales over the last few months. You can use this data to analyze trends and identify the months with the best sales growth. For example, February and March showed a significant increase in sales, while April saw a drop.
                </p>

             
            </div>

            {/* Chart Section - Grid Layout for Side-by-Side Charts */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sales Performance Chart */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-700 mb-4">Sales Performance</h3>
                    <div className="flex justify-center">
                        <LineChart width={500} height={300} data={salesPerformance}>
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                </div>

                {/* User Engagement Chart */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-700 mb-">User Engagement</h3>
                    <div className="flex justify-center">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={userEngagement}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                fill="#8884d8"
                                label={(entry) => `${entry.name}: ${entry.value}`}
                            >
                                {userEngagement.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytic;
