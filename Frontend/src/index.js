import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './context/userProvider';
import ShoppingCartState from './context/shopping-cart/ShoppingCartState';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ShoppingCartState>
      <UserProvider>
          <App />
      </UserProvider>
      </ShoppingCartState>   
   </BrowserRouter> 
  </React.StrictMode>
);



