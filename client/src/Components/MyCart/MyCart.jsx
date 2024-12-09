import React, { useState } from 'react';

const CartSection = ({ customClass = '' }) => {
  // Initial product data
  const [products, setProducts] = useState([
    // Tree products
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
  
    // Vegetable tree products
    {
      id: 4,
      name: 'Tomato Tree',
      price: 800,
      quantity: 1,
      imageUrl: 'https://c8.alamy.com/comp/2FKXGNP/close-up-tomato-fresh-vegetable-field-2FKXGNP.jpg',
      url: '/vegetable/tomatoes',
      category: 'Vegetable Tree'
    },
    {
      id: 5,
      name: 'Green Capsicum',
      price: 600,
      quantity: 1,
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312623899/ST/WX/LR/187956893/fresh-green-capsicum-500x500.jpeg',
      category: 'Vegetable Tree'
    },
    {
      id: 6,
      name: 'Carrot Tree',
      price: 700,
      quantity: 1,
      imageUrl: 'https://images.stockcake.com/public/3/d/2/3d23adc3-81c3-4a4b-aa27-21045c1915a0_large/fresh-carrot-harvest-stockcake.jpg',
      category: 'Vegetable Tree'
    },
  
    // General tree products
    {
      id: 7,
      name: 'Spinach',
      price: 3000,
      quantity: 1,
      imageUrl: 'https://gardenerspath.com/wp-content/uploads/2024/03/How-to-Grow-Spinach-Feature.jpg',
      url: '/vegetable/spinach',
      category: 'Tree'
    },
    {
      id: 8,
      name: 'Pine Apple',
      price: 3500,
      quantity: 1,
      imageUrl: 'https://plantskingdom.in/cdn/shop/products/pinababy-psyche.jpg?v=1657427540',
      category: 'Tree'
    }
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

  // Function to remove product
  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
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
    <div className={`container z-50 relative  max-w-7xl mx-auto p-4 ${customClass}`}>
      <h3 className="font-bold text-lg mb-4 text-center lg:text-left">
        Product details
      </h3>

      {/* Product Cards */}
      <div className="space-y-2 grid grid-cols-2 space-x-2 " >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-row lg:flex-row justify-between items-center relative mt-4"
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
          Confirm your Order Tk {calculateTotal()}
        </button>
      </div>
    </div>
  );
};

export default CartSection;
