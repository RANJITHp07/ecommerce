import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthProvider} from "./context/authcontext"
import { CartProvider } from './context/cartcontext';
import { FilterProvider } from './context/filtercontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <CartProvider>
  <FilterProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FilterProvider>
  </CartProvider>
  </AuthProvider>
);

