import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './components/Home';
import Product from './components/Products';
import Category from './components/Category';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Under construction</div>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/category/:categoryId',
        element: <Category />,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}></RouterProvider>);
