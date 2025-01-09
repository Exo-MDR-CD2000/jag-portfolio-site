import React from 'react';
import { Outlet } from 'react-router-dom';
import SkipNavigation from './components/SkipNavigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ScrollBackToTopButton from './ScrollBackToTop';

const Layout: React.FC = () => (
  <div className='d-flex flex-column min-vh-100'>
    <SkipNavigation />
    <header role='banner'>
      <Navbar />
    </header>
    <main id='main-content' role='main'>
      <Outlet />
      {/* <ScrollBackToTopButton /> */}
    </main>
    <Footer />
  </div>
);

export default Layout;