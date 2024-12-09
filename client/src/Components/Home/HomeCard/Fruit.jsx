import React from 'react';
import { Link } from 'react-router-dom';

const Fruit = () => {

 
  // Sample fruit data
  const products = [
    {
      id: 1,
      name: 'Fresh Strawberries',
      price: 'TK. 250',
      originalPrice: 'TK. 400',
      label: '150 OFF',
      image: 'https://images.theconversation.com/files/621301/original/file-20240924-18-v804t4.jpg?ixlib=rb-4.1.0&rect=0%2C239%2C2503%2C1249&q=45&auto=format&w=1356&h=668&fit=crop',
      url: '/fruit/fresh-strawberries',
    },
    {
      id: 2,
      name: 'Juicy Mangoes',
      price: 'TK. 600',
      originalPrice: 'TK. 800',
      label: null,
      image: 'https://backyardcitrustrees.com/cdn/shop/files/Mango-Classic_a3c9aa09-4dc5-4b73-975f-c80607bef74f_669x669.jpg?v=1702661686',
      url: '/fruit/juicy-mangoes',
    },
    {
      id: 3,
      name: 'Green Apples',
      price: 'TK. 300',
      originalPrice: 'TK. 450',
      label: '150 OFF',
      image: 'https://onlineorchards.com/cdn/shop/products/granny1_edae09f8-feac-4066-b741-707586f2f3d2_345x@2x.jpg?v=1673300565',
      url: '/fruit/green-apples',
    },
    {
      id: 4,
      name: 'Pineapple',
      price: 'TK. 350',
      originalPrice: 'TK. 500',
      image: 'https://plantskingdom.in/cdn/shop/products/pinababy-psyche.jpg?v=1657427540',
      url: '/fruit/pineapple',
    },
    {
      id: 5,
      name: 'Fresh Oranges',
      price: 'TK. 220',
      originalPrice: 'TK. 300',
      label: '80 OFF',
      image: 'https://cdn1.bloomingdesert.com/wp-content/uploads/2016/11/orange-tree-plant-care.jpg',
      url: '/fruit/fresh-oranges',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-b border-slate-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-black">Fruits</h2>
        {/* <Link to={"/trees/mahogany"} className="text-black font-black hover:underline">
  See all
</Link> */}

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card rounded-t-3xl bg-base-100 shadow-xl relative">
            {/* Label Tag */}
            {product.label && (
              <div className="badge badge-success text-white absolute top-2 left-2">
                {product.label}
              </div>
            )}

            {/* Product Image */}
            <Link to={product.url}>
              <figure className="h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover h-full rounded-t-3xl"
                />
              </figure>
            </Link>

            {/* Product Info */}
            <div className="card-body p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {product.name.length > 27 ? `${product.name.slice(0, 27)}...` : product.name}
              </h3>

              {/* Price Section */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="line-through text-gray-500">{product.originalPrice}</span>
                )}
              </div>

              {/* Buy Now Button */}
              <div className="card-actions justify-end">
                <Link
                  to="/order"
                  className="btn btn-sm bg-green-700 text-white w-full rounded-lg font-semibold hover:bg-white hover:text-green-600 hover:border-green-600 hover:border transition"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruit;
