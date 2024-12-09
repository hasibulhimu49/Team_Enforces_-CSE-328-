import React, { useState } from 'react';
import HomeCard from '../Home/HomeCard/HomeCard';
import ProductReview from './PostReview';
import CustomerReviews from './CustomerReview';

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('description'); // Handle tab switch

  return (
    <div className="max-w-7xl mx-auto py-8 lg:mt-52 p-2 lg:p-0 md:p-8">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab('description')}
          className={`py-2 px-4 ${
            activeTab === 'description'
              ? 'border-b-2 border-green-600 font-semibold'
              : 'text-gray-600'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('guideline')}
          className={`py-2 px-4 ${
            activeTab === 'guideline'
              ? 'border-b-2 border-green-600 font-semibold'
              : 'text-gray-600'
          }`}
        >
          Product Review
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'description' && (
        <div className='mb-4'>
          {/* Tree Details */}
          <div>
            <h4 className="text-lg font-semibold mb-2 p-2">Japanese Maple Tree</h4>
            {/* <img src="../../../public/Assets/ExtraPic/download.jpeg" alt="Japanese Maple Tree" className="w-full h-96 rounded-lg mb-4" /> */}
            <ul className="list-disc pl-5 mb-4 px-2">
              <li>Height: 5-8 feet</li>
              <li>Spread: 4-6 feet</li>
              <li>Sunlight: Partial to full sunlight</li>
              <li>Soil Type: Well-drained, slightly acidic soil</li>
            </ul>

            {/* Care Instructions */}
            <div>
              <h4 className="text-lg font-semibold mb-2 p-2">Care Instructions:</h4>
              <ul className="list-disc pl-5 mb-4 px-2">
                <li>Water regularly, but do not overwater.</li>
                <li>Prune in late winter to early spring.</li>
                <li>Mulch around the base to retain moisture.</li>
                <li>Avoid planting in heavy clay soils.</li>
              </ul>
            </div>

            {/* Review */}
            
          </div>

         
        </div>
      )}

      {/* Guideline Tab Content */}
      {activeTab === 'guideline' && (
        <div className=''>
          {/* <h4 className=" text-lg font-semibold mb-2">Guidelines Coming Soon...</h4> */}
          {/* <HomeCard/> */}
          <ProductReview/>
        </div>
      )}
      <hr className='border mb-12'/>
      
    </div>
  );
};

export default ProductDescription;
