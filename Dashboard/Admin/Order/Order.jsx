import React, { useState, useEffect } from 'react';

const OrderDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch data from API endpoint when component mounts
        fetch("/order.json")
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error("Error fetching orders:", error));
    }, []);

    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order =>
            order.id === id ? { ...order, status: newStatus } : order
        ));
    };

    return (
        <div className="p-4">
            <h2 className="text-3xl font-black uppercase mb-4">Orders</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Order</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Send to Steadfast</th>
                            <th className="px-4 py-2">Print Details</th>
                            <th className="px-4 py-2">ConsignmentID</th>
                            <th className="px-4 py-2">Delivery Status</th>
                            <th className="px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.slice(0,11)?.map(order => (
                            <tr key={order.id} className="border-t">
                                <td className="px-4 py-2">
                                    #{order.id} {order.customerName}<br />
                                    <span className="text-gray-500 text-sm">{order.email}</span>
                                </td>
                                <td className="px-4 py-2 text-center">{order.time}</td>
                                <td className="px-4 py-2 text-center">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                        order.status === 'Processing'
                                            ? 'bg-green-100 text-green-600'
                                            : order.status === 'On hold'
                                            ? 'bg-yellow-100 text-yellow-600'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center"><input type="text" className="border rounded px-2 w-3/4 py-1" placeholder="exact amount" /></td>

                                <td className="px-4 py-2 text-center">
                                    <button className="btn btn-sm bg-green-600 text-white">Send</button>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="btn btn-sm bg-yellow-200">Print</button>
                                </td>
                                <td className="px-4 py-2 text-">{order.consignmentID || 'N/A'}</td>
                                <td className="px-4 py-2 text-center">
                                    <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-sm">{order.deliveryStatus}</span>
                                </td>
                                <td className="px-4 font-black py-2 text-center">${order.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDashboard;
