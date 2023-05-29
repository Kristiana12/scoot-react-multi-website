import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Location,
  Careers,
  Products,
  ErrorPage,
} from './pages/ExportPagesComponents.jsx';
import AppThemeProvider from './context/theme-context.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/location',
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
);
