import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from '../router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);