import React from 'react';
import { Link } from 'react-router-dom';

const Vegetable = () => {
  // Sample vegetable data
  const products = [
    {
      id: 1,
      name: 'Fresh Carrots',
      price: 'TK. 150',
      originalPrice: 'TK. 250',
      label: '100 OFF',
      image: 'https://images.stockcake.com/public/3/d/2/3d23adc3-81c3-4a4b-aa27-21045c1915a0_large/fresh-carrot-harvest-stockcake.jpg',
      url: '/vegetable/fresh-carrots',
    },
    {
      id: 2,
      name: 'Broccoli',
      price: 'TK. 300',
      originalPrice: 'TK. 400',
      label: null,
      image: 'https://img.freepik.com/premium-photo/fresh-broccoli-vegetable-field-broccoli-focus-camera_960396-706803.jpg',
      url: '/vegetable/broccoli',
    },
    {
      id: 3,
      name: 'Tomatoes',
      price: 'TK. 120',
      originalPrice: 'TK. 200',
      label: '80 OFF',
      image: 'https://c8.alamy.com/comp/2FKXGNP/close-up-tomato-fresh-vegetable-field-2FKXGNP.jpg',
      url: '/vegetable/tomatoes',
    },
    {
      id: 4,
      name: 'Green Capsicum',
      price: 'TK. 250',
      originalPrice: 'TK. 350',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312623899/ST/WX/LR/187956893/fresh-green-capsicum-500x500.jpeg',
      url: '/vegetable/green-capsicum',
    },
    {
      id: 5,
      name: 'Spinach',
      price: 'TK. 80',
      originalPrice: 'TK. 150',
      label: '70 OFF',
      image: 'https://gardenerspath.com/wp-content/uploads/2024/03/How-to-Grow-Spinach-Feature.jpg',
      url: '/vegetable/spinach',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-b border-slate-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-black">Vegetables</h2>
        {/* <Link to="/vegetable" className="text-black font-black hover:underline ">
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

export default Vegetable;
