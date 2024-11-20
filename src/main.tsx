import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';


// // Import Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS


// import css styles
import 'normalize.css'; // might not use this because of bootstrap
import './css/index.min.css';

// import pages and layout

import Layout from './Layout.tsx';
import HomePage from './pages/HomePage.tsx';

// create browser router

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" />,
        handle: {
          ariaLabel: 'Navigate to Home Page',
        }
       },
      { path: 'home', element: <HomePage />,
        // add meta data for accessibility
        handle: {
          crumb: 'Home',
        }
       },
      // { path: 'about', element: <About /> },
      // { path: 'contact', element: <Contact /> },
      // { path: 'blog', element: <Blog /> },
      // { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)