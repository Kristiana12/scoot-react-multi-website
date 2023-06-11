import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import {
  About,
  Location,
  Careers,
  Products,
  ErrorPage,
  Contact,
} from './pages/ExportPagesComponents.js';
import AppThemeProvider from './context/theme-context.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/locations',
          element: <Location />,
        },
        {
          path: '/careers',
          element: <Careers />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/404',
          element: <ErrorPage />,
        },
        {
          path: '*',
          element: <Navigate replace to="/404" />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? '/' : '/scoot-react-multi-website/' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
);
