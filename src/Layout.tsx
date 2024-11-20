import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import ScrollBackToTopButton from './ScrollBackToTop';

const Layout: React.FC = () => (
  <div>
    <header>
      {/* <Navbar /> */}
    </header>
    <main>
      <Outlet />
      {/* <ScrollBackToTopButton /> */}
    </main>
    {/* <Footer /> */}
  </div>
);

export default Layout;