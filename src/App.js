import React from 'react';
import {Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Portrait from './Portrait';
import Product from './Product';
import Wedding from './Wedding';
import Corporate from './Corporate';
import FloatingFooter from './Floating Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Portrait" element={<Portrait />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <FloatingFooter />
    </>
  );
};

export default App;

