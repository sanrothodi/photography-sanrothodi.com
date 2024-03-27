import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import MainContent from "./Content";
import PortfolioGrid from "./Portfolio Grid";
import Footer from "./Footer";

const Index = () => {
  return(
    <>
      <Navbar />
      <Sidebar />
      <MainContent />

      <Footer />
    </>
  )
}

// Select the DOM element where you want to mount your React app
const container = document.getElementById('root');
// Use createRoot to handle the rendering
const root = createRoot(container);
// Render your component
root.render(<Index />);
