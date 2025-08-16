import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import { Outlet } from 'react-router';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const MainLayout = () => {
    useEffect(() => {
    Aos.init({ duration: 1200, once: true }); // 1.2s animation
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  );
};

export default MainLayout;