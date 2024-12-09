import React from 'react';
import { FaHome } from 'react-icons/fa'; // For the Home icon
import { IoIosArrowDown } from 'react-icons/io'; // For the dropdown arrow icons
import { NavLink } from 'react-router-dom';

// Define the category data
const categories = [
  {
    name: 'Trees',
    subcategories: [
      { name: 'Mahogany Trees', path: '/trees/mahogany' },
      { name: 'Teak Trees', path: '/trees/teak' },
      { name: 'Pine Trees', path: '/trees/pine' },
    ],
  },
  {
    name: 'Flowers',
    subcategories: [
      { name: 'Rose Flowers', path: '/flowers/rose' },
      { name: 'Tulip Flowers', path: '/flowers/tulip' },
      { name: 'Sunflower', path: '/flowers/sunflower' },
    ],
  },
  {
    name: 'Green Plants',
    subcategories: [
      { name: 'Indoor Plants', path: '/green-plants/indoor' },
      { name: 'Outdoor Plants', path: '/green-plants/outdoor' },
    ],
  },
  {
    name: 'Fruits',
    subcategories: [
      { name: 'Apple Fruits', path: '/fruits/apple' },
      { name: 'Berries Fruits', path: '/fruits/berries' },
      { name: 'Orange Fruits', path: '/fruits/orange' },
    ],
  },
  {
    name: 'Vegetables',
    subcategories: [
      { name: 'Spinach Vegetables', path: '/vegetables/spinach' },
      { name: 'Broccoli Vegetables', path: '/vegetables/broccoli' },
    ],
  },
  {
    name: 'Seeds',
    subcategories: [
      { name: 'Sunflower Seeds', path: '/seeds/sunflower-seeds' },
      { name: 'Pumpkin Seeds', path: '/seeds/pumpkin-seeds' },
      { name: 'Chia Seeds', path: '/seeds/chia-seeds' },
    ],
  },
  {
    name: 'Other',
    subcategories: [
      { name: 'Gardening Tools', path: '/other/tools' },
      { name: 'Gardening Supplies', path: '/other/supplies' },
      { name: 'Garden Decor', path: '/other/decor' },
    ],
  },
];

const Tab = () => {
  return (
    <div className="max-w-7xl mx-auto lg:block md:block hidden relative z-40">
      <div className="bg-white border-b border-t border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex md:flex-wrap justify-center items-center space-x-6 py-4">
            {/* Home Icon */}
            <li>
              <NavLink to="/" className="text-black text-xl">
                <FaHome />
              </NavLink>
            </li>

            {/* Dynamic Category Menu */}
            {categories.map((category, index) => (
              <li key={index}>
                <div className="dropdown dropdown-bottom flex items-center">
                  <NavLink
                    to="" // This is the default route for categories without subcategories
                    className={({ isActive }) =>
                      isActive ? 'text-black font-bold hover:font-black' : 'text-black hover:font-black'
                    }
                  >
                    {category.name}
                  </NavLink>
                  <button className="ml-1 flex items-center" tabIndex={0}>
                    <IoIosArrowDown className="ml-1 transition-transform duration-300" />
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-white rounded-md z-[1] w-36 shadow-2xl transition-all duration-300 ease-in-out opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 menu-sm mt-3 p-2 drop-shadow-lg shadow-green-400"
                  >
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex} className="p-2 rounded-md">
                        <NavLink
                          to={sub.path} // Use NavLink for subcategory navigation
                          className="block w-full hover:bg-green-600 hover:text-white hover:font-black"
                        >
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
