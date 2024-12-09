import React from 'react';
import { FaTree, FaSeedling, FaLeaf } from 'react-icons/fa';

const transactions = [
    { name: 'Premium Tree Sapling', status: 'Completed', date: 'Jul 12th 2024', icon: <FaTree />, code: '0JWEJS7SNC' },
    { name: 'Organic Fertilizer', status: 'Pending', date: 'Jul 12th 2024', icon: <FaSeedling />, code: '1HGFXK3TPD' },
    { name: 'Garden Soil', status: 'Completed', date: 'Jul 12th 2024', icon: <FaLeaf />, code: '2PLMN8QRSJ' },
    { name: 'Plant Pots', status: 'Pending', date: 'Jul 12th 2024', icon: <FaSeedling />, code: '3DFGVZ4KXC' },
    { name: 'Indoor Bonsai', status: 'Completed', date: 'Jul 13th 2024', icon: <FaTree />, code: '4BRGJK9YTR' },
     { name: 'Watering Can', status: 'Completed', date: 'Jul 13th 2024', icon: <FaLeaf />, code: '5HNYL3ASXJ' },
     { name: 'Herb Seeds Pack', status: 'Pending', date: 'Jul 13th 2024', icon: <FaSeedling />, code: '6MJKZT5QWE' },
    { name: 'Cactus Plant', status: 'Completed', date: 'Jul 14th 2024', icon: <FaTree />, code: '7WNBSQ2POI' },
  { name: 'Organic Compost', status: 'Pending', date: 'Jul 14th 2024', icon: <FaLeaf />, code: '8VXDMN3LKO' },
     { name: 'Greenhouse Kit', status: 'Completed', date: 'Jul 15th 2024', icon: <FaTree />, code: '9FJQLY6BTC' }
];

const TransactionList = () => {
    return (
        <div className="bg-white p-4 mt-4 rounded-lg shadow-lg 
        
        ">
            <h3 className="font-bold text-lg mb-1 text-black">Transaction</h3>
            <ul>
                {transactions.slice(0,8).map((transaction, index) => (
                    <li key={index} className="flex items-center justify-between py-2 border-b ">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                {transaction.icon}
                            </div>
                            <div>
                                <p className="font-medium text-green-900">{transaction.name}</p>
                                <small className="text-gray-500">{transaction.date}</small>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className={`text-sm font-semibold ${transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                                {transaction.status}
                            </span>
                            <small className="text-gray-400">{transaction.code}</small>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
