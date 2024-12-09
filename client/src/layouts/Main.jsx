import { Outlet, useLocation } from "react-router-dom"
import Tab from "../Components/AllTab/Tab"
import Navbar from "../Components/NavBar/Navbar"
import Footer from "../Components/Footer/Footer"
import { useContext, useEffect, useState } from "react"
import SocialToggleButton from "../Components/Utilities/SocialToggleButton/SocialToggleButton"
import Breadcrumbs from "../Components/Utilities/Breadcrumbs/Breadcrumbs"
import ImageColumn from "../Components/Utilities/ImageColumn/ImageColumn"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Chatbot from "../Components/Auth/Chatbot"
import { AuthContext } from "../providers/AuthProvider"

const Main = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);



  return (
    <div>
      {/* <Breadcrumbs/> */}
      <Navbar/>
      <Tab/>
      <ImageColumn customClass="z-0  absolute -top-0 left-0 w-full h-full"/>
      <Outlet/>
      <Footer/>
      <SocialToggleButton />
    </div>
  )
}

export default Main
