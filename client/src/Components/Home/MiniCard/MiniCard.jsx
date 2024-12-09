import React from 'react';
import { Link } from 'react-router-dom';

const MiniCard = () => {
  // Array of products with name, image, and URL
  const products = [
    { name: 'Trees', image: '/Assets/ExtraPic/final.jpg', url: '/attar' },
    { name: 'Flowers', image: '/Assets/ExtraPic/flower.jpg', url: '/backpack' },
    { name: 'Green Plants', image: '/Assets/ExtraPic/green.jpg', url: '/combo-packs' },
    { name: 'Fruits', image: '/Assets/ExtraPic/Fruit_Trees.jpg', url: '/hooded-jacket' },
    { name: 'Vegetable', image: '/Assets/ExtraPic/kohl-3722517_640.jpg', url: '/padding-jacket' },
    { name: 'seeds', image: '/Assets/ExtraPic/seeds.jpg', url: '/panjabi' },
    { name: 'Other', image: '/Assets/ExtraPic/others.png', url: '/polo-shirt' },
    // { name: 'T-Shirt & Jersey', image: '/Assets/grassTob2.jpg', url: '/tshirt-jersey' },
    // { name: 'Trousers', image: '/Assets/vaseGrass.jpg', url: '/trousers' },
    // { name: 'Trousers', image: '/Assets/4grass.jpg', url: '/trousers' },
  ];

  return (
    <div className="z-10 relative max-w-7xl mx-auto px-4 py-12 mt-8 border-b mb-32">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {products.map((product, index) => (
      <Link to={product.url} key={index} className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        <div className="relative flex flex-col items-center justify-center pb-4 bg-slate-200 ">
          {/* <h3 className="text-white badge bg-green-700 border-none py-2 px-4 font-semibold absolute top-4">{product.name}</h3> */}
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="mt-4 text-center">
          <h3 className="text-white badge text-base bg-green-800 font-bold border-none py-2 px-6 rounded-lg   bottom-4">{product.name}</h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

  );
};

export default MiniCard;
