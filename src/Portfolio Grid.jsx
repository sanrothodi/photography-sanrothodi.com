import React from 'react';
import GridItems from './Grid Item'; // Adjust the import path as necessary
import sections from './Sections';

const portfolioImages = [
  'image-01.jpg',
  'image-02.jpg',
  'image-03.jpg',
  // Add more image names here
];

const PortfolioGrid = () => {
  return (
    <div className="gallery-content">
      <PortfolioGrid sections={sections} images={portfolioImages} />
    </div>
  );
};

export default PortfolioGrid;


