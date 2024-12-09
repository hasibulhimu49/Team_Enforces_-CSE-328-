import { useState } from "react";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  // Define state for each dropdown
  const [isFoodsOpen, setIsFoodsOpen] = useState(false);
  const [isAttarOpen, setIsAttarOpen] = useState(false);
  const [isMensClothingOpen, setIsMensClothingOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isWinterOpen, setIsWinterOpen] = useState(false);
  const [isPanjabiOpen, setIsPanjabiOpen] = useState(false);
  const [isComboOpen, setIsComboOpen] = useState(false);


  return (
    <div className="dropdown">
      {/* Mobile Hamburger Icon */}
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {/* Main Dropdown List */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 border rounded-box z-[1] mt-3 w-52 p-2 shadow-inner drop-shadow-xl shadow-slate-400"
      >
        {/* FOODS */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink
              to="/food"
              className="text-black hover:text-gray-700"
            >
              FOODS
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsFoodsOpen(!isFoodsOpen)}
            >
              {isFoodsOpen ? "-" : "+"}
            </button>
          </div>
          {isFoodsOpen && (
            <ul className="p-2">
              <li><NavLink to="/food/item1" className="hover:bg-gray-100">Item 1</NavLink></li>
              <li><NavLink to="/food/item2" className="hover:bg-gray-100">Item 2</NavLink></li>
            </ul>
          )}
        </li>

        {/* ATTAR */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink
              to="/attar"
              className="text-black hover:text-gray-700"
            >
              ATTAR
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsAttarOpen(!isAttarOpen)}
            >
              {isAttarOpen ? "-" : "+"}
            </button>
          </div>
          {isAttarOpen && (
            <ul className="p-2">
              <li><NavLink to="/attar/item1" className="hover:bg-gray-100">Item 1</NavLink></li>
              <li><NavLink to="/attar/item2" className="hover:bg-gray-100">Item 2</NavLink></li>
            </ul>
          )}
        </li>

        {/* MEN'S CLOTHING */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink
              to="/mens-clothing"
              className="text-black hover:text-gray-700"
            >
              MEN'S CLOTHING
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsMensClothingOpen(!isMensClothingOpen)}
            >
              {isMensClothingOpen ? "-" : "+"}
            </button>
          </div>
          {isMensClothingOpen && (
            <ul className="p-2">
              <li><NavLink to="/mens-clothing/shirts" className="hover:bg-gray-100">Shirts</NavLink></li>
              <li><NavLink to="/mens-clothing/trousers" className="hover:bg-gray-100">Trousers</NavLink></li>
            </ul>
          )}
        </li>

        {/* OTHERS */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink to="/others"
              className="text-black hover:text-gray-700"
            >
              OTHERS
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsOthersOpen(!isOthersOpen)}
            >
              {isOthersOpen ? "-" : "+"}
            </button>
          </div>
          {isOthersOpen && (
            <ul className="p-2">
              <li><NavLink to="/others/item1" className="hover:bg-gray-100">Item 1</NavLink></li>
              <li><NavLink to="/others/item2" className="hover:bg-gray-100">Item 2</NavLink></li>
            </ul>
          )}
        </li>

        {/* WINTER 2024 */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink to="/winter2024"
              className="text-black hover:text-gray-700"
            >
              WINTER 2024
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsWinterOpen(!isWinterOpen)}
            >
              {isWinterOpen ? "-" : "+"}
            </button>
          </div>
          {isWinterOpen && (
            <ul className="p-2">
              <li><NavLink to="/winter2024/item1" className="hover:bg-gray-100">Item 1</NavLink></li>
              <li><NavLink to="/winter2024/item2" className="hover:bg-gray-100">Item 2</NavLink></li>
            </ul>
          )}
        </li>

        {/* PANJABI */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink to="/panjabi"
              className="text-black hover:text-gray-700"
            >
              PANJABI
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsPanjabiOpen(!isPanjabiOpen)}
            >
              {isPanjabiOpen ? "-" : "+"}
            </button>
          </div>
          {isPanjabiOpen && (
            <ul className="p-2">
              <li><NavLink to="/panjabi/item1" className="hover:bg-gray-100">Item 1</NavLink></li>
              <li><NavLink to="/panjabi/item2" className="hover:bg-gray-100">Item 2</NavLink></li>
            </ul>
          )}
        </li>

        {/* COMBO */}
        <li>
          <div className="flex justify-between items-center">
            <NavLink to="/combo"
              className="text-black hover:text-gray-700"
            >
              COMBO
            </NavLink>
            <button
              className="focus:outline-none"
              onClick={() => setIsComboOpen(!isComboOpen)}
            >
              {isComboOpen ? "-" : "+"}
            </button>
          </div>
          {isComboOpen && (
            <ul className="p-2">
              <li><NavLink to="/combo/item1" className="hover:bg-gray-100">Item 1</NavLink></li>
              <li><NavLink to="/combo/item2" className="hover:bg-gray-100">Item 2</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
