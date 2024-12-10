import React from 'react';

const TrackOrder = () => {
  // Sample order tracking data
  const orderDetails = {
    id: '#ORD12345',
    placedOn: '15 November 2024',
    estimatedDelivery: '20 November 2024',
    status: 'Out for Delivery',
    trackingSteps: [
      { label: 'Order Placed', date: '15 Nov 2024' },
      { label: 'Processing', date: '16 Nov 2024' },
      { label: 'Shipped', date: '18 Nov 2024' },
      { label: 'Out for Delivery', date: '19 Nov 2024' },
      { label: 'Delivered', date: null },
    ],
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      {/* Title */}
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Track Your Order</h3>

      {/* Order Summary */}
      <div className="bg-gradient-to-r from-green-50 via-white to-green-50 p-6 rounded-lg shadow-lg mb-8">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Order ID: {orderDetails.id}</h4>
            <p className="text-gray-600">Placed on: {orderDetails.placedOn}</p>
            <p className="text-gray-600">Estimated Delivery: {orderDetails.estimatedDelivery}</p>
          </div>
          <p
            className={`font-bold px-4 py-2 rounded-full ${
              orderDetails.status === 'Delivered'
                ? 'bg-green-100 text-green-600'
                : 'bg-yellow-100 text-yellow-600'
            }`}
          >
            {orderDetails.status}
          </p>
        </div>
      </div>

      {/* Tracking Steps */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Order Progress</h4>
        <div className="relative">
          {orderDetails.trackingSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 mb-6 last:mb-0"
            >
              {/* Step Indicator */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  orderDetails.status === step.label || index === 0
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                {index + 1}
              </div>

              {/* Step Info */}
              <div>
                <h5
                  className={`font-semibold ${
                    orderDetails.status === step.label || index === 0
                      ? 'text-green-600'
                      : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </h5>
                {step.date && <p className="text-sm text-gray-500">{step.date}</p>}
              </div>
            </div>
          ))}
          {/* Progress Bar */}
          <div className="absolute top-4 left-4 w-1 h-full bg-gray-300">
            <div
              className="bg-green-500 h-1/2"
              style={{
                height: `${
                  ((orderDetails.trackingSteps.findIndex((step) => step.label === orderDetails.status) + 1) /
                    orderDetails.trackingSteps.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
