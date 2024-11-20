import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from '../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <ToastContainer 
        position="top-right"  
        autoClose={3000}      
        hideProgressBar={false} 
        newestOnTop={true}     
        closeButton={true}  
      />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout