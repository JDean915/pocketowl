import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import SupaAuth from './components/SupaAuth';
import CoursePage from './pages/CoursePage';
import Aboutus from './pages/AboutUs';
import AllCourses from './pages/AllCourses';
import Account from './pages/Account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <p>Page not found!</p>,
    children: [
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: '/authenticate',
        element: <SupaAuth/>
      },
      {
        path: '/courses/:code',
        element: <CoursePage/>
      },
      {
        path: '/aboutus',
        element: <Aboutus/>
      },
      {
        path: '/settings/account',
        element: <Account/>
      },
      {
        path: '/mastercourselist',
        element: <AllCourses/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
