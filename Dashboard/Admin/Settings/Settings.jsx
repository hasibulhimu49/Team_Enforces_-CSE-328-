import React, { useState } from 'react';
import { FaCog, FaLock, FaBell, FaUserShield, FaSave, FaPalette, FaCreditCard, FaTools, FaRegFileAlt, FaUsers } from "react-icons/fa";

const Settings = () => {
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [siteTitle, setSiteTitle] = useState("My SaaS Platform");
    const [currency, setCurrency] = useState("USD");

    const handleNotificationToggle = () => {
        setNotificationEnabled(!notificationEnabled);
    };

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleSaveSettings = () => {
        alert('Settings saved successfully!');
    };

    return (
        <div className="p-6 space-y-8 ">
            <h2 className="text-3xl font-black uppercase"> Settings</h2>

            {/* General Settings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        <FaCog className="inline-block mr-3 text-blue-500" />
                        General Settings
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Site Title</span>
                            <input
                                type="text"
                                value={siteTitle}
                                onChange={(e) => setSiteTitle(e.target.value)}
                                className="w-2/3 p-2 border rounded-lg text-gray-700"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Enable Notifications</span>
                            <button
                                onClick={handleNotificationToggle}
                                className={`px-4 py-2 rounded-full ${notificationEnabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
                            >
                                {notificationEnabled ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Enable Dark Mode</span>
                            <button
                                onClick={handleDarkModeToggle}
                                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-gray-300'} text-white`}
                            >
                                {darkMode ? 'Enabled' : 'Disabled'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Site Appearance */}
                <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        <FaPalette className="inline-block mr-3 text-yellow-500" />
                        Site Appearance
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Site Logo</span>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Upload Logo</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Primary Color</span>
                            <input type="color" className="w-12 h-12 border rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Payment Settings */}
                <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        <FaCreditCard className="inline-block mr-3 text-green-500" />
                        Payment Settings
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Currency</span>
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="w-2/3 p-2 border rounded-lg text-gray-700"
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="INR">INR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Payment Gateway</span>
                            <select className="w-2/3 p-2 border rounded-lg text-gray-700">
                                <option value="paypal">PayPal</option>
                                <option value="stripe">Stripe</option>
                                <option value="razorpay">Razorpay</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* User & Security Settings */}
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <FaUserShield className="inline-block mr-3 text-blue-500" />
                    User & Security Settings
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Password Protection</span>
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-full">
                            Change Password
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Two-Factor Authentication</span>
                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-full">
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </div>

            {/* System Settings */}
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <FaTools className="inline-block mr-3 text-purple-500" />
                    System Settings
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Enable Maintenance Mode</span>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-full">Enable</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">System Updates</span>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-full">Check for Updates</button>
                    </div>
                </div>
            </div>

            {/* Save Settings Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleSaveSettings}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
                >
                    <FaSave className="mr-2" /> Save Settings
                </button>
            </div>
        </div>
    );
};

export default Settings;
