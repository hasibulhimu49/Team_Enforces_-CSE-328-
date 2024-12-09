import React from 'react';
import { Link } from 'react-router-dom';

const Seeds = () => {
  // Sample seeds data
  const products = [
    {
      id: 1,
      name: 'Sunflower Seeds',
      price: 'TK. 200',
      originalPrice: 'TK. 300',
      label: '100 OFF',
      image: 'https://static-01.daraz.com.bd/p/660a02b1f7e431fb01819896664f503a.jpg',
      url: '/seeds/sunflower-seeds',
    },
    {
      id: 2,
      name: 'Pumpkin Seeds',
      price: 'TK. 350',
      originalPrice: 'TK. 500',
      label: null,
      image: 'https://www.onceuponapumpkinrd.com/wp-content/uploads/2019/09/pumpkin-seeds.jpg',
      url: '/seeds/pumpkin-seeds',
    },
    {
      id: 3,
      name: 'Tomato Seeds',
      price: 'TK. 120',
      originalPrice: 'TK. 200',
      label: '80 OFF',
      image: 'https://images.squarespace-cdn.com/content/v1/563cf214e4b021af1b575f8a/1454030591201-T2WRRCD8KGIHPJ4OZJTH/image-asset.jpeg?format=1500w',
      url: '/seeds/tomato-seeds',
    },
    {
      id: 4,
      name: 'Carrot Seeds',
      price: 'TK. 150',
      originalPrice: 'TK. 220',
      image: 'https://seed2plant.in/cdn/shop/products/69.png?v=1705038401&width=3840',
      url: '/seeds/carrot-seeds',
    },
    {
      id: 5,
      name: 'Spinach Seeds',
      price: 'TK. 100',
      originalPrice: 'TK. 180',
      label: '80 OFF',
      image: 'https://image.made-in-china.com/202f0j00idFVSWnycGcK/Bo-cai-zhong-zi-100-Natural-Spinach-Vegetable-Seeds-for-Planting.webp',
      url: '/seeds/spinach-seeds',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-b border-slate-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-black">Seeds</h2>
        {/* <Link to="/seeds" className="text-black font-black hover:underline ">
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

export default Seeds;
