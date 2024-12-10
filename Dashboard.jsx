// Dashboard.jsx
import { FaBars, FaBell, FaHouseDamage, FaExternalLinkAlt } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { toast } from "react-toastify";
import useAdmin from './../hooks/useAdmin';
import UserLinks from "./Users/UserLinks";
import AdminLinks from "./Admin/AdminLinks";
import useAuth from "../hooks/useAuth";
import logo from "/logo.png";
import TopNav from "../Components/Utilities/TopNav/TopNav";



function Dashboard() {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    {/*

    TODO: grid system in dashboard
        
   
    
    */}


    return (
        <div className="drawer   lg:drawer-open min-h-screen grid grid-cols-12">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* Sidebar */}
            <div className="drawer-side col-span-2 fixed lg:relative z-50  ps-2 ">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-72 lg:w-72 h-screen flex flex-col bg-white">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 mb-6 mt-2">
                        <img src={logo} alt="Logo" className="w-8 h-8 lg:w-10 lg:h-10" />
                        <p className="font-black text-lg lg:text-2xl bg-gradient-to-r from-emerald-700 via-yellow-500 to-green-600 bg-clip-text text-transparent border-b">NatureNest</p>
                    </Link>


                    {/* Sidebar Links */}
                    <div className="flex flex-col   text-sm lg:text-base gap-2 text-gray-700 flex-grow">
                        {isAdmin ? <AdminLinks /> : <UserLinks />}
                    </div>
 

                    <div className="bg-green-100 rounded-lg p-6 w-64 text-center shadow-lg">
                        <div className="text-3xl mb-4">🎉</div>
                        <p className="text-lg font-medium text-gray-800">Get Premium Features at</p>
                        <p className="text-3xl font-bold text-gray-900 my-2">25% off</p>
                        <button className="  mt-4
                        px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:scale-105 transform transition
                        ">Upgrade Now</button>
                    </div>


                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative z-30 flex flex-col col-span-10 bg-[#f1f5f0]">

                {/* Page Content */}
                <div className="pt-20 px-4 lg:px-6">
                    <TopNav />
                    <Outlet /> {/* Routed content will appear here */}
                </div>
            </div>
        </div>

    );
}

export default Dashboard;



