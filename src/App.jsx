import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import NotFound from './components/NotFound';
import Product from './modules/Product';
import Products from './modules/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories/:name' element={<CategoryProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
