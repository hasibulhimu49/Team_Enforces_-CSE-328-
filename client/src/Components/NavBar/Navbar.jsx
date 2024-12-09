import React, { useContext, useState } from 'react';
import SearchBar from '../Utilities/SearchBar/SearchBar';
import mainLogo from '/logo.png'
import placeholder from "/greenPlcaeholder.png"
import { Link } from 'react-router-dom';
import Dropdown from '../Utilities/DropDown/Dropdown';
import Modal from '../Auth/Modal';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';
import { IoLocationOutline } from "react-icons/io5";
import { img } from 'framer-motion/client';
import { AuthContext } from '../../providers/AuthProvider';
import { AiTwotoneCamera } from "react-icons/ai";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Track if it's login or signup
    const displayPhoto = user?.photoURL || "Default Name"; // Use optional chaining

    console.log(displayPhoto);

    // Open modal for login/signup
    const openModal = () => {
        setIsModalOpen(true);
        setIsLogin(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto z-50 relative">


            <div className="navbar-start">
                {/* Navbar mobile view  */}
                <Dropdown />

                <Link to={'/'} className="flex items-center text-xl">

                    <img src={mainLogo} alt="" className='lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-6 sm:h-6 w-4 h-4' />

                    <p className='lg:underline underline-offset-4 font-black lg:text-3xl md:text-2xl text-xs 
                    bg-gradient-to-r from-emerald-700 via-yellow-500 to-green-600 bg-clip-text text-transparent
                    '>NatureNest</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <SearchBar />
            </div>
            {/* Navbar ending site */}
            <div className="navbar-end">

                <div className=" bg-base-100">

                    <div className="flex justify-between items-center">

                        <div className="block lg:hidden md:block">
                            <SearchBar />

                        </div>
                        <Link to={"/ai"}>
                            <div className="tooltip tooltip- tooltip-bottom" data-tip="Click to open disease detection camera">
                                <button
                                    className="flex justify-center items-center"
                                    
                                >
                                    <AiTwotoneCamera className="text-4xl me-4 font-black rounded-lg bg-green-300 p-2" />
                                </button>

                                {/* Tooltip Component */}
                               
                            </div>
                        </Link>

                        <Link to={"/location"} className='flex justify-center items-center font-black  p-1 text-2xl'>
                            <IoLocationOutline />
                        </Link>

                        <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn btn-ghost ">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>

                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 shadow-inner drop-shadow-xl shadow-slate-400 z-[1] mt-3 w-52 ">
                                <div className="card-body">
                                    <p className="text-md font-bold ">Items : <span>8</span> </p>
                                    <p className="text-md font-bold ">Subtotal: $ <span>999</span> </p>

                                    <div className="card-actions">

                                        <Link to={'/cart'} className="btn btn-sm bg-green-600 text-white btn-block">View cart</Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="lg:w-10 md:w-10 sm:w-10 w-8 rounded-full">
                                    {user && user ?
                                        <img
                                            className='lg:w-10 md:w-10 sm:w-10 w-8'
                                            src={user?.photoURL}
                                            alt="" />
                                        :
                                        <img
                                            className='lg:w-10 md:w-10 sm:w-10 w-8'
                                            src={placeholder}
                                            alt=""
                                        />
                                    }
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-inner  drop-shadow-xl shadow-slate-400">
                                <li>
                                    <Link to={"/profile"} className="justify-between">
                                        Profile

                                    </Link>
                                </li>
                                <li><Link to={"/dashboard"}>Settings</Link></li>
                                {user && user ?

                                    <li><Link onClick={logOut} className='text-green-600 font-black '>Logout</Link></li>
                                    :
                                    <li><button onClick={openModal} className='text-green-600 font-black '>Sign in</button></li>

                                }
                            </ul>
                        </div>
                        {/* Modal for Login/Signup */}
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            {isLogin ? (
                                <LoginForm isOpen={isModalOpen} onClose={closeModal} onSwitchToSignup={() => setIsLogin(false)} />
                            ) : (
                                <SignupForm isOpen={isModalOpen} onClose={closeModal} onSwitchToLogin={() => setIsLogin(true)} />
                            )}
                        </Modal>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;