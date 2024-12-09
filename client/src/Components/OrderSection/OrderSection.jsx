import React, { useState } from 'react';

const OrderSection = () => {
    // Initial product data
    const [products, setProducts] = useState([
      {
        id: 1,
        name: 'Mango Tree',
        price: 1500,
        quantity: 1,
        imageUrl: 'https://backyardcitrustrees.com/cdn/shop/files/Mango-Classic_a3c9aa09-4dc5-4b73-975f-c80607bef74f_669x669.jpg?v=1702661686',
        category: 'Fruit Tree'
      },
      {
        id: 2,
        name: 'Apple Tree',
        price: 1200,
        quantity: 1,
        imageUrl: 'https://onlineorchards.com/cdn/shop/products/granny1_edae09f8-feac-4066-b741-707586f2f3d2_345x@2x.jpg?v=1673300565',
        url: '/fruit/green-apples',
        category: 'Fruit Tree'
      },
      {
        id: 3,
        name: 'Fresh Oranges',
        price: 1000,
        quantity: 1,
        imageUrl: 'https://cdn1.bloomingdesert.com/wp-content/uploads/2016/11/orange-tree-plant-care.jpg',
        url: '/fruit/fresh-oranges',
        category: 'Fruit Tree'
      },
        


    ]);

    // Function to increase quantity
    const handleIncrease = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
        setProducts(updatedProducts);
    };

    // Function to decrease quantity
    const handleDecrease = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id && product.quantity > 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        setProducts(updatedProducts);
    };

    // Calculate total cost
    const calculateTotal = () => {
        return products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    return (
        <div className="container max-w-7xl mx-auto lg:p-4 md:p-4  z-10 p-4 relative ">
            <h2 className="text-center text-2xl mt-6 font-bold mb-6 text-black">
  To complete your order, please enter your name, mobile number, and address.
</h2>


            {/* Billing Details & Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Left Column - Billing Details */}
                <div>
  <h3 className="font-bold text-lg mb-4">Billing Details</h3>
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Enter your name *</label>
      <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your full name" />
    </div>
    <div>
      <label className="block text-gray-700">Enter your mobile number *</label>
      <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter 11-digit mobile number" />
    </div>
    <div>
      <label className="block text-gray-700">Select district *</label>
      <select className="w-full p-2 border border-gray-300 rounded-lg">
        <option>Select district</option>
        <option>Dhaka</option>
        <option>Chittagong</option>
        <option>Other</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-700">Select sub-district *</label>
      <select className="w-full p-2 border border-gray-300 rounded-lg">
        <option>Select sub-district</option>
        <option>Sub-district 1</option>
        <option>Sub-district 2</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-700">Full address</label>
      <textarea className="w-full p-2 border border-gray-300 rounded-lg" placeholder="House number, road, unit, district..."></textarea>
    </div>
    <div>
      <label className="block text-gray-700">Note (optional)</label>
      <textarea className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Any special requests"></textarea>
    </div>
  </form>
</div>


                {/* Right Column - Product Details */}
                <div className="container max-w-5xl mx-auto lg:p-4 md:p-4">
      <h3 className="font-bold text-lg mb-4 text-center lg:text-left">
        Product Details
      </h3>

      {/* Product Cards */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-row lg:flex-row justify-between items-center relative"
          >
            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-24 h-auto mb- lg:mb-0 object-cover rounded-md transition-transform transform hover:scale-105"
            />

            {/* Product Info */}
            <div className="ps-2 lg:text-left lg:flex-1 lg:ml-6">
              <h4 className="font-bold lg:text-xl text-sm mb-1 text-gray-900">{product.name}</h4>
              <p className="text-gray-500 lg:text-lg text-sm">Tk {product.price}</p>
              
            </div>

            {/* Quantity Control */}
            <div className="flex lg:flex-row md:flex-row flex-row items-center mt-4 lg:mt-0">
              <button
                onClick={() => handleDecrease(product.id)}
                className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300 text-gray-700 transition-colors"
              >
                -
              </button>
              <span className="mx-2 text-xl font-semibold">{product.quantity}</span>
              <button
                onClick={() => handleIncrease(product.id)}
                className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300 text-gray-700 transition-colors"
              >
                +
              </button>
            </div>

            {/* Price and Remove */}
            <div className="flex flex-col items-center lg:items-end mt-4 lg:mt-0 lg:w-28 lg:ps-0 md:ps-0 ps-6">
              <p className="font-bold text-lg text-green-600">
                Tk {product.price * product.quantity}
              </p>
              <button
                onClick={() => handleRemove(product.id)}
                className="text-red-500 hover:text-red-600 text-sm mt-2 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="sticky bottom-0 bg-white p-4 rounded-lg shadow-lg mt-6 text-right">
      <p className="font-xl text-sm  text-gray-800 ">Total: <span className='font-black text-2xl px-2'>{calculateTotal()}</span> TAKA</p>
        <button className="bg-green-600 text-white py-3 px-6 mt-4 rounded-lg w-full  transition-transform transform hover:scale-105">
          Confirm Your Order Tk {calculateTotal()}
        </button>
      </div>
    </div>
            </div>
        </div>
    );
};

export default OrderSection;
