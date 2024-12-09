import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Cube Vase ',
      price: 'TK. 890',
      originalPrice: 'TK. 1200',
      label: '310 FLAT',
      image: '/Assets/grassTob2.jpg',
      url: '/attar/refreshing-perfume-oil-box',
    },
    {
      id: 2,
      name: 'Glass Bud Vase',
      price: 'TK. 5000',
      originalPrice: 'TK. 1200',
      label: null,
      image: '/Assets/4grass.jpg',
      url: '/attar/platinum-wooden-box',
    },
    {
      id: 3,
      name: 'Column Vase',
      price: 'TK. 990',
      originalPrice: 'TK. 2000',
      label: '1010 FLAT',
      image: '/Assets/grass.jpg',
      url: '/attar/best-of-surrati-swiss',
    },
    {
      id: 4,
      name: 'Bowl vase',
      price: 'TK. 4500',
      originalPrice: 'TK. 1200',
      image: '/Assets/4grass.jpg',
      url: '/attar/platinum-wooden-box',
    },
    {
      id: 5,
      name: 'Bouquet Vase',
      price: 'TK. 690',
      originalPrice: 'TK. 1200',
      label: '1010 FLAT',
      image: '/Assets/grassTob2.jpg',
      url: '/attar/royal-version',
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto px-4 py-8 border-b border-slate-300" >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-black">Tree</h2>
        {/* <Link to="/attar" className="text-black font-black  hover:underline">
          See all
        </Link> */}
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div key={product.id} className="card rounded-t-3xl bg-base-100 shadow-xl  relative ">
            {/* Label Tag */}
            {product.label && (
              <div className="badge badge-success text-white absolute top-2 left-2">
                {product.label}
              </div>
            )}

            {/* Product Image */}
            <Link to={"/product"}>
            <figure className="h-48">
              <img src={product.image} alt={product.name} className="w-full object-cover h-full rounded-t-3xl " />
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

export default HomeCard;