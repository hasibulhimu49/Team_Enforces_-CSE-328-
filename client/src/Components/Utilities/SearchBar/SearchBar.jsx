import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearchBar = () => {
    setIsSearchOpen(false); 
  };

  return (
    <div>
      {/* For mobile screens (below 640px) */}
      <div className="sm:hidden">
        <button onClick={toggleSearchBar} className="btn btn-ghost">
        <GoSearch className='text-xl ' />
        </button>

        {/* Search bar that slides down from top for mobile */}
        {isSearchOpen && (
          <>
            {/* Overlay that closes the search bar when clicked */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSearchBar}></div>

            <div className="fixed top-0 left-0 w-full p-4 bg-white shadow-lg z-50 ">
              <div className="flex items-center px-2 gap-4">
                <input
                  type="text"
                  placeholder="Search your choice ..."
                  className="input input-bordered border-green-500 focus:outline-none focus:border-green-500  h-10 w-full"                />
                <button onClick={toggleSearchBar} className="rounded-lg  bg-green-600 py-2 px-6 p-2 ">
                <GoSearch className='text-2xl text-white' />       </button>
              </div>
            </div>
          </>
        )}
      </div>




      {/* For tablet and desktop screens (640px and above) */}
      <div className="hidden sm:flex items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered border-green-500 focus:outline-none focus:border-green-500 lg:pe-36 md:me-34 h-10 "

        />
        <button className="rounded-lg ms-1  bg-green-600 p-4 py-2  me-8 ">
        <GoSearch className='text-2xl text-white' />
        </button>
      </div>
     
    </div>
  );
};

export default SearchBar;
