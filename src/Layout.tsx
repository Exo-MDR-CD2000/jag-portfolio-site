import React from 'react';
import { Outlet } from 'react-router-dom';
import SkipNavigation from './components/SkipNavigation';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import ScrollBackToTopButton from './ScrollBackToTop';

const Layout: React.FC = () => (
  <>
    <SkipNavigation />
    <header role='banner'>
      {/* <Navbar /> */}
    </header>
    <main id='main-content' role='main'>
      <Outlet />
      {/* <ScrollBackToTopButton /> */}
    </main>
    {/* <Footer /> */}
  </>
);

export default Layout;