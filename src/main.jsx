import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CartPage from './pages/CartPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { CartProvider } from './context/CartContext.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Footer from './components/Footer.jsx';
import './index.css'

function RouteSwitch() {
  return(
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route index path = '/' element = {<HomePage/>}/>
          <Route path = '/shop' element = {<ShopPage/>}/>
          <Route path='/shop/:productId' element={<ProductPage/>}/>
          <Route path = '/about' element = {<AboutPage/>}/>
          <Route path = '/cart' element = {<CartPage/>}/>
          <Route path = '/*' element = {<NotFound/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
)
