import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import HomePage from './pages/home/HomePage.jsx';
import Cart from './pages/carts/Cart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<div>Products</div>} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
