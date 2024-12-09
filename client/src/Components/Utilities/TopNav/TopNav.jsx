import React, { useState } from 'react';
// Dashboard.jsx
import { FaBars, FaBell, FaHouseDamage, FaExternalLinkAlt } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
// import logo from "../";
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import { CgNametag } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";

import { CgMail } from "react-icons/cg";
import Greeting from '../Gretttings/Greeting';


{/* <IoIosNotificationsOutline />
<CgMail /> */}



const TopNav = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        logOut();
        toast.success("Logged out successfully!");
        navigate('/');
    };

    return (
        <div>
            {/* Slim Top-bar */}
            <div className="h-16 md:h-20  justify-between   flex items-center   fixed top-0 left-0 right-0 z-50 px-4 lg:px-6">
                {/* Sidebar Toggle for Mobile */}
                <label
                    htmlFor="my-drawer-2"
                    className="p-3 rounded-xl btn-glass text-sm lg:text-xl  text-green-600 border border-green-600 shadow-2xl lg:hidden"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <FaBars />
                </label>

                {/* Logo and Brand Name for Larger Screens */}

                <div className="flex items-start  gap-3 ">

                    <p className="font-black text-lg lg:text-2xl hidden lg:block md:block bg-gradient-to-r from-emerald-700 via-yellow-500 to-green-600 bg-clip-text text-transparent pe-32">NatureNest</p>
                     
                     <div className='px-12'>
                    <Greeting />
                     </div>
                </div>

                



                {/* Search, Notifications, Profile */}
                <div className="flex items-center gap-4">
                    <div className="relative w-full max-w-md">

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-16 py-2 rounded-full bg-gray-50 text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.9 14.32a7 7 0 1 1 1.41-1.41l4.32 4.32a1 1 0 0 1-1.41 1.41l-4.32-4.32ZM14 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 text-white text-sm py-1 px-3 rounded-full hover:bg-green-600 transition duration-200
                        
                        bg-gradient-to-r from-green-400 to-green-600   font-semibold  shadow-md hover:scale-105  ">
                            Search
                        </button>
                    </div>


                    {user && (

                        <Link to="/dashboard/notifications">
                            <button className="flex relative">
                                <CgMail className="text-3xl lg:text-2xl text-black" />
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1">
                                    0
                                </span>
                            </button>
                        </Link>
                    )}
                    {user && (

                        <Link to="/dashboard/notifications">
                            <button className="flex relative ">
                                <MdNotificationsNone className="text-3xl  lg:text-2xl text-black font-black" />
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1">
                                    0
                                </span>
                            </button>
                        </Link>
                    )}
                    {/* user info */}
                    <div className="flex items-center gap-2 p-2 rounded-md  ">

                        <div>
                            <p className="text-base flex items-center  gap-2 font-medium text-black bg-green- my-1"><CgNametag />
                                {user?.displayName || "User"}</p>
                            <p className="text-xs text-black bg-green">{user?.email}</p>
                        </div>
                    </div>
                    {/* Avatar as Dropdown Button */}
                    <div className="dropdown dropdown-end">




                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 lg:w-12 rounded-full border-2 border-green-500">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </label>


                        {/* Dropdown Menu */}
                        <ul tabIndex={0} className="dropdown-content menu p-  rounded-box  border-b border-t border-gray-200 
            
             menu-sm  bg-base-100  z-[1] mt-3 w-52 shadow-inner  drop-shadow-xl shadow-slate-400">
                            <li>
                                <a href="/profile" className="flex items-center gap-4 p-2 hover:bg-green-200">
                                    <CgProfile className="text-2xl " />
                                    Profile
                                </a>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="flex items-center gap-4 p-2 hover:bg-green-200">
                                    <FaExternalLinkAlt className="text-xl" /> Logout
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;